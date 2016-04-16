var dataList = document.getElementById("dataList");
var dataIn = document.getElementById("dataIn");
var searchDataIn = document.getElementById("search");
var searchBtn = document.getElementById("searchBtn");
searchBtn.addEventListener("click", function () {
    colorReset();
    searchAndMatch();
});
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
var dataPattern = /[0-9a-zA-Z\u4e00-\u9fa5]+/g;

function getData() {
    var data = (dataIn.value).match(dataPattern);
    if(data == null) {
        throw new Error("some thing wrong");
    }
    return data;
}

function colorReset() {
    var dataListItem = document.getElementsByClassName("dataListItem");
    var len = dataListItem.length;
    for(i = 0; i < len; i++) {
        dataListItem[i].style.color = "#000";
    }
}

function searchAndMatch() {
    var searchInfo = searchDataIn.value;
    var dataListItem = dataList.childNodes;
    var len = dataListItem.length;
    for(var i = 0; i < len; i++) {
        var data = dataListItem[i].getAttribute("data-number");
        if(data && searchInfo.indexOf(data) != -1) {
            dataListItem[i].style.color = "#fff";
        }
    }
}

function createDataListItem(data) {
    var fragment = document.createDocumentFragment();
    var len = data.length;
    for(var i = 0; i < len; i++) {  
        var span = document.createElement("span");
        span.innerHTML = data[i];
        span.className = "dataListItem";
        span.setAttribute("data-number", data[i]);
        span.addEventListener("click", function (event) {
        removeDataListItem(event.target); 
        });
        fragment.appendChild(span);
    }
    return fragment;
}

function removeDataListItem(target) {
    var data = target.getAttribute("data-number");
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

