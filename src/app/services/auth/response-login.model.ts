export interface ResponseLogin {
  res: {
    token: string;
    permissions: Permission[];
  };
}

export interface Permission {
  action: string;
  ctrl: string;
  group: string;
  permission: string;
}
