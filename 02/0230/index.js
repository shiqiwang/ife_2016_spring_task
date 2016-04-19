var typeahead = {
    nameTypeahead: "必填，长度为4~16个字符",
    passwordTypeahead: "必填，必须包含英文和数字，不少于6个字符",
    passwordCheckTypeahead: "再次输入以上密码",
    mailTypeahead: "输入有效的邮箱",
    phoneNumberTypeahead: "输入有效的电话号码"
};

var checkedDescrible = {
    adopted: "验证通过",
    nameChecked: "字符长度不正确",
    passwordChecked: "不推荐使用",
    passwordCheckedAgain: "再次输入",
    mailChecked: "邮箱格式不正确",
    phoneNumberChecked: "包含无效字符"
};

var displayColor = {
    typeaheadColor: "grey",
    adoptedColor: "green",
    errorColor: "red"
};

var formInputs = document.getElementsByTagName("input");
for(var i = 0; i < formInputs.length; i++) {      
    formInputs[i].addEventListener("focus", function (event) {
        displayTypeahead(event.target);
    });
    formInputs[i].addEventListener("blur", function (event) {
        displayCheckedDescrible(event.target);
    });
}

function displayCheckedDescrible(target) {
    var targetId = target.id;
    var data = target.value;
    var displaybar = target.nextSibling;
    if(displaybar.nodeType == 3) {
        displaybar = displaybar.nextSibling;
    }

    switch(targetId) {
        case "nameIn":
            if(!checkName(data)) {
                displaybar.innerHTML = checkedDescrible.nameChecked;
                displaybar.style.color = displayColor.errorColor;
                return false;
            } else {
                checkRight(displaybar);
                return true;
            }
        case "passwordIn":
            if(!checkPassword(data)) {
                displaybar.innerHTML = checkedDescrible.passwordChecked;
                displaybar.style.color = displayColor.errorColor;
                return false;
            } else {
                checkRight(displaybar);
                return true;
            }
        case "passwordCheckIn":
            var data1 = document.getElementById("passwordIn").value;
            if(!checkPasswordAgain(data, data1)) {
                displaybar.innerHTML = checkedDescrible.passwordCheckedAgain;
                displaybar.style.color = displayColor.errorColor;
                return false;
            } else {
                checkRight(displaybar);
                return true;
            }
        case "mailIn":
            if(!checkMail(data)) {
                displaybar.innerHTML = checkedDescrible.mailChecked;
                displaybar.style.color = displayColor.errorColor;
                return false;
            } else {
                checkRight(displaybar);
                return true;
            }
        case "phoneNumberIn":
            if(!checkPhoneNumber(data)) {
                displaybar.innerHTML = checkedDescrible.phoneNumberChecked;
                displaybar.style.color = displayColor.errorColor;
                return false;
            } else {
                checkRight(displaybar);
                return true;
            }
    }
}

function checkRight(bar) {
    bar.innerHTML = checkedDescrible.adopted;
    bar.style.color = displayColor.adoptedColor;
}

function displayTypeahead(target) {
    var targetId = target.id;
    var displaybar = target.nextSibling;
    if(displaybar.nodeType == 3) {
        displaybar = displaybar.nextSibling;
    }
    switch(targetId) {
        case "nameIn":
            displaybar.innerHTML = typeahead.nameTypeahead;
            break;
        case "passwordIn":
            displaybar.innerHTML = typeahead.passwordTypeahead;
            break;
        case "passwordCheckIn":
            displaybar.innerHTML = typeahead.passwordCheckTypeahead;
            break;
        case "mailIn":
            displaybar.innerHTML = typeahead.mailTypeahead;
            break;
        case "phoneNumberIn":
            displaybar.innerHTML = typeahead.phoneNumberTypeahead;
            break;
    };
    displaybar.style.color = displayColor.typeaheadColor;
}

function checkName(data) {
    var dataLen = data.length;
    var pattern = /[\u4E00-\u9FA5\uFF00-\uFFEF。]/;
    var len = dataLen;
    for(var i = 0; i < dataLen; i++) {
        if(pattern.test(data[i])) {
            len++;
        }
    }
    if(3 < len && len < 17) {
        return true;
    }
    return false;
}

function checkPassword(data) {
    var dataLen = data.length;
    var pattern = /[0-9a-zA-Z]/;
    if(dataLen < 6 || !pattern.test(data)) {
        return false;
    }
    return true;
}

function checkPasswordAgain(data1, data2) {
    if(data1 == data2 && data2 != "") {
        return true;
    }
    return false;
}

function checkMail(data) {
    var pattern = /^[\.a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
    if(pattern.test(data)) {
        return true;
    }
    return false;
}

function checkPhoneNumber(data) {
    var pattern = /^[0-9]{11}$/;
    if(pattern.test(data)) {
        return true;
    }
    return false;
}

var infoForm = document.getElementById('infoForm');

infoForm.addEventListener('submit', function (event) {
    for (var i = 0; i < formInputs.length; i++) {
        var input = formInputs[i];
        if (!displayCheckedDescrible(input)) {
            event.preventDefault();
            alert("出错啦~");
            return;
        }
    }
    
    alert('提交成功~');
});
