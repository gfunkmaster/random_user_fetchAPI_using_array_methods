const main = document.getElementById("main");
const addUserBtn = document.getElementById("add__user");
const dobuleBtn = document.getElementById("dobule");
const showMillionBtn = document.getElementById("show__millionaires");
const sortBtn = document.getElementById("sort");
const calcWealthBtn = document.getElementById("calc__wealth");

//init a array where we put the humans
let data = [];

// fetch random user and add money

getRandomUser();
getRandomUser();
getRandomUser();

const getRandomUser = async () => {
  const res = await fetch("https://randomuser.me/api/");
  const data = await res.json();

  const user = data.results[0];

  const newUser = {
    name: `${user.name.first} ${user.name.last}`,
    money: Math.floor(Math.random() * 1000000),
  };

  //Pass the user to a function named addData
  addData(newUser);
};

//Add new obj to data arr.
const addData = (obj) => {
  data.push(obj);
};
