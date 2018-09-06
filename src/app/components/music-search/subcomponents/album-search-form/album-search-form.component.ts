import { Component, OnInit } from '@angular/core';
import { MusicSearchService } from '../../service/music-search.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
    selector: 'album-search-form',
    templateUrl: './album-search-form.component.html',
    styleUrls: ['./album-search-form.component.css']
})


export class AlbumSearchFormComponent implements OnInit {

    searchForm: FormGroup;

    constructor(private musicSearch: MusicSearchService) {
        this.searchForm = new FormGroup({
            'query': new FormControl('Batman')
        });

        this.searchForm.get('query').valueChanges
            .filter(query => query.length >= 3)
            .distinctUntilChanged()
            .debounceTime(800)
            .subscribe(query => {
                this.musicSearch.search(query);
            });
    }

    ngOnInit() {
    }

    search(query){
        this.musicSearch.search(query);
    }
}
