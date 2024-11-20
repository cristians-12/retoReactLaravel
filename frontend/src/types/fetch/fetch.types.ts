export interface OptionsType {
  body?: string;
  method?: string;
  headers?: Headers;
  mode?: RequestMode;
  credentials?: RequestCredentials;
}
interface Headers {
  [key: string]: string;
}

export interface ResponseInterface{
  message:string;
  success:boolean;
}
