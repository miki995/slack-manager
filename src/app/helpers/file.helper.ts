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

export interface IFilePercentage {
  data: IFile[];
  size: number;
}

export interface IFilePercentages {
  all: IFilePercentage;
  excels: IFilePercentage;
  files: IFilePercentage;
  images: IFilePercentage;
  notes: IFilePercentage;
  presentations: IFilePercentage;
  videos: IFilePercentage;
}

export function detectFileTypePercentage(files: IFile[]): IFilePercentages {

  const notes = [ 'c', 'csharp', 'css', 'dart', 'haskell', 'fortran', 'go', 'groovy', 'latex', 'kotlin', 'java', 'markdown', 'odt', 'php', 'python', 'sass', 'smalltalk', 'shell', 'swift', 'tsv', 'vb', 'vbscript', 'xml', 'yaml', 'text', 'javascript', 'html', 'mhtml', 'doc', 'docx', 'powershell', 'applescript', 'dockerfile', 'dotx', 'email', 'eps', 'epub', 'erlang' ];
  const filess = [ 'zip', 'tar', 'pdf', 'gzip', 'apk', 'binary', 'bmp' ];
  const excels = [ 'csv', 'xltx', 'xlsm', 'xlsb', 'xlsx', 'xls', 'odd', 'gsheet', 'gdraw', 'gdoc' ];
  const videos = [ 'm4a', 'wmv', 'webm', 'wav', 'verilog', 'velocity', 'vcard', 'ogv', 'mp3', 'mp4', 'mpg', 'mov', 'mkv', 'flv' ];
  const images = [ 'ai', 'gif', 'tiff', 'odg', 'svg', 'sketch', 'psd', 'png', 'jpg', 'odi' ];
  const presentations = [ 'ppt', 'pptx', 'odp', 'gpres' ];

  const notesData: IFile[] = [];
  const filesData: IFile[] = [];
  const excelsData: IFile[] = [];
  const videosData: IFile[] = [];
  const imagesData: IFile[] = [];
  const presentationsData: IFile[] = [];

  files.forEach(file => {
    if (notes.includes(file.filetype)) {
      notesData.push(file);
    } else if (filess.includes(file.filetype)) {
      filesData.push(file);
    } else if (excels.includes(file.filetype)) {
      excelsData.push(file);
    } else if (videos.includes(file.filetype)) {
      videosData.push(file);
    } else if (images.includes(file.filetype)) {
      imagesData.push(file);
    } else if (presentations.includes(file.filetype)) {
      presentationsData.push(file);
    } else {
      filesData.push(file);
    }
  });

  const allSize = getSize(files);

  return {
    all: {
      data: files,
      size: allSize
    },
    notes: {
      data: notesData,
      size: (getSize(notesData) * 100) / allSize
    },
    files: {
      data: filesData,
      size: (getSize(filesData) * 100) / allSize
    },
    excels: {
      data: excelsData,
      size: (getSize(excelsData) * 100) / allSize
    },
    videos: {
      data: videosData,
      size: (getSize(videosData) * 100) / allSize
    },
    images: {
      data: imagesData,
      size: (getSize(imagesData) * 100) / allSize
    },
    presentations: {
      data: presentationsData,
      size: (getSize(presentationsData) * 100) / allSize
    },
  };
}

export function getSize(files: IFile[]): number {
  return files.reduce((count, file) => {
    return count + file.size;
  }, 0);
}

export enum EFileTypeValue {
  all = 'all',
  spaces = 'spaces',
  snippets = 'snippets',
  images = 'images',
  gdocs = 'gdocs',
  zips = 'zips',
  pdfs = 'pdfs',
}

export interface IFileTypeFilter {
  title: string;
  value: EFileTypeValue;
}

export const fileTypes: IFileTypeFilter[] = [
  {
    title: 'All files',
    value: EFileTypeValue.all
  },
  {
    title: 'Posts',
    value: EFileTypeValue.spaces
  },
  {
    title: 'Snippets',
    value: EFileTypeValue.snippets
  },
  {
    title: 'Images',
    value: EFileTypeValue.images
  },
  {
    title: 'Google docs',
    value: EFileTypeValue.gdocs
  },
  {
    title: 'Zip files',
    value: EFileTypeValue.zips
  },
  {
    title: 'PDF files',
    value: EFileTypeValue.pdfs
  }
];

export function sortFiles(files: IFile[], filesQueryParams: IFilesQueryParams): IFile[] {

  if (!files) {
    return [];
  }

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

  if (!files?.length) {
    return [];
  }

  const firstNum = asc ? 1 : -1;
  const secNum = asc ? -1 : 1;
  return files.slice().sort((a, b) => (a[column] < b[column]) ? firstNum : secNum);
}
