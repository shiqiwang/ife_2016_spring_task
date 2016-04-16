var dataList = document.getElementById("dataList");
var dataIn = document.getElementById("dataIn");
var dataArray = [];

//and event listner to leftIn button
var leftIn = document.getElementById("leftIn");
leftIn.addEventListener("click", function () {
    if(dataListItemNum() >= 60) {
        alert("the upper limit is 60!");
        return;
    }
    dataLeftIn(getData());
})

//and event listner to rightIn button
var rightIn = document.getElementById("rightIn");
rightIn.addEventListener("click", function () {
    if(dataListItemNum() >= 60) {
        alert("the upper limit is 60!");
        return;
    }
    dataRightIn(getData());
})

// and event listner to leftOut button
var leftOut = document.getElementById("leftOut");
leftOut.addEventListener("click", function () {
    dataLeftOut();
})

// and event listner to rightOut button
var rightOut = document.getElementById("rightOut");
rightOut.addEventListener("click", function () {
    dataRightOut();
})

// and event listner to sortData button
var sortData = document.getElementById("sortData");
var sortedDataList = document.getElementById("sortedDataList");
sortData.addEventListener("click", function () {
    sortedDataListItem();
});

var dataPattern = /^[0-9]+$/;

// get data form input element
function getData() {
    var data = Number(dataIn.value);
    if(!dataPattern.test(data)) {
        throw new Error("not a number!");
    }
    if(data < 10 || data > 100) {
        throw new Error("the number should between 10 and 100!");
    }
    return data;
}
// create sorted dataListItem
function sortedDataListItem() {
    clearChildren();
    var dataArrayCopy = dataArray.slice();
    dataArrayCopy.sort(function (value1, value12) {
        return value1-value12;
    }).forEach(function (item) {
        sortedDataList.appendChild(createDataListItem(item));
    });
}

function clearChildren() {
    var nodes = sortedDataList.childNodes;
    while (nodes.length) {
        sortedDataList.removeChild(nodes[0]);
    }
}

//create new dataListItem
function createDataListItem(data) {
    var span = document.createElement("span");
    span.className = "dataListItem";
    span.title = data;
    span.style.height = data + "px";
    return span;
}

//insert dataListItem left
function dataLeftIn(data) {
    dataList.insertBefore(createDataListItem(data), dataList.firstChild);
    dataArray.unshift(data);
}

//insert dataListItem right
function dataRightIn(data) {
    dataList.appendChild(createDataListItem(data));
    dataArray.push(data);
}

//remove dataListItem from left
function dataLeftOut() {
    dataList.removeChild(dataList.firstElementChild);
    dataArray.shift();
}

//remove dataListItem from right
function dataRightOut() {
    dataList.removeChild(dataList.lastElementChild);
    dataArray.pop();
}

// return span's amount
function dataListItemNum() {
    return document.getElementsByClassName("dataListItem").length;
}