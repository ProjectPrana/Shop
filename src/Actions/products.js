import axiosInstance from "./axiosInstance";

export const fetchAllProducts = (cb) => {  
  axiosInstance()({
    method: "get",
    url: "goods",
  }).then((res) => {
        cb(res.data);
      });
};


export const addLike = (cb) => {
  axiosInstance()({
    method: "get",
    url: "like",
  }).then((res) => {
    cb(res.data);
  });
};

