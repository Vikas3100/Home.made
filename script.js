let main = document.querySelector("#main")
let cursor = document.querySelector(".cursor")

main.addEventListener("mousemove",(cr)=>{
    cursor.style.left = cr.x+"px";
    cursor.style.top = cr.y+"px";
    cursor.style.opacity = 0.9;
})