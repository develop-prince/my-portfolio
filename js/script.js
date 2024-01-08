
let txt = document.querySelector(".txt");

let add = document.querySelector(".btn-add");
let check = 0;

// let rem = document.querySelector(".btn-rem");

// add.addEventListener("click",()=>{
//     txt.innerHTML = "Friend";
//     txt.style.color = "green";
// })

// rem.addEventListener("click",()=>{
//     txt.innerHTML ="stranger"
//     txt.style.color = "red";
// })

//now toggle way

add.addEventListener("click",()=>{
    if(check === 0){
        txt.innerHTML="Friend";
        txt.style.color="green";
        check = 1;
        add.style.background = "red"
        add.innerHTML="Remove";
    }
    else{
        txt.innerHTML="stranger";
        txt.style.color="red";
        check = 0;
        add.style.background = "green";
        add.innerHTML="Add";
    }
})


// 2nd project "pop-up dil on dobble click"

let cont = document.querySelector(".box")

let icon = document.querySelector(".fa-heart")

console.log(icon);

cont.addEventListener("dblclick",()=>{
    icon.style.transform = 'translate(-50%, -50%), scale(1)';
    console.log("hii");
setTimeout(()=>{
    icon.style.transform = 'translate(-50%, -50%), scale(0)';
    console.log("hii");

},3000)   
})
  