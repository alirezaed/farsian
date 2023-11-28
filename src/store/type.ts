export interface Store{
  authentication:AuthenticationStore,
}

export interface AuthenticationStore{
  isLogin:boolean;
  fullname:string;
}