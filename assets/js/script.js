// const studentNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];

// 入力欄に入力された値を活用して席番号ブロックを表示する元データの配列を作成する
// たとえば、studentNumberの中に保存されたデータが5だった場合、配列studentNumbersは[1, 2, 3, 4, 5]になる。

let studentNumberList = [];

// 1. 生徒の学籍番号が複数保存された配列形式のデータであるstudentNumbersをシャッフルしている部分

const shuffleArray = function () {
  for (let i = studentNumberList.length; i > 0; i--) {
    const randomNum = Math.floor(Math.random() * i);
    let temp = studentNumberList[i - 1];
    studentNumberList[i - 1] = studentNumberList[randomNum];
    studentNumberList[randomNum] = temp;
  }
}

// 2. 中身がシャッフルされた配列形式のデータを使って、画面上に席番号ボックスを表示している部分

const showSeatBoxes = function () {
  let insertHTML = '';
  studentNumberList.forEach(function (e) {
    insertHTML += '<div class="seat__item">' + e + '</div>'
  })
  document.querySelector('#seat').innerHTML = insertHTML;
}

const setTargetStudents = function (studentNumber) {
  // console.log(studentNumber)
  for (let i = 1; i <= studentNumber; i++) {
    studentNumberList.push(i)
  }

  const absenteeNumbers = document.querySelector('#absence').value;

  const splitedAbsenteeNumbers = absenteeNumbers.split(',').map(function (e) {
    return parseInt(e)
  });

  studentNumberList = studentNumberList.filter(function (e) {
    return !splitedAbsenteeNumbers.includes(e)
  })
}

document.querySelector('#btn-start').addEventListener('click', function () {

  studentNumber = document.querySelector('#studentNumber').value;

  if (studentNumber === '' || studentNumber == 0) {
    alert('人数が未入力もしくは0です');
    return false;
  } else if (studentNumber > 50 || studentNumber < 0) {
    console.log(studentNumber)
    alert('人数は50人以内に設定してください！');
    return false;
  }

  // document.querySelector('.c-overlay').style.display = 'none';
  document.querySelector('.c-overlay').classList.add("is-closed");

  setTargetStudents(studentNumber);

  let timer = setInterval(function () {
    shuffleArray();
    showSeatBoxes();
    clearInterval(timer);
  }, 500)
})
