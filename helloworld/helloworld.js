const hello = document.getElementById("a");

hello.addEventListener("click", ()=> {
    if(!hello.classList.contains("move")){
        hello.classList.add("move");
    }
    else{
        hello.classList.remove("move");
    }
})