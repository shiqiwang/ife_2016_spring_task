var swimLayerBtn = document.getElementById("swimLayerBtn");
swimLayerBtn.addEventListener("click", function (event) {
    event.stopPropagation();
    var body = document.body;
    body.appendChild(createTranslucentLayer());
    body.appendChild(createSwimLayer());
});

function createTranslucentLayer() {
    var div = document.createElement("div");
    div.id = "translucentLayer";
    div.style.height = "100%";
    div.style.width = "100%";
    div.style.backgroundColor = "rgba(0, 0, 0, 0.4)";
    div.style.position = "fixed";
    div.style.top = 0;
    div.style.left = 0;
    div.style.zIndex = 0;
    return div;
}

function createSwimLayer() {
    var div = document.createElement("div");
    div.id = "swimLayer";
    var divChild_1 = document.createElement("div");
    divChild_1.id = "swimLayerHead";
    divChild_1.innerHTML = "这是一个浮出层";
    var buttonChild_1 = document.createElement("button");
    buttonChild_1.id = "confirm";
    buttonChild_1.className = "btn";
    buttonChild_1.innerHTML = "确定";
    buttonChild_1.addEventListener("click", removeSwimLayer);
    var buttonChild_2 = document.createElement("button");
    buttonChild_2.id = "cancel";
    buttonChild_2.className = "btn";
    buttonChild_2.innerHTML = "取消";
    buttonChild_2.addEventListener("click", removeSwimLayer);
    div.appendChild(divChild_1);
    div.appendChild(buttonChild_1);
    div.appendChild(buttonChild_2);
    return div;
}

function removeSwimLayer() {
    var swimLayer = document.getElementById("swimLayer");
    var translucentLayer = document.getElementById("translucentLayer");
    var body = document.body;
    body.removeChild(swimLayer);
    body.removeChild(translucentLayer);
}

  

