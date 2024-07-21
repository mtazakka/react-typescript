import { z } from "zod";

export const QuotationSchema = z.object({
  id: z.number(),
  name: z.string(),
  contactNo: z.string().min(10),
  emailAddress: z.string(),
  companyName: z.string(),
  businessNature: z.string(),
  totalFleetSize: z.number(),
  leasingPeriod: z.string(),
  price: z.number().min(0, "Price must be more than $0"),
  paymentCycle: z.string(),
  remarks: z.string(),
  // title: z
  //   .string()
  //   .min(5, "Title must be more than 5 characters")
  //   .max(30, "Must be less than 30 characters"),
  // images: z.array(z.string()).optional(),
  // price: z.number().min(10, { message: "Price must be more than $10" }),
  // category: z.string(),
  // brand: z.string(),
  // dateRange: z.array(z.date()).refine((dates) => {
  //   return dates[0] <= dates[1]; // Custom validation for date range
  // }, "Invalid date range"),
});

export type IQuotation = z.infer<typeof QuotationSchema>;
