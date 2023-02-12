

const quotes=[{
    quote: "We're not free in what we do, because we're not free in what we want.",
    author: "-Jonas (Dark)"
},{
    quote: "Why do we fall, Sir? So that we can learn to pick ourselves up.",
    author: "-Alfred Pennyworth"
},{
    quote: "Perhaps it is good to have a beautiful mind, but an even greater gift is to discover a beautiful heart.",
    author: "-John Nash"
},{
    quote: "Sometimes it is the people no one imagines anything of who do the things that no one can imagine.",
    author: "-Alan Turing"
},{
    quote: "You see in their last moments, people show you who they really are.",
    author: "-Joker"
},{
    quote: "Everything will be fine in the end and if it isn't, it's not the end yet.",
    author: "-Rick Sanchez"
},{
    quote: "We all pay for our choices.",
    author: "-Stick (Daredevil)"
},{
    quote: "A wise man gets more from his enemies than a fool from his friends.",
    author: "-Nicky Lauda"
},{
    quote: "The sacrifice...that's the price of a good trick",
    author: "-Alfred Borden"
},{
    quote: "It is our choices, that show what we truly are, far more than our abilities.",
    author: "-Albus Dumbledore"
},{
    quote: "Love is the one thing capable of perceiving that transcends dimensions of time and space.",
    author: "-Dr. Amelia Brand"
},{
    quote: "The greatest trick the devil ever pulled was convincing the world he didn't exist.",
    author: "-Roger Kint"
},{
    quote: "Dreams are not what you see in your sleep, dreams are things which do not let you sleep.",
    author: "-Cristiano Ronaldo"
}]

let btn1= document.querySelector("#button1");
let btn2= document.querySelector("#button2");
let btn3= document.querySelector("#button3");
let btn4= document.querySelector("#button4");

let quote= document.querySelector(".quo");
let author= document.querySelector(".author");
let box=document.querySelector(".wrapper");
let head=document.querySelector("header");

btn1.addEventListener("click",function(){
    let random= Math.floor(Math.random()* quotes.length);
    quote.innerHTML=quotes[random].quote;
    author.innerHTML=quotes[random].author;
    wrapper.style.backgroundColor="#EBF2FA";
    quote.style.color="black";
    author.style.color="black";
    head.style.color="black";
    head.style.fontFamily="Itim";
    author.style.fontFamily="Itim";
    quote.style.fontFamily="Itim";

    // quote.style.fontSize="40px";
    
})

btn2.addEventListener("click",function(){
    let random= Math.floor(Math.random()* quotes.length);
    quote.innerHTML=quotes[random].quote;
    author.innerHTML=quotes[random].author;
    wrapper.style.backgroundColor="#BBDEFB";
    head.style.color="#273469";
    quote.style.color="#273469";
    author.style.color="#1565C0";
    author.style.fontFamily="Playfair Display";
    quote.style.fontFamily="Playfair Display";
    head.style.fontFamily="Playfair Display";


    // quote.style.fontSize="40px";
    
})

btn3.addEventListener("click",function(){
    let random= Math.floor(Math.random()* quotes.length);
    quote.innerHTML=quotes[random].quote;
    author.innerHTML=quotes[random].author;
    wrapper.style.backgroundColor="#001D4A";
    quote.style.color="white";
    author.style.color="white";
    head.style.color="white";
    head.style.fontFamily="Oswald";
    author.style.fontFamily="Oswald";
    quote.style.fontFamily="Oswald";
    // quote.style.fontSize="20px";
    
})

btn4.addEventListener("click",function(){
    let random= Math.floor(Math.random()* quotes.length);
    quote.innerHTML=quotes[random].quote;
    author.innerHTML=quotes[random].author;
    wrapper.style.backgroundColor="#30343F";
    quote.style.color="white";
    author.style.color="white";
    head.style.color="white";
    head.style.fontFamily="Teko";
    author.style.fontFamily="Teko";
    quote.style.fontFamily="Teko";
    quote.style.fontSize="30px";
    
})


// let selected=document.getElementById("selected");
// let kgtolb=document.getElementById("kgtolb");


function getSelectValue(){

    var val="lbtokg";
    var val=document.getElementById("selected").value;
    console.log(val);
    
    // if (val=="lbtokg"){
    //     let submit=document.querySelector("#submit");
    //     console.log(submit);
    //     submit.addEventListener('click',function(){
    //         let input=document.getElementById("input").value;
    //         console.log(input);
    //         document.querySelector('#output').value = input/2.205+"kg";
    //     })
    // }else{
        
    //     let submit=document.querySelector("#submit");
    //     console.log(submit);
    //     submit.addEventListener('click',function(){
    //         let input=document.getElementById("input").value;
    //         console.log(input);
    //         document.querySelector('#output').value = input;
    //     })

    // }

}


// let submit=document.getElementById("submit");
// let submit=document.querySelector("#submit");
// console.log(submit);
// submit.addEventListener('click',function(){
//     let input=document.getElementById("input").value;
//     console.log(input);
//     document.querySelector('#output').value = input/2.205+"kg";
// })




