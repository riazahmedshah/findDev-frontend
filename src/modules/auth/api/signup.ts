import axios from "@/configs/axios";
import type { signupRequestData } from "@/schemas/authSchema";


export type signupRequestResponse = {
  data:{
    id: string;
    username: string;
    email: string;
    status: string;
  };
  token:string;
}

export const signupRequest = async (data:signupRequestData) => {
  const response = await axios.post<signupRequestResponse>("/auth/signup", data);
  return response.data;
}