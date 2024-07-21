import { z } from "zod";

export const ForgotPasswordSchema = z.object({
  email: z.string().email("Invalid email"),
});

export type IForgotPassword = z.infer<typeof ForgotPasswordSchema>;
