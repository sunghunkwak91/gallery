const choseItem = document.querySelector(".items");
const chosePic = document.querySelectorAll(".gallery .pics");

chosePic.forEach((x) => {
        if(!x.classList.contains("laptop")){
            x.classList.add("hide");
        }

        else{
            x.classList.add("show");
        }

});
choseItem.addEventListener("click", (event)=> {

    if(event.target.classList.contains("item")){
        choseItem.querySelector(".active").classList.remove("active");
        event.target.classList.add("active");
        // console.log(event.target);
        const options = event.target.getAttribute("options");
        // console.log(options);
        chosePic.forEach((x) => {
            if(x.classList.contains(options)){
                x.classList.remove("hide");
                x.classList.add("show");
            }
            else{
                x.classList.remove("show");
                x.classList.add("hide");

            }
        });
    }

})

const clickedPic = document.querySelector(".gallery");
const biggerPic = document.querySelector(".bigger-pic");
const bigPic = biggerPic.querySelector("img");

console.log(clickedPic);s

clickedPic.addEventListener("click", (event) => {

    // console.log(event.target);
    let selectedPic = event.target.src;
    // console.log(selectedPic);
    bigPic.src = selectedPic;
    biggerPic.classList.add("show");

})




