import {Component, OnInit, Input} from '@angular/core';

@Component({
    selector: 'app-content-card',
    templateUrl: './content-card.component.html'
})
export class ContentCardComponent implements OnInit {

    @Input()
    title = '';

    @Input()
    content = '';

    constructor() {
    }

    ngOnInit() {
    }

}
