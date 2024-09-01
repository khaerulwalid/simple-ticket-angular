export interface UserCredentials {
    emailId: string;
    password: string;
  }

  export interface LoginResponse {
    id: string,
    name: string,
    email: string,
    password: string,
    role: string
  }