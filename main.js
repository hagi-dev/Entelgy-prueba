let data=[
    {
        name:"jako",
        lastname:"diaz lopez",
        email:"jako@gmail.com",
        image:"https://avatars3.githubusercontent.com/u/1905708?s=280&v=4"
    },
    {
      name:"jako2",
      lastname:"diaz lopez",
      email:"jako@gmail.com",
      image:"https://avatars3.githubusercontent.com/u/1905708?s=280&v=4"
  },
  {
      name:"jako3",
      lastname:"diaz lopez",
      email:"jako@gmail.com",
      image:"https://avatars3.githubusercontent.com/u/1905708?s=280&v=4"
  }
  ]
  let listUsers = document.getElementById("list-users");
  let listCardUser = ''; 
  data.forEach((item,index)=>{
    console.log(item.lastname);
    listCardUser=listCardUser+`
        <user-card
        key=${index}
        name=${item.name}
        lastname=${item.lastname}
        email=${item.email}
        image=${item.image}
        ></user-card>
    `
  });
  
  listUsers.innerHTML= listCardUser;