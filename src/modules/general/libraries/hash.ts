import { baseXEncoder } from "./base-x";

function hash(obj: any) {
  const base58 = baseXEncoder(
    "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
  );
  return base58.encode(JSON.stringify(obj));
}
export default hash;
