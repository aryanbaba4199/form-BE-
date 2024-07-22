import { Schema, model, Document } from 'mongoose';

interface IUser extends Document {
  name: string;
  gender: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  password: string;
}

const UserSchema = new Schema({
  name: { type: String, required: true },
  gender: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  password: { type: String, required: true }
});

const User = model<IUser>('User', UserSchema);

export default User;
