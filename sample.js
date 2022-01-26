// varは変数を再宣言できる
// var nickname = "taro"
// console.log(nickname)
// var nickname = "ichiro"
// console.log(nickname)

// letでは変数を再宣言できない
// let nickname = "taro"
// console.log(nickname)
// let nickname = "ichiro"
// console.log(nickname)

// constでも再宣言できない
// const nickname = "taro"
// console.log(nickname)
// const nickname = "ichiro"
// console.log(nickname)

// varは再代入もできる
// var nickname = "taro"
// console.log(nickname)
// nickname = "jiro"
// console.log(nickname)

// constは再代入もできない
// const nickname = "taro"
// console.log(nickname)
// nickname = "jiro"
// console.log(nickname)

// var str = "webcamp" //グローバルスコープ
// function foo() {
//   console.log(str)
//   var y = "hello" //関数スコープ
// }
// foo()
// console.log(y)

// function foo() {
//   let x = "webcamp"
//   let y = "hello webcamp"
//   console.log(x)
//   console.log(y)
// }
// foo()

// for (let i = 0; i < 10; i++) {
//   console.log(i)
// }
// console(i) //letによる変数宣言は宣言されたブロック内が有効範囲となる。よってこの行のconsoleはエラーになる

// var str = "webcamp"
// function foo() {
//   console.log(str)
//   var str = "dmm webcamp"
//   console.log(str)
// }
// foo()
// 変数の巻き上げが起こっている。関数内のどの部分で変数を宣言しても、関数の冒頭部分で変数の宣言をしていることになる。


// ----1-3

// let alertStrig;
// alertString = addString("WebCamp");

// alert(alertString)

// function addString(strA) {
//   let addStr = "Hello " + strA;
//   return addStr;
// }

// let promptStr = prompt('何か好きな文字を入力してください');
// alert(promptStr);

let user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください');
while ((user_hand != "グー") && (user_hand != "チョキ") && (user_hand != "パー") && (user_hand != null)) {
  alert('グー・チョキ・パーのいずれかを入力してください');
  user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください');
}

let js_hand = getJShand();
let judge = winLose(user_hand,js_hand);

if (user_hand != null) {
  alert('あなたの選んだては' + user_hand + 'です。\nJavaScriptの選んだ手は' + js_hand + 'です。\n結果は' + judge + 'です。');
} else {
  alert("またチャレンジしてね")
}

function getJShand() {
  let js_hand_num = Math.floor(Math.random()*3);

  if(js_hand_num == 0) {
    hand_hand = "グー";
  } else if(js_hand_num == 1) {
    hand_hand = "チョキ";
  } else if(js_hand_num == 2) {
    hand_hand = "パー";
  }
  return hand_hand;
}

function winLose(user,js) {
  let winLoseStr;

  if(user == "グー") {
    if(js == "グー") {
      winLoseStr = "あいこ";
    } else if(js == "チョキ") {
      winLoseStr = "勝ち";
    } else if(js == "パー") {
      winLoseStr = "負け"
    }
  } else if(user == "チョキ"){
    if(js == "グー"){
      winLoseStr = "負け";
    } else if(js == "チョキ"){
      winLoseStr = "あいこ";
    } else if(js == "パー"){
      winLoseStr = "勝ち";
    }
  } else if(user == "パー"){
    if(js == "グー"){
      winLoseStr = "勝ち";
    } else if(js == "チョキ"){
      winLoseStr = "負け";
    } else if(js == "パー"){
      winLoseStr = "あいこ";
    }
  }

  return winLoseStr;
}