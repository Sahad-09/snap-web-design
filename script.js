const closeBtn = document.getElementById("close-btn")
const openBtn = document.getElementById("open-btn")

openBtn.addEventListener("click", (e)=>{
    openBtn.setAttribute("class", "hidden")
    closeBtn.removeAttribute("class", "hidden")
    

})
