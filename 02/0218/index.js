var dataList = document.getElementById("dataList");
var dataIn = document.getElementById("dataIn");
var leftIn = document.getElementById("leftIn");
leftIn.addEventListener("click", function () {
    dataLeftIn(getData());
});
var rightIn = document.getElementById("rightIn");
rightIn.addEventListener("click", function () {
    dataRightIn(getData());
});
var leftOut = document.getElementById("leftOut");
leftOut.addEventListener("click", function () {
    alert(dataLeftOut());
});
var rightOut = document.getElementById("rightOut");
rightOut.addEventListener("click", function () {
    alert(dataRightOut());
});
var dataPattern = /^[0-9]+$/;

function getData() {
    var data = dataIn.value;
    if(!dataPattern.test(data)) {
        throw new Error("输入数字");
    }
    return data;
}

function createDataListItem(data) {
    var span = document.createElement("span");
    span.innerHTML = data;
    span.className = "dataListItem";
    span.setAttribute("data-number", data);
    span.addEventListener("click", function (event) {
       removeDataListItem(event.target); 
    });
    return span;
}

function removeDataListItem(target) {
    var data = target.getAttribute("data-number", data);
    dataList.removeChild(target);
    return data;
}

function dataLeftIn(data) {
    dataList.insertBefore(createDataListItem(data), dataList.firstChild);
}

function dataRightIn(data) {
    dataList.appendChild(createDataListItem(data));
}

function dataLeftOut() {
    var removed = dataList.removeChild(dataList.firstElementChild);
    return removed.getAttribute("data-number"); 
}

function dataRightOut() {
    var removed = dataList.removeChild(dataList.lastElementChild);
    return removed.getAttribute("data-number");
}