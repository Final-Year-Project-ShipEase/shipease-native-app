import CreateAxiosInstance from '../utils/axiosInstance';

export function useVehicleService() {
  const axiosInstance = CreateAxiosInstance();

  const createVehicle = async (data) => {
    const response = await axiosInstance.post('/vehicle', data);
    return response.data;
  };

  const getAllVehicles = async () => {
    const response = await axiosInstance.get('/vehicles');
    return response.data;
  };

  const getVehicleById = async (id) => {
    const response = await axiosInstance.get(`/vehicle/${id}`);
    return response.data;
  };

  const updateVehicle = async (id, data) => {
    const response = await axiosInstance.put(`/vehicle/${id}`, data);
    return response.data;
  };

  const deleteVehicleById = async (id) => {
    const response = await axiosInstance.delete(`/vehicle/${id}`);
    return response.data;
  };

  const indexVehicles = async (page) => {
    const response = await axiosInstance.get(`/vehicles/index?page=${page}`);
    return response.data;
  };

  return {
    createVehicle,
    getAllVehicles,
    getVehicleById,
    updateVehicle,
    deleteVehicleById,
    indexVehicles,
  };
}
