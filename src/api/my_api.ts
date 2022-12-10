import axios from "axios";

export const fetchPosts = () => {
  return axios.get("https://jsonplaceholder.typicode.com/posts");
};

export const fetchComments = () => {
  return axios.get("https://jsonplaceholder.typicode.com/comme");
};
