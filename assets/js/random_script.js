const studentNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];



// 1. 生徒の学籍番号が複数保存された配列形式のデータであるstudentNumbersをシャッフルしている部分

const shuffleArray = function () {
  for (let i = studentNumbers.length; i > 0; i--) {
    const randomNum = Math.floor(Math.random() * i);
    let temp = studentNumbers[i - 1];
    studentNumbers[i - 1] = studentNumbers[randomNum];
    studentNumbers[randomNum] = temp;
  }
}
// 2. 中身がシャッフルされた配列形式のデータを使って、画面上に席番号ボックスを表示している部分

const showSeatBoxes = function () {
  let insertHTML = '';
  studentNumbers.forEach(function (e) {
    insertHTML += '<div class="seat__item">' + e + '</div>'
  })
  document.querySelector('#seat').innerHTML = insertHTML;
}

shuffleArray();

showSeatBoxes();
