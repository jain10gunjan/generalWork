// src/services/userService.js
import axios from 'axios';

const API_URL = 'http://localhost:4001/api/users/getAllUsers'; // Adjust to your API base URL

export const fetchAllUsers = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    throw error;
  }
};
