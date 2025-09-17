//const POST_API = "https://jsonplaceholder.typicode.com/posts";

//async function fetchPosts() {
//  try {
//    const response = await fetch(POST_API);
//  const data = await response.json();

//console.log("data", data);
//}
//catch (e) {
//  console.log("Error", e);
//}
//}
//fetchPosts()

const USERS_API = "https://jsonplaceholder.typicode.com/users";
async function fetchUsersApi() {
    try {
        const response = await fetch(USERS_API);
        const dataUsers = await response.json();
        console.log("dataUsers", dataUsers);

        const userList = document.querySelector(".userList");
        dataUsers.forEach(user => {
            const li = document.createElement("li");
            li.textContent = user.name;
            userList.appendChild(li);

        });
    }
    catch (e) {
        console.log("Error:", e);
    }
}
fetchUsersApi()


const API = "https://jsonplaceholder.typicode.com";

async function fetchAPI(url) {
    try {
        const response = await fetch(`${API}/${url}`);
        const data = await response.json();

        return data;
        //console.log("dataTodos", dataTodos);
    }
    catch (e) {
        console.log("Error:", e);
    }
}



async function renderTodos() {
    const todos = await fetchAPI("todos");
    const completed = todos.filter(todo => todo.completed);
    const notCompleted = todos.filter(todo => !todo.completed);

    console.log("total", todos.length);
    console.log("completed", completed.length);
    console.log("notCompleted", notCompleted.length);
}
renderTodos();

async function renderAlbums() {
    const albums = await fetchAPI("albums");
    console.log("albums", albums);

    const albumList = albums.filter(album => album.userId===userId);
    albumList.forEach(album => {
        console.log("album title", album.title);
    });

  return albumList;

}
renderAlbums(1)
