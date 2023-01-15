const closeBtn = document.getElementById("close-btn")
const openBtn = document.getElementById("open-btn")
const menu = document.getElementById("menu")
const blurMe = document.querySelector(".blur-me")
const featuresOn = document.getElementById("features-on")
const featuresOff = document.getElementById("features-off")
const features = document.getElementById("features-list")


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

featuresOn.addEventListener("click", ()=>{
    features.classList.toggle("hidden")
    featuresOff.classList.toggle("hidden")
    featuresOn.setAttribute("class", "hidden")
})

featuresOff.addEventListener("click", ()=>{
    features.classList.toggle("hidden")
    featuresOn.removeAttribute("class", "hidden")
    featuresOff.setAttribute("class", "hidden cursor-pointer")
})