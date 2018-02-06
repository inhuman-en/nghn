import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'hn-newsitem',
    templateUrl: './newsitem.component.html',
    styleUrls: ['./newsitem.component.scss']
})
export class NewsitemComponent implements OnInit {

    // todo: domain typing
    @Input() item: any = {};

    constructor() {}

    ngOnInit() {}
}
