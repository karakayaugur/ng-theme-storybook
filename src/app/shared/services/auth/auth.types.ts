export interface Auth {
  token: string | null;
  user: User | null;
}

export interface User {
  id: string;
  email: string;
  name: string;
}
