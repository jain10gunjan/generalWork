// src/services/userService.js
import axios from "axio";

<<<<<<< HEAD
const API_URL = "https://general-work.vercel.app/api/users/getAllUsers"; // Adjust to your API base URL
=======
const API_URL = 'https://general-work.vercel.app/api/users/getAllUsers'; // Adjust to your API base URL
>>>>>>> 85835430fa647925356e3d856801e2d8d1031149

export const fetchAllUsers = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    throw error;
  }
};
