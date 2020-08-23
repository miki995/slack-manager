import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpService } from '../../services/http.service';
import { AuthService } from '../../services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { FormatBytesPipe } from './pipes/format-bytes.pipe';
import { TimeAgoPipePipe } from './pipes/time-ago-pipe.pipe';
import { FileTypePipe } from './pipes/file-type.pipe';
import { ArraySearchPipe } from './pipes/array-search.pipe';
import { FolderColorPipe } from './pipes/folder-color.pipe';
import { FilesService } from '../../services/files.service';
import { ConversationsService } from '../../services/conversations.service';
import { UsersService } from '../../services/users.service';
import { GetUserProfilePipe } from './pipes/get-user.pipe';

@NgModule({
  declarations: [
    FormatBytesPipe,
    TimeAgoPipePipe,
    FileTypePipe,
    ArraySearchPipe,
    FolderColorPipe,
    GetUserProfilePipe
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    FormatBytesPipe,
    TimeAgoPipePipe,
    FileTypePipe,
    ArraySearchPipe,
    FolderColorPipe,
    GetUserProfilePipe
  ],
  providers: [
    HttpService,
    AuthService,
    FilesService,
    ConversationsService,
    UsersService
  ]
})
export class SharedModule {
}
