import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, Output, Renderer2, ViewChild } from '@angular/core';
import { EFilesFilter } from '../../../../models/file-filter';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-dashboard-folders',
  templateUrl: './folders.component.html',
  styleUrls: [ './folders.component.css' ]
})
export class FoldersComponent {

  @ViewChild('files') filesElementRef: ElementRef;
  @ViewChild('remoteFiles') remoteFilesElementRef: ElementRef;

  constructor(private readonly renderer2: Renderer2) {
  }

  filesFilterEnum = EFilesFilter;

  @Input() filesFilter: EFilesFilter;

  @Output() filesFilterChange = new EventEmitter<EFilesFilter>();

  addClass(files?: boolean): void {
    const element = files ? this.filesElementRef : this.remoteFilesElementRef;
    this.renderer2.addClass(element.nativeElement, 'jstree-hovered');
  }

  removeClass(files?: boolean): void {
    const element = files ? this.filesElementRef : this.remoteFilesElementRef;
    this.renderer2.removeClass(element.nativeElement, 'jstree-hovered');
  }
}
