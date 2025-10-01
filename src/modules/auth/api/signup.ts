import axios from "@/configs/axios";

export const signup = async (data:unknown) => {
  const response = await axios.post("/auth/signup", data);
  return response.data;
}