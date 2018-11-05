import {Component} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {MusicSearchService} from '../../../../core/services/music-search/music-search.service';
import {debounceTime, distinctUntilChanged, filter} from 'rxjs/operators';

@Component({
    selector: 'app-album-search-form',
    templateUrl: './album-search-form.component.html',
    styleUrls: ['./album-search-form.component.css']
})
export class AlbumSearchFormComponent {

    protected searchForm: FormGroup;

    constructor(private musicSearch: MusicSearchService) {
        this.searchForm = new FormGroup({
            'query': new FormControl('Batman')
        });

        this.searchForm
            .get('query')
            .valueChanges
            .pipe(
                filter(query => query.length >= 3),
                distinctUntilChanged(),
                debounceTime(400))
            .subscribe(query => {
                this.musicSearch.search(query);
            });
    }

    protected search(query: String): void {
        this.musicSearch.search(query);
    }
}
