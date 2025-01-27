import axios, { AxiosResponse } from "axios";
import {
  IProduct,
  IAntDProTableRequest,
  IAPIResponseLeasingRequest,
} from "../type/LeasingRequestType";

export const updateProduct = async (data: IProduct) => {
  // console.log(data);
  axios
    .put("https://dummyjson.com/products/" + data.id, {
      title: data.title,
      price: data.price,
      category: data.category,
      brand: data.brand,
    })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getLeasingRequest = async ({
  sort,
  filter,
  params,
}: IAntDProTableRequest) => {
  const response: AxiosResponse<IAPIResponseLeasingRequest[]> = await axios.get(
    "https://api-generator.retool.com/8sTJnp/data",
    {
      params: { sort: sort, filter: filter, ...params },
    }
  );

  return response.data;
};

export const getProductDetails = async (id: string) => {
  const data = axios.get("https://dummyjson.com/products/" + id);
  return data;
};
