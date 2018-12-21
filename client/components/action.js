import axios from 'axios';

export default async function () {
  try {
    console.log('object-2');
    // throw 'error';
    const res = await axios.get('https://picsum.photos/200/200/?random', { responseType: 'blob' });
    console.log('object-3', res);
    return res;
  } catch (err) {
    console.log('fetchData err', err);
    return err;
  }
}
