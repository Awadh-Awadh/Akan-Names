
var button = document.querySelector('#btn');


function calcDay(year, month, day){
var year = document.getElementById("year").value;
var month = document.getElementById("month").value;
var day = document.getElementById("day").value;
let mm = month;
let dd = day;
let yearArr = year.toString().split("");
let cc = parseInt(yearArr.slice(0,2).join(''));
let yy = parseInt(yearArr.slice(2).join(''));
  if(year >= 2000){
    yy = 100+ parseInt(yearArr.slice(2).join(''))
  }
  let d = Math.round(( ( (cc/4) -2*cc-1) + ((5*yy/4) ) + ((26*(mm+1)/10)) + dd ) % 7);
  return d
  }


  
  









button.addEventListener('click', ()=> {
   calcDay();




//  let results = document.querySelector('#results');
//  results.style.opacity= 1;
 console.log("awadh");
})