let nav = document.querySelector("#nav")
let menu_items = document.querySelectorAll("[data-scroll]")
for(let item of menu_items){
    item.addEventListener("click", function(event){
        event.preventDefault();
        let scroll = item.dataset.scroll
        let elem  = document.querySelector(scroll)
        //window.scrollTo(0, elem.offsetTop)
        elem.scrollIntoView({
            behavior:"smooth",
            block:"start"
        })
        nav.classList.remove("active")
    })
}


let scrollUpButton = document.querySelector(".up-btn")
let scrollUpArrow = document.querySelector(".up-arrow")
let intro = document.querySelector("#intro")
let header = document.querySelector("#header")
let introHeight = intro.clientHeight
let setHeaderPosition = function(){
let scroll = document.documentElement.scrollTop
    if(scroll >= introHeight){
        header.classList.add("fixed")
        scrollUpButton.classList.add("active")
    }else{
        header.classList.remove("fixed")
        scrollUpButton.classList.remove("active")
    }
}
window.addEventListener("scroll",setHeaderPosition)
window.addEventListener("load",setHeaderPosition)
window.addEventListener("resize",function(){
    introHeight = intro.clientHeight
    setHeaderPosition
})
scrollUpArrow.addEventListener("click", function(e){
   intro.scrollIntoView({
            behavior:"smooth",
            block:"start"
        })
})


let tabsItem = document.querySelectorAll(".tabs__item")
let tabsBlock = document.querySelectorAll(".tab__container")
for(let item of tabsItem){
    item.addEventListener("click", function(event){
    event.preventDefault()
        for(let tab of tabsItem){
            tab.classList.remove("active")
        }
        for(let block of tabsBlock){
            block.classList.remove("active")
        }
        let clickedTab = item.dataset.tab
        item.classList.add("active")
        let activeBlock = document.querySelector(clickedTab)
        activeBlock.classList.add("active")
}) 
}


let burger = document.querySelector(".burger")
burger.addEventListener("click", function(event){
    nav.classList.toggle("active")
})


let sliderItem = document.querySelectorAll("#slider__item")
for(let slider of sliderItem){
    slider.addEventListener("click", function(event){
    let rightRewiew = document.querySelector(".right__review")
    let centerRewiew = document.querySelector(".center__review")
    let leftRewiew = document.querySelector(".left__review")
    if(event.target.classList.value === "slider__right"){
        rightRewiew.classList.remove("right__review")
        rightRewiew.classList.add("left__review")
        
        centerRewiew.classList.remove("center__review")
        centerRewiew.classList.add("right__review")
        
        leftRewiew.classList.remove("left__review")
        leftRewiew.classList.add("center__review")
        
    }else{
        rightRewiew.classList.remove("right__review")
        rightRewiew.classList.add("center__review")
        
        centerRewiew.classList.remove("center__review")
        centerRewiew.classList.add("left__review")
        
        leftRewiew.classList.remove("left__review")
        leftRewiew.classList.add("right__review")
    }
    
})
}

                                          
                                          
                                          
                                          
                                          
                                          
                                          
                                          
                                          
                                          
                                          
                                          
                                          
                                          
                                          
                                          
                                          




