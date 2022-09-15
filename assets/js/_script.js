// document.querySelector('#seat').innerHTML = '<div class="seat__item">1</div>';

// document.querySelector('#seat').innerText = '<div class="seat__item">1</div>';

// ----------------------------------------------

// let insertHTML = '' //足した結果を保存しておく場所を確保するための変数
// for (let i = 0; i <= 20; i++) {
//   //+= は、すでに設定・保存されているデータに加えて+= の右側にあるものをさらに加えるという意味になります！データとデータの足し算になるわけですね！
//   insertHTML += '<div class="seat__item">' + i + '</div>';
// }
// document.querySelector('#seat').innerHTML = insertHTML;
// ----------------------------------------------

// // 配列の基本的な書き方
// // let num = 0;
// const name = 'kosuge';

// // let numArray = [1, 2, 3, 4];
// const classMember = ['こすげ', 'sato', 'tanaka', 'suzuki'];

// console.log(classMember[1])

// ----------------------------------------------

// let insertHTML = '';
// for (i = 0; i <= 18; i++) {
//   insertHTML += '<div class="seat__item">' + i + '</div>'
// }
// document.querySelector('#seat').innerHTML = insertHTML;

// ----------------------------------------------
// forEachで書き換えると

// const studentNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
// let insertHTML = '';

// studentNumbers.forEach(function (e) {
//   insertHTML += '<div class="seat__item">' + e + '</div>'
// })
// document.querySelector('#seat').innerHTML = insertHTML;

// ----------------------------------------------


// const studentNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];

// 数字が18個だと数が多いので、配列の中に5つの数値のデータがあるとして考えてみましょう！
// （0から順番を数え始めることに注意）

// この時、

// 4番目の数値と0〜4番目のうちのどれかの数値を入れ替える
// 3番目の数値と0〜3番目のうちのどれかの数値を入れ替える
// 2番目の数値と0〜2番目のうちのどれかの数値を入れ替える
// 1番目の数値と0〜1番目のうちのどれかの数値を入れ替える
// とすることによって、配列の中にある数値の並び方をランダムにシャッフルすることができるようになります！

// これをJavaScriptのコードを使って再現してみましょう！
// まずは「4番目の数値と0〜4番目のうちのどれかの数値を入れ替える」をコードで表してみます!

// 前のパートで説明させていただいたMath.random()を使用してみます！

// まずは、0から4のうちのうちのランダムな数値をJavaScriptで作成し、変数（定数）randomNumに保存します。

// 次に、配列の中の4番目のデータをいったん別の変数tmp（一時的に保存することだけを目的とした変数）に保存、その後に配列の中の4番目のデータに対して同じく配列の中のrandomNum番目のデータを保存し、最後に変数tmpへ保存していたデータを配列の中のrandomNum番目に保存します。

// こうすることで、配列の中のデータの特定のデータとデータを入れ替えすることができるようになります！

// あとは、配列の中にある数字の分だけfor文を使って繰り返し処理を行い、配列の中にある数値の並び方をランダムにシャッフルしていけばOKです！

// let insertHTML = ''; // 足し算した結果を保存して置く場所を確保する

// for (let i = studentNumbers.length; i > 0; i--) {
//   const randomNum = Math.floor(Math.random() * i);
//   let tmp = studentNumbers[i - 1];
//   studentNumbers[i - 1] = studentNumbers[randomNum];
//   studentNumbers[randomNum] = tmp;
// }

// console.log(studentNumbers);

// studentNumbers.forEach(function (e) {
//   insertHTML += '<div class="seat__item">' + e + '</div>';
// })

// document.querySelector('#seat').innerHTML = insertHTML;

// 配列.lengthを使って仕上げを行う
// 引き続き、読み込み毎に異なる席番号順が表示される状態を完成させていきましょう！

// 先ほど乱数とfor文を使うことで、配列の中身をシャッフルする仕組みを作ることができました。

// しかし、for文の（）の中にある数値の部分を毎回毎回手動で変更するのは、とても大変ですよね！

// このような時に使えるのが、配列の中身の個数を取得することができるlengthというものです！

// lengthは以下のように使用できます。assets / js / script.jsに記述をしていきましょう！

// ----------------------------------------------

// // 1. 関数宣言と呼ばれるもの
// function getUserName() {

// }
// getUserName();

// // 2. 関数リテラルと呼ばれ、変数に関数宣言を代入するもの
// const getUserName = function () {

// }
// getUserName();

// // 3. アロー関数。厳密にいうと上記2つと若干異なる点がある
// const getUserName = () => {

// }

// ----------------------------------------------

// const studentNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];

// const shffleArray = function () {
//   for (let i = studentNumbers.length; i > 0; i--) {
//     const randomNum = Math.floor(Math.random() * i);
//     let temp = studentNumbers[i - 1];
//     studentNumbers[i - 1] = studentNumbers[randomNum];
//     studentNumbers[randomNum] = temp;
//   }
// }
let studentNumberList = [];

const shffleArray = function () {
  for (let i = studentNumberList.length; i > 0; i--) {
    const randomNum = Math.floor(Math.random() * i);
    let temp = studentNumberList[i - 1];
    studentNumberList[i - 1] = studentNumberList[randomNum];
    studentNumberList[randomNum] = temp;
  }
}


const showSeatBoxes = function () {
  let insertHTML = '';
  studentNumberList.forEach(function (e) {
    // insertHTML += ' <div class="seat__item">' + e + '</div>'
    insertHTML += `<div class="seat__item">${e}</div>`
  })
  document.querySelector('#seat').innerHTML = insertHTML;
}

// shffleArray();
// showSeatBoxes();

// shuffleArray関数 → 配列の中身をシャッフルすることを目的としている関数
// showSeatBoxes関数 → 配列形式のデータを使って画面上に席番号ボックスを表示させることを目的としている関数

// ----------------------------------------------

// 4 - 3
// ドラムロール音が止まったタイミングで席番号ブロックの繰り返しシャッフル表示を終了する

// 音声ファイルをJavaScript側で操作する

// const soundPlay = function () {
//   const audioElement = new Audio();
//   audioElement.src = 'assets/audio/drum.mp3';
//   audioElement.play();
// }

const soundPlay = function () {
  const audioElement = new Audio();
  audioElement.src = 'assets/audio/drum.mp3';
  audioElement.play();

  audioElement.addEventListener('ended', function () {
    clearInterval(timer);
  })
}

// ----------------------------------------------

//// 4 - 2
//// setInterval()を使ってルーレットっぽい演出を追加してみる

document.querySelector('#btn-start').addEventListener('click', function () {
  console.log(this);
  const studentNumber = document.querySelector("#studentNumber").value;
  const studentUpperlimit = 50; //受講生人数の上限値

  if (studentNumber === '' || studentNumber == 0) {
    alert('人数が0もしくは未入力です! 1から50で入力してください')
    return false;
  } else if (studentNumber > studentUpperlimit) {
    alert(`人数は1から${studentUpperlimit}で入力してください`)
    return false;
  }

  document.querySelector(".c-overlay").style.display = 'none'

  for (let i = 1; i <= studentNumber; i++) {
    studentNumberList.push(i)
  }

  const absenteeNumbers = document.querySelector('#absence').value;
  const splitedAbsenteeNumbers = absenteeNumbers.split(",").map(function (e) {
    return parseInt(e)
  });

  studentNumberList = studentNumberList.filter(function (e) {
    return !splitedAbsenteeNumbers.includes(e);
  })

  let timer = setInterval(function () {
    shffleArray();
    showSeatBoxes();
    // clearInterval(timer);
  }, 500);

  soundPlay();

});
