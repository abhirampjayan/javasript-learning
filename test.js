// function getTime() {

//   let date = new Date();
//   let h = date.getHours();
//   let m = date.getMinutes();
//   let s = date.getSeconds();

//   let time = `${h}:${m}:${s}`;
//   document.getElementById("time").innerText = time;
//   setInterval(() => {
//     getTime();
//   }, 100);
// }

// getTime();

let pro = new Promise(function (resolve,reject){
  setTimeout(resolve("done"),5000);
})
pro.then(result =>console.log("result",result))
console.log('log',pro)