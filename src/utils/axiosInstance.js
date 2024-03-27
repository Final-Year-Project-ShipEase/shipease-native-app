import axios from 'axios';

const CreateAxiosInstance = () => {
  const instance = axios.create({
    baseURL: 'http://192.168.1.10:12345',
  });

  return instance;
};

export default CreateAxiosInstance;
