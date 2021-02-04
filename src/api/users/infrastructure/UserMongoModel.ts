import { Document, model, Schema } from 'mongoose';
import User from '../domain/User';
import { ROLE } from '../domain/Roles';
import { POSITIONS } from '../domain/Positions';
import hashPassword from 'utils/hashPassword';

interface IUserModel extends User, Document {}

const userSchema = new Schema({
  name: { type: String },
  surname: { type: String },
  email: { type: String, unique: true },
  password: String,
  authenticated: { type: Boolean, default: false },
  role: { type: String, default: ROLE.CONSUMER },
  age: { type: Number },
  community: { type: Object },
  seminarDate: { type: Date },
  startedOn: { type: Number },
  currentCourse: { type: String },
  position: { type: String, default: POSITIONS.GUEST },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

userSchema.pre<IUserModel>('save', async function (next) {
  if (this.password && this.isModified('password')) {
    this.password = await hashPassword(this.password);
  }
  next();
});

export const UserModel = model<IUserModel>('User', userSchema);
