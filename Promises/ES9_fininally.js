const urls = [
  "http://swapi.dev/api/people/1",
  "http://swapi.dev/api/people/2",
  "http://swapi.dev/api/people/3",
  "http://swapi.dev/api/people/4",
];

Promise.all(
  urls.map((url) => {
    return fetch(url).then((result) => result.json());
  })
)
  .then((results) => {
    console.log(results[0]);
    console.log(results[1]);
    console.log(results[2]);
    console.log(results[3]);
  })
  .catch(() => console.log("Something went wrong"))
  .finally(() => console.log("extra"));
//When you need to write a code at the end of your code

//-------------------for await of

//Before
const urls2 = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/albums",
];

const getData = async () => {
  try {
    const [users, post, albums] = await Promise.all(
      urls2.map((url) => {
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

//After
const getData2 = async function () {
  const arrayOfPromises = urls2.map((url) => fetch(url));
  for await (let request of arrayOfPromises) {
    const data = await request.json();
    console.log(data);
  }
};

getData2();
