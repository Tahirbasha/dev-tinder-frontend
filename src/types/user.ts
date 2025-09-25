export interface User {
  _id: string;
  firstName: string;
  lastName: string;
  emailId: string;
  photoUrl: string;
  password: string;
  city: string;
  about: string;
  gender: string;
  fromUserId: User;
}
