const quotes = [
    {
    text: '"Success is not final, failure is not fatal: it is the courage to continue that counts."',
    author: "-Winston Churchill"
},
{
    text: '"Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle."',
    author: "-Christian D. Larson"
},
{
    text: '"The only way to do great work is to love what you do."',
    author: "-Steve Jobs"
},
{
    text: '"Success is not how high you have climbed, but how you make a positive difference to the world."',
    author: "-Roy T. Bennett"
},
{
    text: '"You miss 100% of the shots you dont take."',
    author: "-Wayne Gretzky"
},
{
    text: '"The best way to predict the future is to create it."',
    author: "-Abraham Lincoln"
  },
  {
    text: '"Life is 10% what happens to us and 90% how we react to it."',
    author: "-Charles R. Swindoll"
  },
  {
    text: '"Hardships often prepare ordinary people for an extraordinary destiny."',
    author: "-C.S. Lewis"
  },
  {
    text: '"Dont watch the clock; do what it does. Keep going."',
    author: "-Sam Levenson"
  },
  {
    text: '"Success is not the key to happiness. Happiness is the key to success."',
    author: "-Albert Schweitzer"
  },
  {
    text: '"In the end, we will remember not the words of our enemies, but the silence of our friends."',
    author: "-Martin Luther King Jr."
  },
  {
    text: '"The greatest glory in living lies not in never falling, but in rising every time we fall."',
    author: "-Nelson Mandela"
  },
  {
    text: '"Dont judge each day by the harvest you reap but by the seeds that you plant."',
    author: "-Robert Louis Stevenson"
  },
  {
    text: '"Believe you can and youre halfway there."',
    author: "-Theodore Roosevelt"
  }
];
let quoteTxt=document.querySelector("#qoute")
let quoteAu=document.querySelector("#author")
let quotebtn1=document.querySelector("#qbtn1");
let quotebtn2=document.querySelector("#qbtn2");
let quotebtn3=document.querySelector("#qbtn3");
let quotebtn4=document.querySelector("#qbtn4");
let qbox=document.querySelector(".qouta_container")
let qtxt=document.querySelector("#qoute")
let qauth=document.querySelector("#author")
let qhead=document.querySelector("h2")

let textarea = document.getElementById("textarea");
let clrbtn = document.getElementById("clear");
let capbtn= document.getElementById("caps");
let revbtn= document.getElementById("rev");
let sort = document.getElementById("sort");
let stripbtn = document.getElementById("strip");
let numbtn =document.getElementById("addnum");
let shufflebtn= document.getElementById("shuffle")


function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  }

function displayQuote() {
  const quote = getRandomQuote();
  quoteTxt.textContent = quote.text;
  quoteAu.textContent = quote.author;
}
displayQuote();

quotebtn1.addEventListener("click",function(){
    let randomq=Math.floor(Math.random()*quotes.length);
    quoteTxt.innerHTML=quotes[randomq].text;
    quoteAu.innerHTML=quotes[randomq].author;
    qbox.style.backgroundColor = '#ffe6a7';
    qbox.style.border='3px solid black';
    qtxt.style.color = '#000';
    qhead.style.fontFamily='poppins'
    qtxt.style.fontFamily='poppins';
    qauth.style.color = '#000';
    qhead.style.color = '#000';
});
quotebtn2.addEventListener("click",function(){
    let randomq=Math.floor(Math.random()*quotes.length);
    quoteTxt.innerHTML=quotes[randomq].text;
    quoteAu.innerHTML=quotes[randomq].author;
    qbox.style.backgroundColor = '#9eaa2e';
    qbox.style.border='3px solid violet';
    qtxt.style.color = '#000';
    qhead.style.fontFamily='oswald'
    qtxt.style.fontFamily='oswald';
    qauth.style.color = '#000';
    qhead.style.color = '#000';
});
quotebtn3.addEventListener("click",function(){
    let randomq=Math.floor(Math.random()*quotes.length);
    quoteTxt.innerHTML=quotes[randomq].text;
    quoteAu.innerHTML=quotes[randomq].author;
    qbox.style.backgroundColor = '#4E265A';
    qbox.style.border='3px solid silver';
    qtxt.style.color = '#fff';
    qhead.style.fontFamily='chivo mono'
    qtxt.style.fontFamily='chivo mono';
    qauth.style.color = '#fff';
    qhead.style.color = '#fff';
});
quotebtn4.addEventListener("click",function(){
    let randomq=Math.floor(Math.random()*quotes.length);
    quoteTxt.innerHTML=quotes[randomq].text;
    quoteAu.innerHTML=quotes[randomq].author;
    qbox.style.backgroundColor = '#751B36';
    qbox.style.border='3px solid black';
    qtxt.style.color = '#fff';
    qhead.style.fontFamily='rubik'
    qtxt.style.fontFamily='rubik';
    qauth.style.color = '#fff';
    qhead.style.color = '#fff';
});


// --------------------------------------------------------------------------

function hero () {
  var inputWeight = document.getElementById("inputcell").value;
  var inputUnit = document.getElementById("inputUnit").value;
  var outputcell;

  if (inputUnit==='lbtokg'){
    outputcell = inputWeight * 2.20462+ ' kilograms';
  }else{
    outputcell = inputWeight * 0.453592+ ' pounds';
  }
  document.getElementById("outputcell").value=outputcell;

}

// --------------------------------------------------------------------------

function calculator(){
  var innum=document.getElementById("numin").value;
  var num=innum.split(',').map(Number);
  var max=Math.max(...num);
  var min=Math.min(...num);
  var sum=0;
  var avg;
  var reverse=num.reverse().join(',');

  for (var i=0; i<num.length; i++){
    sum+=num[i];
  }
  avg=sum/num.length;

  document.getElementById("max").innerHTML="Max:"+max;
  document.getElementById("min").innerHTML="Min:"+min;
  document.getElementById("sum").innerHTML="Sum:"+sum;
  document.getElementById("average").innerHTML="Average: "+avg;
  document.getElementById("reverse").innerHTML="Reverse Order:"+reverse
}

// --------------------------------------------------------------------------

//clear
clrbtn.addEventListener("click",function(){
  textarea.value="";
});
//caps
capbtn.addEventListener("click",function(){
  textarea.value=textarea.value.toUpperCase()
});
//sort
sort.addEventListener("click", function() {
  const lines = textarea.value.split("\n");
  const sortedLines = lines.sort(function(a, b) {
    return a.localeCompare(b);
  });
  textarea.value = sortedLines.join("\n");
});


//reverse
rev.addEventListener("click",function(){
  textarea.value=textarea.value.split("").reverse().join("");
});

//strip
stripbtn.addEventListener("click", function(){
  const lines = textarea.value.split("\n");
  let trimm=[];
  const trimmedLines = lines.filter(function(line) {
    return line.trim() !== "";
  });
  console.log(trimmedLines)
  for (var i=0; i<trimmedLines.length; i++){
    trimm.push(trimmedLines[i].split(" ").join(""))
  }
  textarea.value= trimm.join("\n")
})
// number
numbtn.addEventListener("click", function() {
  const lines = textarea.value.split("\n");
  const numberedLines = lines.map(function(line, index) {
    return (index + 1) + ". " + line.trim();
  });
  textarea.value = numberedLines.join("\n");
})

//shuffle

shufflebtn.addEventListener("click", function() {
  const lines = textarea.value.split("\n");
  for (let i = lines.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [lines[i], lines[j]] = [lines[j], lines[i]];
  }
  textarea.value = lines.join("\n");
});


