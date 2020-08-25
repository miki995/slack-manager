export interface IUsersResponse {
  ok: boolean;
  members: IUser[];
  bots?: IUser[];
  response_metadata: object;
}

export interface IUser {
  id?: string;
  team_id?: string;
  name?: string;
  deleted?: boolean;
  color?: string;
  real_name?: string;
  tz?: string;
  tz_label?: string;
  tz_offset?: string;
  profile?: IUserProfile;
  is_admin?: boolean;
  is_owner?: boolean;
  is_primary_owner?: boolean;
  is_restricted?: boolean;
  is_ultra_restricted?: boolean;
  is_bot?: boolean;
  updated?: number;
  is_app_user?: boolean;
  has_2fa?: boolean;
}

export interface IUserProfile {
  avatar_hash: string;
  status_text: string;
  status_emoji: string;
  real_name: string;
  display_name: string;
  real_name_normalized: string;
  display_name_normalized: string;
  email: string;
  image_24: string;
  image_32: string;
  image_48: string;
  image_72: string;
  image_192: string;
  image_512: string;
  team: string;
  title?: string;
  image_original?: string;
  skype?: string;
  phone?: string;
  is_admin?: boolean;
  is_owner?: boolean;
}
