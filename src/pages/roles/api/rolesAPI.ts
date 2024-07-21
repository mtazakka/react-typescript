import { apiRequest } from "../../../utils/API";
import { getToken } from "../../../utils/AuthService";
import { IAntDProTableRequest, IAPIResponseGetRoles } from "../type/roles";

export const getRolesTable = async ({
  sort,
  filter,
  params,
}: IAntDProTableRequest) => {
  const response = await apiRequest<IAPIResponseGetRoles>("GET", "/roles");

  return response.data;
};

export const getRoles = async () => {
  const response = await apiRequest<IAPIResponseGetRoles>("GET", "/roles");

  return response.data.results;
};
