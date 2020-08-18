export enum EFilesFilter {
  files = 'files',
  remoteFiles = 'remote-files'
}

export interface IFilesResponse {
  ok?: string;
  paging?: IPaging;
  files?: IFile[];
}

export interface IPaging {
  count: number;
  page: number;
  pages: number;
  total: number;
}

export interface IFile {
  channels: any[];
  comments_count: number;
  created: string;
  display_as_bot: boolean;
  editable: boolean;
  external_type: string;
  filetype: string;
  groups: any[];
  id: string;
  ims: string[];
  is_external: boolean;
  is_public: boolean;
  mimetype: string;
  mode: string;
  name: string;
  original_h: number;
  original_w: number;
  permalink: string;
  permalink_public: string;
  pretty_type: string;
  public_url_shared: boolean;
  size: number;
  thumb_64: string;
  thumb_80: string;
  thumb_160: string;
  thumb_360: string;
  thumb_360_h: number;
  thumb_360_w: number;
  thumb_tiny: string;
  timestamp: number;
  title: string;
  url_private: string;
  url_private_download: string;
  user: string;
  username: string;
}

export enum EFilesCount {
  count10 = '10',
  count25 = '25',
  count50 = '50',
  count100 = '100'
}

export interface IFilesQueryParams {
  count?: EFilesCount;
  page?: number;
}
