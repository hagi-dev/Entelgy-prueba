/**
 * function for requirets data users for save in localstorage
 */

export const getData= async()=>{
  let users = localStorage.getItem('users');
  if(!users){
    let data2=[];
    await fetch('https://reqres.in/api/users?page=1')
    .then(response => response.json())
    .then(data => {
      data2=[...data2,...data.data];
      return fetch('https://reqres.in/api/users?page=2')
    })
    .then(response => response.json())
    .then(data => {
      data2=[...data2,...data.data];
    })
    localStorage.setItem("users",JSON.stringify(data2));
  }
  
}

