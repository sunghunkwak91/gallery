const slider = document.getElementById("slider");
const items = document.getElementById("items");

slider.style.position = "absolute";
slider.style.top = `${items.offsetTop+10}px`;
slider.style.left = `${items.offsetLeft}px`;
slider.style.padding = "0 44px";