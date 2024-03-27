import axios from 'axios';

const CreateAxiosInstance = () => {
  const instance = axios.create({
    baseURL: 'http://10.54.7.246:12345',
  });

  return instance;  
};

export default CreateAxiosInstance;
