const pupil = document.querySelector(".pupil");
const password = document.getElementById("password");
const badura = document.querySelector(".badura");
const closeEye = document.querySelector(".closeEye")

window.onmousemove = function () {
    let mouseX = event.clientX.toString();
    let mouseY = event.clientY.toString();
    if (mouseY < 300) {
        if (pupil.style.width <= "12px"){
            pupil.style.bottom = ((mouseY/10) + "px");
        }
        else {
            pupil.style.width= `${mouseY / 12}px`;
            pupil.style.height= `${mouseY / 12}px`;
        }
        pupil.style.top = ((mouseY/80) + "px");
    }
    else {
        pupil.style.top = ((mouseY/ 40) +  "px");
        pupil.style.width = 23 +"px";
        pupil.style.height = 23 +"px";
    }
        pupil.style.left = ((mouseX/50) +  "px");
        badura.style.top = ((mouseY/140) + 10 + "px");
        badura.style.left = ((mouseX/65)  + 10 + "px");
}

password.addEventListener("keydown", function () {
    closeEye.style.height = 52 + 'px';

})
password.addEventListener("onblur", function () {
    closeEye.style.height = 52 + 'px';

})
window.addEventListener("click", function () {
    closeEye.style.height = 52 + 'px';

    setTimeout(function () {
        closeEye.style.height = 0 + 'px';
    }, 200)
})
