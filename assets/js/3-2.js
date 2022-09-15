// const fukuoka = "福岡県";
// document.querySelector("#fukuoka").innerHTML = fukuoka;

// const oita = "大分県";
// document.querySelector("#oita").innerHTML = oita;

// const miyazaki = "宮崎県";
// document.querySelector("#miyazaki").innerHTML = miyazaki;

// const kumamoto = "熊本県";
// document.querySelector("#kumamoto").innerHTML = kumamoto;

// const saga = "佐賀県";
// document.querySelector("#saga").innerHTML = saga;

// const nagasaki = "長崎県";
// document.querySelector("#nagasaki").innerHTML = nagasaki;

// const kagoshima = "鹿児島県";
// document.querySelector("#kagoshima").innerHTML = kagoshima;

// ----------------------------------------------

// let insertHTML = "";
// const kyushuPrefecture = ["福岡県", "大分県", "宮崎県", "熊本県", "佐賀県", "長崎県", "鹿児島県"];

// kyushuPrefecture.forEach(function (e) {
//   insertHTML += "<li>" + e + "</li>";
//   // console.log(e);
// });

// document.querySelector("#prefecture-list").innerHTML = insertHTML

// ----------------------------------------------

let insertHTML = '';
const kyushuPrefecture = ["福岡県", "大分県", "宮崎県", "熊本県", "佐賀県", "長崎県", "鹿児島県"];

kyushuPrefecture.forEach(function (e) {
  insertHTML += "<li>" + e + "</li>";
  console.log(e)
})

document.querySelector('#prefecture-list').innerHTML = insertHTML
