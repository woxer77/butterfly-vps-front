import axios from 'axios';
import { API_URL } from './config';
import { store } from '../redux/store'; // Импортируем store
import { resetAll } from '../redux/slices/adminSlice'; // Импортируем экшн resetAll

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
      console.log('gg');
      store.dispatch(resetAll()); // Обнуляем состояние adminReducer
    }
  }
  throw error;
});

export default apiClient;
