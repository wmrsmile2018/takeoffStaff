import axios from 'axios';

const instance = axios.create({
  timeout: 3000,
  withCredentials: false,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/x-www-form-urlencoded',
    // 'Authorization': `Bearer ${document.cookie}`
  },
});
