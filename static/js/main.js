
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
  let d = Math.floor(( ( (cc/4) -2*cc-1) + ((5*yy/4) ) + ((26*(mm+1)/10)) + dd ) % 7);
  return d
  
  
  }
  
  function getName(){
    let maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    let femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    let weekDays= ["sunday", "monday", "Tuesday", "Wednesday", "Thursday","Friday", "Saturday"]
    let index = calcDay();
    var maleGender = document.querySelector("#male")
    var femaleGender = document.querySelector("#female")
    var kwasiNames;
     if(weekDays[index] && maleGender.checked){
       kwasiNames = maleNames[index] + "💪🏿"
    }
    if (weekDays[index] && femaleGender.checked){
      kwasiNames = femaleNames[index] + "👧🏿"
    }
  var name = document.querySelector('.name');
  name.innerHTML= kwasiNames ;
    
    
    }
    

 






button.addEventListener('click', ()=> {
getName()
let results = document.querySelector('#results');
results.style.opacity= 1;
})