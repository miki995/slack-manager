import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'sc-dashboard-files-search',
  templateUrl: './files-search.component.html',
  styleUrls: [ './files-search.component.css' ]
})
export class FilesSearchComponent {

  @Input() searchTerm: string;

  @Output() searchTermChange = new EventEmitter<string>();
}
