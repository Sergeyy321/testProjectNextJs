import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const getTasks = (params = {}) => {
  return axios.get(`${API_URL}/tasks`, { params });
};

export const addTask = (task) => {
  return axios.post(`${API_URL}/tasks`, task);
};

export const deleteTask = (id) => {
  return axios.delete(`${API_URL}/tasks/${id}`);
};

export const updateTask = (id, data) => {
  return axios.patch(`${API_URL}/tasks/${id}`, data);
};
