var checkName = document.getElementById("checkName");
var displayMessage = document.getElementById("message");
var nameIn = document.getElementById("nameIn");
checkName.addEventListener("click", function () {
    var checkedMes = checkData("nameIn");
    nameIn.style.borderColor = checkedMes.colorIndex;
    displayMessage.innerHTML = checkedMes.message;
    displayMessage.style.color = checkedMes.colorIndex;
})

function getData(dataInId) {
    var dataIn = document.getElementById(dataInId);
    return dataIn.value;
}

function checkData(dataBoxId) {
    var data = getData(dataBoxId);
    var len = getDataLen(data);
    if(data == "") {
        return {
           message: "姓名不能为空",
           colorIndex: "red" 
        }
    }
    if(len > 16 || len < 4) {
        return {
            message: "长度为4~16个字符",
            colorIndex: "grey"
        }
    }
    return {
      message: "名称格式正确",
      colorIndex: "green"  
    };
}

function getDataLen(data) {
    var dataLen = data.length;
    var pattern = /[\u4E00-\u9FA5\uFF00-\uFFEF。]/;
    var len = dataLen;
    for(var i = 0; i < dataLen; i++) {
        if(pattern.test(data[i])) {
            len++;
        }
    }
    return len;
}

