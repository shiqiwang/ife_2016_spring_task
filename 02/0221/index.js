var tagDataList = document.getElementById("tagDataList");
var hobbyDataList = document.getElementById("hobbyDataList");
var tagDataIn = document.getElementById("tagDataIn");
var hobbyDataIn = document.getElementById("hobbyDataIn");
var confirmTagBtn = document.getElementById("confirmTagBtn");
confirmTagBtn.addEventListener("click", function () {
    tagDataList.appendChild(createDataListItem(getData(tagDataIn)));
});
var confirmHobbyBtn = document.getElementById("confirmHobbyBtn");
confirmHobbyBtn.addEventListener("click", function () {
    hobbyDataList.appendChild(createDataListItem(getData(hobbyDataIn)));
});
var dataPattern = /[0-9a-zA-Z\u4e00-\u9fa5]+/g;

function getData(dataIn) {
    var data = (dataIn.value).trim();
    if(dataIn.id == "hobbyDataIn") {
       var hobbyData = data.match(dataPattern);
       return hobbyData;
    }
    return data;
}

function createDataListItem(data) {
    if(data instanceof Array) {
        var fragment = document.createDocumentFragment();
        var hobbyDataArray = getListItemDataArray(hobbyDataList);
        var arrLen = hobbyDataArray.length;
        var len = data.length;
        for(var i = 0; i < len; i++) { 
            fragment.appendChild(createSpan(data[i]));
        }
        return fragment;
    }
    if(typeof(data) == "string") {
        if(getDataListItemLen(tagDataList) == 10) {
            tagDataList.removeChild(tagDataList.firstElementChild);
        }
        return createSpan(data);
    }
}

function  createSpan(data) {
    var span = document.createElement("span");
    span.innerHTML = data;
    span.className = "dataListItem";
    span.setAttribute("data-number", data);
    span.addEventListener("click", function (event) {
    removeDataListItem(event.target); 
    });
    span.addEventListener("mouseover", function (event) {
        appearText(event.target);
    }) 
    span.addEventListener("mouseout", function (event) {
        hiddenText(event.target);
    })
    return span;
}

function removeDataListItem(target) {
    var data = target.getAttribute("data-number");
    if(target.parentNode.id == "tagDataList") {
        tagDataList.removeChild(target);
        return data;
    }
    if(target.parentNode.id == "hobbyDataList") {
        hobbyDataList.removeChild(target);
        return data;
    }
}

function appearText(target) {
    var data = target.getAttribute("data-number");
    target.innerHTML = "删除 " + data;
}

function hiddenText(target) {
    var data = target.getAttribute("data-number");
    target.innerHTML = data;
}

function getDataListItemLen(list) {
    return list.getElementsByClassName("dataListItem").length;
}

function getListItemDataArray(list) {
    var item = list.getElementsByClassName("dataListItem");
    var len = item.length;
    var dataArray = [];
    for(var i = 0; i < len; i++) {
        var data = item[i].getAttribute("data-number");
        dataArray.push(data);
    }
    return dataArray; 
}