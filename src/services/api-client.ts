import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api/',
  params: {
    key: '73b10c42fcb04f91ac5e2d7bfd9e6251',
  },
});
