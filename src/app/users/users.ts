export class Users {
  userId: number;
  userName: string;
  email: string;
  userPhone: string;
  password: string;

  constructor(
    userId: number,
    userName: string,
    email: string,
    userPhone: string,
    password: string
  ) {
    this.userId = userId;
    this.userName = userName;
    this.email = email;
    this.userPhone = userPhone;
    this.password = password;
  }

  getUserId(): number {
    return this.userId;
  }

  setUserId(userId: number) {
    this.userId = userId;
  }
  getUserName(): string {
    return this.userName;
  }

  setUserName(userName: string) {
    this.userName = userName;
  }
  getUserEmail(): string {
    return this.email;
  }

  setEmail(email: string) {
    this.email = email;
  }
  getUserPhone(): string {
    return this.userPhone;
  }

  setUserPhone(userPhone: string) {
    this.userPhone = userPhone;
  }
  getPassword(): string {
    return this.password;
  }

  setPassword(password: string) {
    this.password = password;
  }
}
