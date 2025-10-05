import { signupSchema, type signupRequestData } from '@/schemas/authSchema';
import { Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation } from "@tanstack/react-query"
import { signupRequest } from '@modules/auth/api/signup';
import { toast } from 'sonner';
// import { isAxiosError } from 'axios';

export default function SignupForm1() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate()
  const {register,handleSubmit,reset, formState:{errors,isSubmitting}} = useForm<signupRequestData>({
    resolver:zodResolver(signupSchema),
    defaultValues:{
      username:"",
      email:"",
      password:""
    }
  });

  const { mutate } = useMutation({
    mutationFn: (data:signupRequestData) => signupRequest(data),
    onSuccess: () => {
      console.log("Success callback executed");
      toast.success("Signedup successfully!", {
        description: "Thanks for registering on our platform!",
      });
      reset();
      navigate("/onboarding");
    },
    onError: (error) => {
      toast.error("Signup failed", {
        description: error.message,
      });
    },
  });

  const onSubmit:SubmitHandler<signupRequestData> = (data) => {
    // console.log(data);
    mutate(data)
  }
  return (
    <main className="bg-background flex min-h-screen flex-col items-center justify-center sm:px-4">
      <div className="w-full border space-y-4 sm:max-w-md">
        <div className="text-center">
          <div className="mt-5 space-y-2">
            <h3 className="text-2xl font-bold sm:text-3xl">
              Create an Account
            </h3>
            <p className="">
              Already have an account?{' '}
              <Link
                to="/login"
                className="font-medium text-rose-600 hover:text-rose-500"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
        <div className="space-y-6 p-4 py-6 shadow sm:rounded-lg sm:p-6">
          <div className="grid  gap-x-3">
            <button className="hover:bg-secondary active:bg-secondary/40 flex items-center justify-center rounded-lg border py-2.5 duration-150">
              <svg
                className="h-5 w-5"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_17_40)">
                  <path
                    d="M47.532 24.5528C47.532 22.9214 47.3997 21.2811 47.1175 19.6761H24.48V28.9181H37.4434C36.9055 31.8988 35.177 34.5356 32.6461 36.2111V42.2078H40.3801C44.9217 38.0278 47.532 31.8547 47.532 24.5528Z"
                    fill="#4285F4"
                  />
                  <path
                    d="M24.48 48.0016C30.9529 48.0016 36.4116 45.8764 40.3888 42.2078L32.6549 36.2111C30.5031 37.675 27.7252 38.5039 24.4888 38.5039C18.2275 38.5039 12.9187 34.2798 11.0139 28.6006H3.03296V34.7825C7.10718 42.8868 15.4056 48.0016 24.48 48.0016Z"
                    fill="#34A853"
                  />
                  <path
                    d="M11.0051 28.6006C9.99973 25.6199 9.99973 22.3922 11.0051 19.4115V13.2296H3.03298C-0.371021 20.0112 -0.371021 28.0009 3.03298 34.7825L11.0051 28.6006Z"
                    fill="#FBBC04"
                  />
                  <path
                    d="M24.48 9.49932C27.9016 9.44641 31.2086 10.7339 33.6866 13.0973L40.5387 6.24523C36.2 2.17101 30.4414 -0.068932 24.48 0.00161733C15.4055 0.00161733 7.10718 5.11644 3.03296 13.2296L11.005 19.4115C12.901 13.7235 18.2187 9.49932 24.48 9.49932Z"
                    fill="#EA4335"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_17_40">
                    <rect width="48" height="48" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </button>
          </div>
          <div className="relative">
            <span className="bg-secondary block h-px w-full"></span>
            <p className="absolute inset-x-0 -top-2 mx-auto inline-block w-fit px-2 text-sm">
              Or continue with
            </p>
          </div>
          
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div>
              <label className="font-medium">Username</label>
              <input
                {...register("username")}
                className="mt-2 w-full rounded-lg border bg-transparent px-3 py-2 shadow-sm outline-none focus:border-rose-600"
              />
              {errors.username && <p className='py-1 text-red-600'>{errors.username.message}</p>}
            </div>
            <div>
              <label className="font-medium">Email</label>
              <input
                {...register("email")}
                className="mt-2 w-full rounded-lg border bg-transparent px-3 py-2 shadow-sm outline-none focus:border-rose-600"
              />
              {errors.email && <p className='py-1 text-red-600'>{errors.email.message}</p>}
            </div>
            <div className="relative">
              <label className="font-medium">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  {...register("password")}
                  className="mt-2 w-full rounded-lg border bg-transparent px-3 py-2 shadow-sm outline-none focus:border-rose-600"
                />
                {errors.password && <p className='py-1 text-red-600'>{errors.password.message}</p>}
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 mt-2 mr-3 flex items-center"
                >
                  {showPassword ? (
                    <EyeOff size={20} className="text-secondary" />
                  ) : (
                    <Eye size={20} className="text-secondary" />
                  )}
                </button>
              </div>
            </div>
            {errors.root && <p className='py-1 font-semibold text-red-950'>{errors.root.message}</p>}
            <button type='submit' disabled={isSubmitting} className="w-full rounded-lg bg-rose-600 px-4 py-2 font-medium text-white duration-150 hover:bg-rose-500 active:bg-rose-600">
              Register
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}