
export interface AuthPayload {
  userId: string;
  objectId: string;
  userName: string;
  role: string;
  iat: number;
  exp: number;
  projects: number[];
}