import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit {
  public showSearchBar: boolean;
  public queryText: string;

  @Output('onSearch') onSearch: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
    this.showSearchBar = false;
    this.queryText = '';
  }

  emit(queryText: string) {
    this.onSearch.emit(queryText);
  }

}
