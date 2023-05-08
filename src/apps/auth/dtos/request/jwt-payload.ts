export interface JwtPayload {
  accountId: string;
  email: string;
  iat?: Date;
}
