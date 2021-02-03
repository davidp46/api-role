import { Document, model, now, Schema } from 'mongoose';
import User from '../Domain/User';
import { ROLE } from '../Domain/ROLE';
import hashPassword from 'utils/hashPassword';

interface IUserModel extends User, Document {}

const userSchema = new Schema({
  name: { type: String },
  surname: { type: String },
  email: { type: String, unique: true },
  password: String,
  authenticated: { type: Boolean, default: false },
  role: { type: String, default: ROLE.NORMAL },
  age: { type: Number },
  community: { type: String },
  seminarDate: { type: Date },
  startedOn: { type: { number: Number, type: String } },
  currentCourse: { type: String },
  createdAt: { type: Date, default: now() },
  updatedAt: { type: Date, default: now() },
});

userSchema.pre<IUserModel>('save', async function (next) {
  if (this.password && this.isModified('password')) {
    this.password = await hashPassword(this.password);
  }
  next();
});

export const UserModel = model<IUserModel>('User', userSchema);
