import axios from 'axios';
// import { persistor } from 'redux/store';
import { API_URL } from './config';

const apiClient = axios.create({
  baseURL: API_URL,
  responseType: 'json',
  withCredentials: true
});

apiClient.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
  return config;
});

apiClient.interceptors.response.use((config) => config, async (error) => {
  const originalRequest = error.config;
  if (error.response.status === 401 && error.config && !error.config._isRetry) {
    originalRequest._isRetry = true;
    try {
      const response = await axios.get(`${API_URL}/admin/refresh`, { withCredentials: true });
      localStorage.setItem('token', response.data.accessToken);
      return apiClient.request(originalRequest);
    } catch (e) {
      console.log('Unauthorized!', e);
      localStorage.removeItem('token');
      // await persistor.purge();
    }
  }
  throw error;
});

export default apiClient;
