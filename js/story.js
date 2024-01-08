let arry = [
    {dp:"https://images.unsplash.com/photo-1555169062-013468b47731?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YW5pbWFsfGVufDB8fDB8fHww",story:"https://images.unsplash.com/photo-1484406566174-9da000fda645?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YW5pbWFsfGVufDB8fDB8fHww"},
    {dp:"https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YW5pbWFsfGVufDB8fDB8fHww",story:"https://plus.unsplash.com/premium_photo-1675432656807-216d786dd468?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YW5pbWFsfGVufDB8fDB8fHww"},
    {dp:"https://images.unsplash.com/photo-1517849845537-4d257902454a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGFuaW1hbHxlbnwwfHwwfHx8MA%3D%3D",story:"https://images.unsplash.com/photo-1456926631375-92c8ce872def?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGFuaW1hbHxlbnwwfHwwfHx8MA%3D%3D"},
    {dp:"https://images.unsplash.com/photo-1550853024-fae8cd4be47f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fGFuaW1hbHxlbnwwfHwwfHx8MA%3D%3D",story:"./img/dog.jfif"},
    {dp:"https://images.unsplash.com/photo-1589656966895-2f33e7653819?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGFuaW1hbHxlbnwwfHwwfHx8MA%3D%3D",story:"https://images.unsplash.com/photo-1547721064-da6cfb341d50?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGFuaW1hbHxlbnwwfHwwfHx8MA%3D%3D"}
];
let culter = "";
arry.forEach((elem,idx)=>{
    // console.log(elem.dp,elem.story,idx);
     culter += ` <div class="story"><img 
     id ="${idx}" class="img" src="${elem.dp}" alt=""></div>`;
     
})

document.querySelector(".story-box").innerHTML = culter;
document.querySelector(".story-box").addEventListener("click",(dets)=>{
    console.log();
    let val =  document.querySelector(".full-srn")

    val.style.display = "block";
    val.style.backgroundImage = `url(${arry[dets.target.id].story})`

setInterval(()=>{
    val.style.display = "none";
},5000)
   
})