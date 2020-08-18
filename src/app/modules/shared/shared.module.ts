import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpService } from '../../services/http.service';
import { AuthService } from '../../services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { FormatBytesPipe } from './pipes/format-bytes.pipe';
import { TimeAgoPipePipe } from './pipes/time-ago-pipe.pipe';
import { FileTypePipe } from './pipes/file-type.pipe';
import { ArraySearchPipe } from './pipes/array-search.pipe';

@NgModule({
  declarations: [
    FormatBytesPipe,
    TimeAgoPipePipe,
    FileTypePipe,
    ArraySearchPipe
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    FormatBytesPipe,
    TimeAgoPipePipe,
    FileTypePipe,
    ArraySearchPipe
  ],
  providers: [
    HttpService,
    AuthService
  ]
})
export class SharedModule {
}
