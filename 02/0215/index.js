var listParent = document.getElementById("resort");
var sortBtn = document.getElementById("sort-btn");
sortBtn.addEventListener("click", sorted);

function getAqiData() {
    var dataStr = document.getElementById("source").innerText.replace(/\r?\n/g, '：');
    var dataArray = dataStr.split("：");
    var dataArrLen = dataArray.length;
    var aqiData = [];
    for(var i = 0; i < dataArrLen; i += 2) {
        aqiData.push(dataArray.slice(i, i + 2));
    }
    return aqiData;
}

function sorted() {
    var fragement = document.createDocumentFragment();
    var aqiData = getAqiData();
    var sorted = aqiData.filter(function (item) {
        return item[1] >= 60;
    }).sort(function (itemA, itemB) {
        return itemB[1]-itemA[1];
    }).forEach(function (item, index) {
        var li = document.createElement("li");
        li.innerHTML =  item[0] + "：" + item[1];
        fragement.appendChild(li);
    });
    listParent.appendChild(fragement);
}

