// @flow
import axios from 'axios';

export default async function (): Object {
  try {
    return await axios.get('https://picsum.photos/200/200/?random', { responseType: 'blob' });
  } catch (err) {
    return err;
  }
}
