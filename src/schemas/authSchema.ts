import { z } from "zod"

const email_schema = z.email('please enter a valid email')

const password_schema = z.string().min(6,'password too short').max(10, 'password too long')

export const signupSchema = z.object({
  username:z.string().min(2, "minimum 2 characters required").max(20,"maximum 20 characters allowed"),
  email:email_schema,
  password:password_schema
});

export type signupRequestData = z.infer<typeof signupSchema>

export const signinSchema = z.object({
  email:email_schema,
  password:password_schema
})