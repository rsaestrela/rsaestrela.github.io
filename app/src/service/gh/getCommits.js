import axios from 'axios';

export async function getCommits(repo) {
  const { data } = await axios.get(`https://api.github.com/repos/rsaestrela/${repo}/commits`, {
    headers: {
      Accept: 'application/json',
    },
  });
  return data;
}
