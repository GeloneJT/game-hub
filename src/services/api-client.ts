import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api/',
  params: {
    key: '32a03054bc6b4a1e8bc8e6b8b5e0069d',
  },
});
