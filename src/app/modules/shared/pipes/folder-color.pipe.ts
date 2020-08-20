import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'folderColor'
})
export class FolderColorPipe implements PipeTransform {

  transform(value: string): { icon: string, iconClass: string } {

    switch (value) {

      case 'Notes':
        return { icon: 'ti-notepad', iconClass: 'bg-primary'};

      case 'Files':
        return { icon: 'ti-files', iconClass: 'bg-danger'};

      case 'Excels':
        return { icon: 'ti-write', iconClass: 'bg-success'};

      case 'Videos':
        return { icon: 'ti-video-camera', iconClass: 'bg-secondary'};

      case 'Images':
        return { icon: 'ti-image', iconClass: 'bg-dark-bright'};

      case 'Presentations':
        return { icon: 'ti-layout-slider', iconClass: 'bg-warning'};

      default:
        return { icon: 'ti-files', iconClass: 'bg-danger'};
    }
  }

}
