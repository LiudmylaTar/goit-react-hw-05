import axios from "axios";



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
