import { Component, OnInit, OnDestroy } from '@angular/core';
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
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/combineLatest';

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
    feed$: Observable<any>;
    subscription$: Subscription;

    feedType: string;

    newsDisplayState: string;

    constructor(
        private service: HackerNewsService,
        private route: ActivatedRoute,
        private router: Router
    ) {
        console.log(route);
    }

    ngOnInit() {
        this.subscribeToPageChange();
    }

    ngOnDestroy() {
        this.subscription$.unsubscribe();
    }

    private fetchFeedByPage(feedType: string, page: number): void {
        this.feed$ = this.service
            .getFeed(feedType, page)
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
        this.subscription$ = this.route.queryParamMap.map(params =>
            parseInt(params.get('page'), 10)
        ).combineLatest(this.route.data.map(params =>
            params.feedType
        )).subscribe((value: any) => {
            const [page, feedType] = value;
console.log(page);
            this.feedType = feedType;

            this.fetchFeedByPage(feedType, page);
            this.updateCurrentPage(page);
            this.setAppearanceState('hidden');
        });
    }
}
