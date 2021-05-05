const main = document.getElementById("main");
const addUserBtn = document.getElementById("add__user");
const doubleBtn = document.getElementById("double");
const showMillionBtn = document.getElementById("show__millionaires");
const sortBtn = document.getElementById("sort");
const calcWealthBtn = document.getElementById("calc__wealth");

//init a array where we put the humans
let data = [];

// fetch random user and add money
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

//Double money - using MAP method
const doubleMoney = () => {
  //map through it
  data = data.map((user) => {
    //destructing it, accessing user obj. times 2 money
    return { ...user, money: user.money * 2 };
  });

  updateDOM();
};

// Sort by richest using - Sort Method
const sortByRichest = () => {
  data.sort((a, b) => b.money - a.money);

  updateDOM();
};

//Filter only millioner - filter Method
const showMillioners = () => {
  data = data.filter((million) => million.money > 1000000);

  updateDOM();
};

//Calculate the total wealth using - reduce Method
const calcAllWealth = () => {
  const wealth = data.reduce((acc, user) => (acc += user.money), 0);

  const wealthEl = document.createElement("div");
  wealthEl.innerHTML = `<h3>Total Wealth: <strong>${formatMoney(
    wealth
  )} </strong></h3>`;

  main.appendChild(wealthEl);
};

//Add new obj to data arr.
const addData = (obj) => {
  data.push(obj);

  updateDOM();
};

//Update DOM
const updateDOM = (providedData = data) => {
  //clear main div
  main.innerHTML = `<h2><strong>Person</strong> Wealth</h2>`;

  // Foreach METHOD
  providedData.forEach((item) => {
    const element = document.createElement("div");
    element.classList.add("person");
    element.innerHTML = `<strong>${item.name}</strong> ${formatMoney(
      item.money
    )}`;
    main.appendChild(element);
  });
};

//Formate number as money
const formatMoney = (number) => {
  return "$" + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
};

//Event Listeners
addUserBtn.addEventListener("click", getRandomUser);
doubleBtn.addEventListener("click", doubleMoney);
sortBtn.addEventListener("click", sortByRichest);
showMillionBtn.addEventListener("click", showMillioners);
calcWealthBtn.addEventListener("click", calcAllWealth);
getRandomUser();
getRandomUser();
getRandomUser();
