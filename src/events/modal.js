function handleClickOpenModal(e){
    let overlay = document.getElementById("overlay");
    overlay.classList.add("active");
    let modal = document.getElementById("modal1");
    modal.setAttribute("name","juan");
    console.log("click");
}
function handleClickCloseModal(){
    let modal = document.getElementById("overlay");
    modal.classList.remove("active");
}