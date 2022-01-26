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