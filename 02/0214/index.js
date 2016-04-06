var aqiData = [
    ["成都", 90],
    ["重庆", 80],
    ["北京", 90],
    ["上海", 50],
    ["福州", 10],
    ["广州", 50],
    ["西安", 100]
];

var listParent = document.getElementById("aqi-list");

(function () {
    var fragement = document.createDocumentFragment();
    var sorted = aqiData.filter(function (item) {
        return item[1] >= 60;
    }).sort(function (itemA, itemB) {
        return itemB[1]-itemA[1];
    }).forEach(function (item, index) {
        var li = document.createElement("li");
        li.innerHTML = "第" + (index + 1) + "名：" + item[0] + "，" + item[1];
        fragement.appendChild(li);
    });
    listParent.appendChild(fragement);
})();

