import * as JSZip from 'jszip';
import * as FileSaver from 'file-saver';
import { FilesService } from '../services/files.service';

export async function createZip(files: string[], zipName: string, filesService: FilesService): Promise<any> {
  const zip = new JSZip();
  const name = zipName + '.zip';

  for (const file of files) {
    const fileData: any = await getFile(file, filesService);
    const b: any = new Blob([ fileData ]);
    zip.file(file.substring(file.lastIndexOf('/') + 1), b);
  }

  zip.generateAsync({ type: 'blob' }).then((content) => {
    if (content) {
      FileSaver.saveAs(content, name);
    }
  });
}

export async function getFile(url: string, filesService: FilesService): Promise<any> {
  return await filesService.downloadFile(url).toPromise();
}
