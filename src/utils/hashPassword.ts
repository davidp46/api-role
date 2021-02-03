import { get } from 'config';
import bcrypt from 'bcrypt';

export default async function hashPassword(
  passwordText: string
): Promise<string> {
  const salt = await bcrypt.genSalt(get('crypt.salt'));
  const hash = await bcrypt.hash(passwordText, salt);
  return hash;
}
