import { ROLE } from './ROLE';

export default interface User {
  id?: string | any;
  name: string;
  surname: string;
  email: string;
  password: string;
  authenticated: boolean;
  role: ROLE;
  age: number;
  community: string;
  seminarDate: Date;
  startedOn: { number: number; type: string };
  currentCourse: string;
  createdAt: Date;
  updatedAt: Date;
}
