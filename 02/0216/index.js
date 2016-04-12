var addBtn = document.getElementById("add-btn");
addBtn.addEventListener("click", function () {
    try {
        var info = getInfo();
        createNewRow(info.city, info.air);
    } catch (error) {
        alert(error.message);
    }
});

function createNewRow(city, airQuality) {
    var aqiTable = document.getElementById("aqi-table");
    var tBody = document.getElementById("aqi-table-tbody");
    var tr = tBody.getElementsByTagName("tr");
    var trLen = tr.length;
    if(trLen == 0) {
        var headRow = tBody.insertRow(0);
        var cityCell = headRow.insertCell(0);
        var airCell = headRow.insertCell(1);
        var operateCell = headRow.insertCell(2);
        cityCell.appendChild(document.createTextNode("城市"));
        airCell.appendChild(document.createTextNode("空气质量"));
        operateCell.appendChild(document.createTextNode("操作"));
    }
    var bodyRow = tBody.insertRow(-1);
    var cityItem = bodyRow.insertCell(0);
    var airItem = bodyRow.insertCell(1);
    var removeCell = bodyRow.insertCell(2);
    cityItem.appendChild(document.createTextNode(city));
    airItem.appendChild(document.createTextNode(airQuality));
    removeCell.appendChild(document.createTextNode("删除"));
    removeCell.setAttribute("class", "removeTr");
    removeCell.addEventListener("click", function (event) {
        removeData(event.target);
    });
}

function removeData(target) {
    var parentTr = target.parentNode;
    var parentTbody = parentTr.parentNode;
    parentTbody.removeChild(parentTr);
}

function getInfo() {
    var cityPattern = /^[a-z\u4e00-\u9fa5]+$/g;
    var airPattern = /^[0-9]+$/g;

    var cityName = document.getElementById("aqi-city-input").value.trim();
    var airQuality = document.getElementById("aqi-value-input").value.trim();
    
    if(!cityName || !airQuality) {
        throw new Error("录入信息不全！");
    }
    
    if(!cityPattern.test(cityName) || !airPattern.test(airQuality)) {
        throw new Error("录入信息有误！");
    }
    
    return {
        city: cityName,
        air: Number(airQuality)    
    };
}



