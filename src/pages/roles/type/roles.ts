import { ParamsType } from "@ant-design/pro-components";
import { SortOrder } from "antd/lib/table/interface";
import { z } from "zod";

export const RoleSchema = z.object({
  id: z.number(),
  name: z.string(),
  created_by: z.number().int(),
  updated_by: z.number().int(),
  created_at: z.string(),
  updated_at: z.string(),
});

export type IRoles = z.infer<typeof RoleSchema>;

export interface IAPIResponseGetRoles {
  results: IRoles[];
  page: string;
  limit: number;
  totalPages: number;
  totalResults: number;
}

export interface IAntDProTableRequest {
  params: ParamsType & {
    pageSize?: number | undefined;
    current?: number | undefined;
    keyword?: string | undefined;
  };
  sort: Record<string, SortOrder>;
  filter: Record<string, (string | number)[] | null>;
}
