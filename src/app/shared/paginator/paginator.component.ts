import {
    Component,
    OnInit,
    OnChanges,
    SimpleChanges,
    SimpleChange,
    Input
} from '@angular/core';

@Component({
    selector: 'hn-paginator',
    templateUrl: './paginator.component.html',
    styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit, OnChanges {
    @Input() pagingParam = 'page';
    @Input() currentPage: number;

    prevPageQuery: object;
    nextPageQuery: object;

    constructor() {}

    ngOnInit() {}

    ngOnChanges(changes: SimpleChanges) {
        if (changes.currentPage) {
            const { currentValue } = changes.currentPage;

            this.prevPageQuery = { [this.pagingParam]: currentValue - 1 };
            this.nextPageQuery = { [this.pagingParam]: currentValue + 1 };
        }
    }
}
