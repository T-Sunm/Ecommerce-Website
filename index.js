// slider1--------------------------------
const rightbtn = document.querySelector('.btn-right-one')
const leftbtn = document.querySelector('.btn-left-one')
const imgNumber = document.querySelectorAll(".container-pros")
let index = 0
rightbtn.addEventListener("click",function(){
    // khi nhấn sẽ di chuyển nguyên cái div to
    index = index +1
    if(index > imgNumber.length -1){
        index = 0
    }
    document.querySelector(".container-pro2").style.right = index *100+"%"
})
leftbtn.addEventListener("click",function(){
    index = index -1
    if(index < 0){
        index = imgNumber.length-1
    }
    // khi nhấn sẽ di chuyển nguyên cái div to
    document.querySelector(".container-pro2").style.right = index *100+"%"

})
// slider tự lướt--------------------------
function imgAuto(){
    index++
    if(index > imgNumber.length -1){
        index = 0
    }
    document.querySelector(".container-pro2").style.right = index * 100+"%"
}
//hàm setInterval : sau bao nhiêu lâu sẽ gọi lại hàm đó
setInterval(imgAuto,3000)

// slider1--------------------------------
const rightbtntwo = document.querySelector('.btn-right-two')
const leftbtntwo = document.querySelector('.btn-left-two')
const imgNumbertwo = document.querySelectorAll(".container-pros2")
let index2 = 0
rightbtntwo.addEventListener("click",function(){
    // khi nhấn sẽ di chuyển nguyên cái div to
    index2 = index2 +1
    if(index2 > imgNumber.length -1){
        index2 = 0
    }
    document.querySelector(".container-pro3").style.right = index2 *100+"%"
})
leftbtntwo.addEventListener("click",function(){
    index2 = index2 -1
    if(index2 < 0){
        index2 = imgNumber.length-1
    }
    // khi nhấn sẽ di chuyển nguyên cái div to
    document.querySelector(".container-pro3").style.right = index2 *100+"%"

})
// slider tự lướt--------------------------
function imgAuto2(){
    index2++
    if(index2 > imgNumber.length -1){
        index2 = 0
    }
    document.querySelector(".container-pro3").style.right = index2 * 100+"%"
}
//hàm setInterval : sau bao nhiêu lâu sẽ gọi lại hàm đó
setInterval(imgAuto2,3000)