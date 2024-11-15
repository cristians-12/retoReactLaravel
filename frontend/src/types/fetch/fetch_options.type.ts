import { User } from "../user/user.type";

interface Headers {
  [key: string]: string;
}

export interface FetchOptions {
  method: string;
  headers?: Headers;
  body?: User | string;
}
