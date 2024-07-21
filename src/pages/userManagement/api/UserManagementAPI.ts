import { string } from "zod";
import { apiRequest } from "../../../utils/API";
import {
  IAntDProTableRequest,
  IAPIResponseGetUsers,
  IUser,
} from "../type/UserManagement";

export const getUsers = async ({
  sort,
  filter,
  params,
}: IAntDProTableRequest) => {
  const response = await apiRequest<IAPIResponseGetUsers>("GET", "/v1/users", {
    params: { sort, filter, params },
  });

  return response.data;
};

export const createUser = async (data: IUser) => {
  return await apiRequest<IUser>("POST", "/v1/users", {
    name: data.name,
    email: data.email,
    phone: data.phone,
    role_id: data.role_id,
  });
};

export const getUser = async (id: string | undefined) => {
  const response = await apiRequest<IAPIResponseGetUsers>(
    "GET",
    `/v1/users/${id}`
  );
  return response.data;
};

export const editUser = async (data: IUser) => {
  return await apiRequest<IUser>("PATCH", `/v1/users/${data.id}`, {
    name: data.name,
    email: data.email,
    phone: data.phone,
    role_id: data.role_id,
  });
};
