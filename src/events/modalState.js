function handleClickOpenModal(e) {
  let users = localStorage.getItem("users");
  let usersParse = JSON.parse(users);
  let user = usersParse.find((item)=> item.id == e);
  console.log(e);
  let modal = document.getElementById("modal1");
  modal.setAttribute("name", user.first_name);
  modal.setAttribute("lastname", user.last_name);
  modal.setAttribute("email", user.email);
  modal.setAttribute("avatar", user.avatar);
  modal.setAttribute("visible", "");
}
function handleClickCloseModal() {
  let modal = document.getElementById("modal1");
  modal.classList.remove("active");
  modal.removeAttr("visible");
}
