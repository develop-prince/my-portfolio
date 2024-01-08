// tippy('#myButton', {
//     content: "I'm a Tippy tooltip!",
//   });


let copyText = document.querySelector(".copy-text");

copyText.querySelector("button").addEventListener("click", ()=>{
    let input =  copyText.querySelector("input.text");
    input.Select();
    document.execCommand("copy");
    
})