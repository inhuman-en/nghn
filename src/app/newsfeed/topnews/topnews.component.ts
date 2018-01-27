import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HackerNewsService } from '../../shared/index';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
    selector: 'hn-topnews',
    templateUrl: './topnews.component.html',
    styleUrls: ['./topnews.component.scss']
})
export class TopnewsComponent implements OnInit {
    currentPage = 1;
    topNews$: Observable<any>;
    page$: Observable<number>;

    constructor(
        private service: HackerNewsService,
        private route: ActivatedRoute,
        private router: Router
    ) {}

    ngOnInit() {
        this.subscribeToPageChange();
    }

    private fetchNewsByPage(page: number): void {
        this.topNews$ = this.service.getNews(page);
    }

    private updateCurrentPage(currentPage: number): void {
        this.currentPage = currentPage;
    }

    private subscribeToPageChange(): void {
        this.page$ = this.route.queryParamMap.map(params =>
            parseInt(params.get('page'), 10)
        );
        // todo: test this by navigating via router and verifying properties
        this.page$.subscribe(this.fetchNewsByPage.bind(this));
        this.page$.subscribe(this.updateCurrentPage.bind(this));
    }
}
