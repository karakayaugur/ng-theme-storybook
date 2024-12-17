export interface IReqLogin {
  username: string;
  password: string;
}

export interface IResLogin {
  access_token: string;
  expires_in: number;
  mfa_address: string;
  mfa_channel: 'SMS' | 'EMAIL';
  mfa_id: string;
  token_type: 'mfa' | 'bearer' | 'refresh';
}
