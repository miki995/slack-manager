export interface IConversationsResponse {
  ok: boolean;
  channels: IChannel[];
  response_metadata: object;
}

export interface IChannel {
  id?: string;
  name?: string;
  is_channel?: boolean;
  is_group?: boolean;
  is_im?: boolean;
  created?: number;
  is_archived?: boolean;
  is_general?: boolean;
  unlinked?: number;
  name_normalized?: string;
  is_shared?: boolean;
  parent_conversation?: boolean;
  creator?: string;
  is_ext_shared?: boolean;
  is_org_shared?: boolean;
  shared_team_ids?: string[];
  pending_shared?: any[];
  pending_connected_team_ids?: any[];
  is_pending_ext_shared?: boolean;
  is_member?: boolean;
  is_private?: boolean;
  is_mpim?: boolean;
  topic?: IChannelData;
  purpose?: IChannelData;
  previous_names?: any[];
  num_members?: number;
}

export interface IChannelData {
  value?: string;
  creator?: string;
  last_set?;
  number;
}
