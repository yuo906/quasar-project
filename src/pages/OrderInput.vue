<template>
  <div>

  </div>
</template>

<script setup>

function delay(ms) {
  return new Promise(function(resolve) {
    setTimeout(resolve, ms)
  })
}

delay(3000).then(function() {
  console.log('hello!')
})
// import axios from "axios";
// const access_token = 'eG8Mi5rF3eAaycCgUGCLCbJ39KZePi580jHyJie52lNPDxVP1QjHUORQMaqA';

// axios.get('https://challenge.thef2e.com/api/thef2e2019/stage6/rooms', {
//   headers: {
//     "Content-Type": "application/json; charset=utf-8",
//     Accept: "application/json",
//     Authorization: `Bearer ${access_token}`,
//   },
// })
//   .then(res => console.log(res.data))
//   .catch(error => console.log(error))


// const hotelAPI = axios.create({
//   baseURL: "https://challenge.thef2e.com/api/thef2e2019/stage6",
//   header: {
//     "Content-Type": "application/json; charset=utf-8",
//     Accept: "application/json"
//   }
// })

// const res = await hotelAPI.get("/rooms")
// console.log(res);
// const res = await hotelAPI.delete("/rooms")


// axios.get('https://challenge.thef2e.com/api/thef2e2019/stage6/rooms')
// .then(function (response) {
//     console.log(response.data);
//     console.log(response.status);
//     console.log(response.headers);
//     console.log(response.config);
//   })
//   .catch(error => console.log(error))
//   .finally()

// axios.post('/user', {
//   firstName: 'Fred',
//   lastName: 'Flintstone'
// })
//   .then(res => console.log(res))
//   .catch(error => console.error(error))




// const baseUrl = 'https://jsonplaceholder.typicode.com';
// function fetchJSON(url) {
//   return fetch(url)
//     .then(response => response.json())
//     .catch(error => console.log(error))
// }

// function fetchPost(id) {
//   const apiURL = `${baseUrl}/post/${id}`;
//   return fetchJSON(apiURL);
// }

// function fetchUser(id) {
//   const apiURL = `${baseUrl}/users/${id}`;
//   return fetchJSON(apiURL);
// }

// function main() {
//   const postId = 1;
//   fetchPost(postId)
//     .then(post => {
//       const userId = post.userId;
//       return fetchUser(userId);
//     })
//     .then(user=>{
//       console.log(user.username);
//     })
// }

// main();




// async function getUser() {
//   // throw new Error('Oops');
//   try {
//     const response = await axios.get('https://challenge.thef2e.com/api/thef2e2019/stage6/rooms');
//     console.log(response);
//   } catch (error) {
//     console.error(error);
//   }
// };

// getUser();


</script>
