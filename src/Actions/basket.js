import axiosInstance from "./axiosInstance";

export const addToBasket = (data, cb) => {
  axiosInstance()({
    method: "post",
    url: "Basket",
    data,
  }).then(() => {
    cb();
  });
};
