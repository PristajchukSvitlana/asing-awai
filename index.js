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

async function getAlbums(userId) {
    const albums = await fetchAPI("albums");
    const albumList = albums.filter(album => album.userId === userId);

    return albumList;
}

function createAlbumByUser(data) {
    let ul = document.createElement("ul");

    data.forEach((item, index) => {
        if (index === 0) {
            let li = document.createElement("li");
            li.innerHTML = `<b>Альбомы пользователя #${item.userId}:</b>`;
            ul.append(li)
        }

        let li = document.createElement("li");
        li.textContent = `${index + 1} - ${item.title}`;

        ul.append(li)
    });

    document.body.append(ul);
}

async function renderAlbums() {
    const albums = await getAlbums(3)

    createAlbumByUser(albums);
}
renderAlbums()
//Comments
const COMMENTS_API = "https://jsonplaceholder.typicode.com/comments";
async function getComments(postId) {
    try {
        const response = await fetch(`${COMMENTS_API}`);
        const data = await response.json();
        const commentList = data.filter(comment => comment.postId === postId);

        return commentList;
    }
    catch (e) {
        console.log("Error:", e);
    }
}
function createCommentList(data) {
    let ul = document.createElement("ul");

    data.forEach((item, index) => {
        if (index === 0) {
            let li = document.createElement("li");
            li.innerHTML = `<b>Комментарии к посту #${item.postId}:</b>`;
            ul.append(li)
        }

        let li = document.createElement("li");
        li.textContent = `${index + 1} - ${item.name} (${item.email})`;

        ul.append(li)
    })
    document.body.append(ul)
};

async function renderComments() {
    const data = await getComments(2);
    createCommentList(data)
}
renderComments()
//POSTS

//RANDOM_USERS
const API_URL = "https://randomuser.me/api/?results=5";
async function fetchRandomUsers() {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        return data.results;
    }
    catch (e) {
        console.log("Error:", e);
    }
}

function createdListRamdomUsers(data) {
    data.forEach((user, index) => {
        let ul = document.createElement("ul");

        if (index === 0) {
            let li = document.createElement("li");
            li.innerHTML = `<b>Случайные пользователи:</b>`;
            ul.append(li)
        }

        let li = document.createElement("li");
        li.textContent = `${index + 1} - ${user.name.first} ${user.name.last} (${user.email}), ${user.location.country}`;

        ul.append(li)
        document.body.append(ul);
    });
}
async function renderRamdomUsers() {
    const data = await fetchRandomUsers();
    createdListRamdomUsers(data)
}
renderRamdomUsers();