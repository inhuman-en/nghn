import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'hn-topnews',
    templateUrl: './topnews.component.html',
    styleUrls: ['./topnews.component.scss']
})
export class TopnewsComponent implements OnInit {
    items: any[] = [
        {
            title: 'item',
            url: 'http://example.com'
        },
        {
            title: 'item',
            url: 'http://example.com'
        },
        {
            title: 'item',
            url: 'http://example.com'
        },
        {
            title: 'item',
            url: 'http://example.com'
        },

        {
            title: 'item',
            url: 'http://example.com'
        }
    ];

    constructor() {}

    ngOnInit() {}
}
