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
import { HackerNewsService } from '../hacker-news.service';
import { Observable, Subscription } from 'rxjs';
// import { map, share, combineLatest} from 'rxjs/operators';
import 'rxjs-compat/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/combineLatest';

@Component({
    selector: 'hn-topnews',
    templateUrl: './topnews.component.html',
    styleUrls: ['./topnews.component.scss']
})
export class TopnewsComponent implements OnInit, OnDestroy {
    currentPage = 1;
    showSpinner = false;
    feed$: Observable<any>;
    subscription$: Subscription;

    feedType: string;

    constructor(
        private service: HackerNewsService,
        private route: ActivatedRoute,
        private router: Router
    ) {}

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
            .share();

        this.showSpinner = true;
    }

    private toggleSpinner(on: boolean) {
        this.showSpinner = on;
    }

    private updateCurrentPage(currentPage: number): void {
        this.currentPage = currentPage;
    }

    private subscribeToPageChange(): void {
        this.subscription$ = this.route.queryParamMap
            .map(params => parseInt(params.get('page'), 10))
            .combineLatest(this.route.data.map(params => params.feedType))
            .subscribe((value: any) => {
                const [page, feedType] = value;
                this.feedType = feedType;

                this.fetchFeedByPage(feedType, page);
                this.updateCurrentPage(page);
            });
    }
}
