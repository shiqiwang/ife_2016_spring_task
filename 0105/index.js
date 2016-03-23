window.onload = setFootPos;
function setFootPos() {
    var mainBody = document.querySelectorAll(".mainBody")[0];
    var mainBodyHeight = mainBody.clientHeight;
    var footBar = document.querySelectorAll(".footBar")[0];
    var footBarTop = mainBodyHeight + 100;
    console.log(footBarTop);
    footBar.style.top = footBarTop + "px";
}  