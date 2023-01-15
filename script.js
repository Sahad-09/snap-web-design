const closeBtn = document.getElementById("close-btn")
const openBtn = document.getElementById("open-btn")
const menu = document.getElementById("menu")

openBtn.addEventListener("click", ()=>{
    openBtn.setAttribute("class", "hidden")
    closeBtn.removeAttribute("class", "hidden")
    menu.removeAttribute("class", "hidden")
    
})

closeBtn.addEventListener("click", ()=>{
    openBtn.removeAttribute("class", "hidden")
    closeBtn.setAttribute("class", "hidden")
    menu.setAttribute("class", "hidden")
    
})