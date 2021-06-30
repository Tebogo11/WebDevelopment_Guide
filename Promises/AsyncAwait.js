//Promises
// movePlayer(100, "left")
//   .then(() => movePlayer(100, "left"))
//   .then(() => movePlayer(400, "right"))
//   .then(() => movePlayer(200, "Down"));

//Async Await
// async function playerStart() {
//   const firstMove = await movePlayer(100, "left");
//   await movePlayer(400, "right");
//   await movePlayer(200, "Down");
// }
//we have access to await in asynce functions
//await -> pause this function/s until i have something for you

//Before
fetch("https://jsonplaceholder.typicode.com/users")
  .then((resp) => resp.json())
  .then((result) => console.log(result));

//with Aysnc
async function fetchUsers() {
  const resp = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const data = await resp.json();
  console.log(data);
}

fetchUsers();

const urls = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/albums",
];

const getData = async () => {
  try {
    const [users, post, albums] = await Promise.all(
      urls.map((url) => {
        return fetch(url).then((resp) => resp.json());
      })
    );
    console.log("users", users);
    console.log("post", post);
    console.log("clbums", albums);
  } catch {
    console.log("error");
  }
};

getData();
