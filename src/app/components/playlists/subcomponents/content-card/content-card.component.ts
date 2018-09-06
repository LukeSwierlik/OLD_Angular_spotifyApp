import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'content-card',
    templateUrl: './content-card.component.html',
    styleUrls: ['./content-card.component.css']
})


export class ContentCardComponent implements OnInit {

    @Input()
    title = '';

    @Input('content')
    text = '';

    constructor() { }

    ngOnInit() {
    }

}
