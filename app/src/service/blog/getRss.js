import axios from 'axios';

export async function getRss() {
  const { data } = await axios.get("https://estrela.me/blog/feed.xml", {
    headers: {
      Accept: 'application/xml',
    },
  });
  return data;
}
