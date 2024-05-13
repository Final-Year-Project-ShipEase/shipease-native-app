import CreateAxiosInstance from '../utils/axiosInstance';

export function useUserService() {
  const axiosInstance = CreateAxiosInstance();

  const getAllUsers = async () => {
    const response = await axiosInstance.get('/users');
    return response.data;
  };

  const getUserById = async (id) => {
    const response = await axiosInstance.get(`/user/${id}`);
    return response.data;
  };

  const updateUser = async (id, data) => {
    const response = await axiosInstance.put(`/user/${id}`, data);
    return response.data;
  };

  const deleteUserById = async (id) => {
    const response = await axiosInstance.delete(`/user/${id}`);
    return response.data;
  };

  const createUser = async (data) => { // Update createUser to accept otp parameter
    const response = await axiosInstance.post('/user', data);
    return response.data;
  };

  const login = async (data) => {
    const response = await axiosInstance.post('/user/login', data);
    return response.data;
  };

  return {
    getAllUsers,
    getUserById,
    updateUser,
    deleteUserById,
    createUser,
    login,
  };
}
