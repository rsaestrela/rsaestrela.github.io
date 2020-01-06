import axios from 'axios';

export async function getRawFile(file) {
  const { data } = await axios.get(`${file}`, {
    headers: {
      Accept: 'application/json',
    },
  });
  return data;
}
