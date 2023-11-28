export interface Store{
  auth:AuthenticationStore,
}

export interface AuthenticationStore{
  isLogin:boolean;
  fullname:string;
}