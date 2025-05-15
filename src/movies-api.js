import axios from "axios";

const url =
  "https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1";
const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMzlkYzYwOTVkNjgzMDExZWRhMDdlNWRhMDA2YWE4MCIsIm5iZiI6MTc0NzExODQ0Mi40NzQsInN1YiI6IjY4MjJlOTZhNzNiMzVhMDcxMDdlODE2NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uV8mbGkCYQRGm6_nLyMYoQ8DmN36gNJNk_8VReaA58A",
  },
};

axios
  .get(url, options)
  .then((response) => console.log(response.data))
  .catch((error) => console.error(error));

// // export const fetchGallery = async (typeImg, currentPage) => {
// //   const response = await axios.get("/search/photos", {
// //     params: {
// //       query: typeImg,
// //       page: currentPage,
// //       per_page: 12,
// //     },
// //     headers: {
// //       Authorization: `Client-ID ${ACCESS_KEY}`,
// //     },
// //   });
// //   return {
// //     images: response.data.results,
// //     totalPages: response.data.total_pages,
// //   };
// // };

// axios.defaults.baseURL = "https://dummyjson.com";

// export const fetchUsers = async () => {
//   const res = await axios.get("/users");
//   return res.data.users;
// };

// export const fetchUserById = async (userId) => {
//   const res = await axios.get(`/users/${userId}`);
//   return res.data;
// };

// export const fetchUserPosts = async (userId) => {
//   const res = await axios.get(`/users/${userId}/posts`);
//   return res.data.posts;
