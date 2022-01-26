var marvel=[{
    id:1,
    name:"Captain American",
    work:"Leader",
    img:"https://cdn.vox-cdn.com/thumbor/T-F4dV0PEp6eC-Z7lTu6fcdhDFQ=/0x0:1916x784/1200x800/filters:focal(517x45:823x351)/cdn.vox-cdn.com/uploads/chorus_image/image/59126061/Screen_Shot_2018_03_22_at_3.09.54_PM.0.png",
    text:"The First Avenger premiered at the El Capitan Theatre on July 19, 2011, and was released in the United States on July 22, as part of Phase One of the MCU. The film was commercially successful, grossing over $370 million worldwide.",
},
{
    id:2,
    name:"Ironman",
    work:"Technology",
    img:"https://www.giantfreakinrobot.com/wp-content/uploads/2021/05/iron-man-flying.jpeg",
    text:"Iron Man is a 2008 American superhero film based on the Marvel Comics character of the same name. Produced by Marvel Studios and distributed by Paramount Pictures,[N 1] it is the first film in the Marvel Cinematic Universe (MCU).",
},
{
    id:3,
    name:"Doctor Strange",
    work:"Magician",
    img:"https://resize.indiatvnews.com/en/resize/newbucket/715_-/2021/03/benedict-cummberbatch-1615554940.jpg",
    text:"Doctor Strange is a 2016 American superhero film based on the Marvel Comics character of the same name. Produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures, it is the 14th film in the Marvel Cinematic Universe (MCU)."
}
]

var image=document.getElementById("mainpic");
var about=document.getElementById("about");
var work=document.getElementById("work")
var information=document.getElementById("information")
var prevBtn=document.querySelector("prevBtn");
var nextBtn=document.querySelector("nextBtn");
var randomBtn=document.querySelector("randomBtn")
var currentindex=0;
prevBtn.addEventListener("click",prevclick);
nextBtn.addEventListener("click",nextclick);
randomBtn.addEventListener("click",randomaize);



function prevclick(){
    if(currentindex===0){
        currentindex=marvel.length-1;
    }else{
        currentindex--;
    }
    console.log(currentindex);
    updateUserDetails();
}
function nextclick(){
    if (currentindex === marvel.length - 1) {
        currentindex = 0;
      } else {
        currentindex++;
      }
      console.log(currentindex);
      updateUserDetails();
}
function randomaize(){
    currentindex=Math.floor(Math.random()*marvel.length);
    console.log(currentindex);
    updateUserDetails();
}
function updateUserDetails() {
    image.src = reviews[currentindex].img;
    about.innerText = reviews[currentindex].name;
    work.innerText = reviews[currentindex].job;
    information.innerText = reviews[currentindex].text;
  }
