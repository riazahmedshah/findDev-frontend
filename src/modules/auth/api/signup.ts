import axios from "@/configs/axios";

export const signupRequest = async (data:unknown) => {
  const response = await axios.post("/auth/signup", data);
  return response.data;
}