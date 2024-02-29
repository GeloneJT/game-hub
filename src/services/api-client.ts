import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api/',
  params: {
    key: '2a48f477e70349bc9a67e038d801f9b3',
  },
});
