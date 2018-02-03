import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
    trigger,
    state,
    style,
    animate,
    transition,
    keyframes
} from '@angular/animations';
import { HackerNewsService } from '../../shared/index';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/share';

@Component({
    selector: 'hn-topnews',
    templateUrl: './topnews.component.html',
    styleUrls: ['./topnews.component.scss'],
    animations: [
        trigger('appear', [
            state('hidden', style({ opacity: '.1' })),
            state('visible', style({ opacity: '1'  })),
            transition('hidden => visible', [
                animate(
                    400,
                    keyframes([
                        style({ opacity: '.1' , offset: 0 }),
                        style({ opacity: '1' , offset: 1.0 })
                    ])
                )
            ])
        ])
    ]
})
export class TopnewsComponent implements OnInit {
    currentPage = 1;
    showSpinner = false;
    topNews$: Observable<any>;
    page$: Observable<number>;

    newsDisplayState: string;

    constructor(
        private service: HackerNewsService,
        private route: ActivatedRoute,
        private router: Router
    ) {}

    ngOnInit() {
        this.subscribeToPageChange();
    }

    private fetchNewsByPage(page: number): void {
        this.topNews$ = this.service
            .getNews(page)
            .do(
                () => this.toggleSpinner(false),
                () => this.toggleSpinner(false)
            )
            .do(() => this.setAppearanceState('visible'))
            .share();

        this.showSpinner = true;
    }

    private setAppearanceState(newState: string) {
        this.newsDisplayState = newState;
    }

    private toggleSpinner(on: boolean) {
        this.showSpinner = on;
    }

    private updateCurrentPage(currentPage: number): void {
        this.currentPage = currentPage;
    }

    private subscribeToPageChange(): void {
        this.page$ = this.route.queryParamMap.map(params =>
            parseInt(params.get('page'), 10)
        );

        this.page$.subscribe((page: number) => {
            this.fetchNewsByPage(page);
            this.updateCurrentPage(page);
            this.setAppearanceState('hidden');
        });
    }
}
