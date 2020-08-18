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
      icon: 'ti-video-clapper',
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
