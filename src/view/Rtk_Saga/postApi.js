import axios from "axios";

// export const getData = () => {
//   return axios.get("https://62480b9d4bd12c92f406c636.mockapi.io/api/products");
// };
export const getData = () => {
  return axios({
    method: "get",
    url: "https://62480b9d4bd12c92f406c636.mockapi.io/api/products",
  });
};

export const deleteData = (id) => {
  return axios.delete(
    `https://62480b9d4bd12c92f406c636.mockapi.io/api/products/${id}`
  );
};

export const postData = (payload) => {
  return axios.post(
    `https://62480b9d4bd12c92f406c636.mockapi.io/api/products`,
    { tilte: payload }
  );
};

export const updateData = (payload) => {
  console.log("payload:", payload);
  return axios.put(
    `https://62480b9d4bd12c92f406c636.mockapi.io/api/products/${14}`,
    { tilte: payload }
  );
};
