import { Component, OnInit } from '@angular/core';
import { HackerNewsService } from '../../shared/index';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'hn-topnews',
    templateUrl: './topnews.component.html',
    styleUrls: ['./topnews.component.scss']
})
export class TopnewsComponent implements OnInit {
    topNews$: Observable<any>;

    constructor(private service: HackerNewsService) {}

    ngOnInit() {
        this.topNews$ = this.service.getNews(1);
    }
}
