import { Community } from 'api/types/Community';
import { ROLE } from './Roles';

export default interface User {
  id?: string | any;
  name: string;
  surname: string;
  email: string;
  password: string;
  authenticated: boolean;
  role: ROLE;
  age: number;
  community: Community;
  seminarDate: Date;
  startedOn: { number: number; type: string };
  currentCourse: string;
  createdAt: Date;
  updatedAt: Date;
}
