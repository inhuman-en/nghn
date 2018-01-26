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
    prevPageQuery: { page: number } = { page: 1 };
    nextPageQuery: { page: number } = { page: 1 };
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

    private updatePaginator(currentPage: number): void {
        this.prevPageQuery.page = currentPage - 1;
        this.nextPageQuery.page = currentPage + 1;
    }

    private subscribeToPageChange(): void {
        this.page$ = this.route.queryParamMap.map(params =>
            parseInt(params.get('page'), 10)
        );
        // todo: test this by navigating via router and verifying properties
        this.page$.subscribe(this.fetchNewsByPage.bind(this));
        this.page$.subscribe(this.updatePaginator.bind(this));
    }
}
