import { EFilesSortByDate, EFilesSortBySize, IFile, IFilesQueryParams } from '../models/file-filter';

export interface IFileType {
  icon?: string;
  badgeClass?: string;
  imageClass?: string;
}

export function detectFileType(fileType: string): IFileType {

  const notes = [ 'c', 'csharp', 'css', 'dart', 'haskell', 'fortran', 'go', 'groovy', 'latex', 'kotlin', 'java', 'markdown', 'odt', 'php', 'python', 'sass', 'smalltalk', 'shell', 'swift', 'tsv', 'vb', 'vbscript', 'xml', 'yaml', 'text', 'javascript', 'html', 'mhtml', 'doc', 'docx', 'powershell', 'applescript', 'dockerfile', 'dotx', 'email', 'eps', 'epub', 'erlang' ];
  const files = [ 'zip', 'tar', 'pdf', 'gzip', 'apk', 'binary', 'bmp' ];
  const excels = [ 'csv', 'xltx', 'xlsm', 'xlsb', 'xlsx', 'xls', 'odd', 'gsheet', 'gdraw', 'gdoc' ];
  const videos = [ 'm4a', 'wmv', 'webm', 'wav', 'verilog', 'velocity', 'vcard', 'ogv', 'mp3', 'mp4', 'mpg', 'mov', 'mkv', 'flv' ];
  const images = [ 'ai', 'gif', 'tiff', 'odg', 'svg', 'sketch', 'psd', 'png', 'jpg', 'odi' ];
  const presentations = [ 'ppt', 'pptx', 'odp', 'gpres' ];

  if (notes.includes(fileType)) {
    return {
      icon: 'ti-notepad',
      badgeClass: 'bg-primary-bright text-primary',
      imageClass: 'bg-primary-bright'
    };
  } else if (files.includes(fileType)) {
    return {
      icon: 'ti-file',
      badgeClass: 'bg-danger-bright text-danger',
      imageClass: 'bg-danger'
    };
  } else if (excels.includes(fileType)) {
    return {
      icon: 'ti-write',
      badgeClass: 'bg-success-bright text-success',
      imageClass: 'bg-success'
    };
  } else if (videos.includes(fileType)) {
    return {
      icon: 'ti-control-play',
      badgeClass: 'bg-secondary-bright text-secondary',
      imageClass: 'bg-secondary'
    };
  } else if (images.includes(fileType)) {
    return {
      icon: 'ti-image',
      badgeClass: 'bg-dark-bright text-dark',
      imageClass: 'bg-dark-bright'
    };
  } else if (presentations.includes(fileType)) {
    return {
      icon: 'ti-layout-slider',
      badgeClass: 'bg-warning-bright text-warning',
      imageClass: 'bg-warning'
    };
  } else {
    return {
      icon: 'ti-file',
      badgeClass: 'bg-danger-bright text-danger',
      imageClass: 'bg-danger'
    };
  }
}

export interface IFileTypeFilter {
  title: string;
  value: string;
}

export const fileTypes: IFileTypeFilter[] = [
  {
    title: 'All files',
    value: 'all'
  },
  {
    title: 'Posts',
    value: 'spaces '
  },
  {
    title: 'Snippets',
    value: 'snippets'
  },
  {
    title: 'Images',
    value: 'images'
  },
  {
    title: 'Google docs',
    value: 'gdocs '
  },
  {
    title: 'Zip files',
    value: 'zips'
  },
  {
    title: 'PDF files',
    value: 'pdfs'
  }
];

export function sortFiles(files: IFile[], filesQueryParams: IFilesQueryParams): IFile[] {

  let sortedFiles: IFile[] = [];

  if (!!filesQueryParams.date) {
    const sortByDateNewest = filesQueryParams.date === EFilesSortByDate.newest;
    sortedFiles = sortBy(files, 'created', sortByDateNewest);
  } else if (!!filesQueryParams.size) {
    const sortBySizeLargest = filesQueryParams.size === EFilesSortBySize.largest;
    sortedFiles = sortBy(files, 'size', sortBySizeLargest);
  }

  return sortedFiles;
}

function sortBy(files: IFile[], column: string, asc: boolean): IFile[] {

  const firstNum = asc ? 1 : -1;
  const secNum = asc ? -1 : 1;
  return files.slice().sort((a, b) => (a[column] < b[column]) ? firstNum : secNum);
}
