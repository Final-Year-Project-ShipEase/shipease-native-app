import CreateAxiosInstance from '../utils/axiosInstance';

export function useTenantService() {
  const axiosInstance = CreateAxiosInstance();

  const getAllTenants = async () => {
    try {
      const response = await axiosInstance.get('/tenants');
      return response.data;
    } catch (error) {
      throw new Error('Error fetching tenants: ' + error.message);
    }
  };

  const getTenantById = async (id) => {
    try {
      const response = await axiosInstance.get(`/tenant/${id}`);
      return response.data;
    } catch (error) {
      throw new Error('Error fetching tenant by ID: ' + error.message);
    }
  };

  const createTenant = async (data) => {
    try {
      const response = await axiosInstance.post('/tenant', data);
      return response.data;
    } catch (error) {
      throw new Error('Error creating tenant: ' + error.message);
    }
  };

  const updateTenant = async (id, data) => {
    try {
      const response = await axiosInstance.put(`/tenant/${id}`, data);
      return response.data;
    } catch (error) {
      throw new Error('Error updating tenant: ' + error.message);
    }
  };

  const deleteTenantById = async (id) => {
    try {
      const response = await axiosInstance.delete(`/tenant/${id}`);
      return response.data;
    } catch (error) {
      throw new Error('Error deleting tenant by ID: ' + error.message);
    }
  };
  
  return {
    getAllTenants,
    getTenantById,
    createTenant,
    updateTenant,
    deleteTenantById,
  };
}
