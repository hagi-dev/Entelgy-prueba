import { getData } from "./src/getData.js";

getData();
// .then((data)=>console.log(data));
let users = localStorage.getItem("users");
let usersParse = JSON.parse(users);

let listUsers = document.getElementById("list-users");
let listCardUser = "";
usersParse.forEach((item, index) => {
  listCardUser =
    listCardUser +
    `
        <user-card
        onclick="handleClickOpenModal(${item.id})"
        idd=${item.id}
        first_name=${item.first_name}
        last_name=${item.last_name}
        email=${item.email}
        avatar=${item.avatar}
        ></user-card>
    `;
});

listUsers.innerHTML = listCardUser;

