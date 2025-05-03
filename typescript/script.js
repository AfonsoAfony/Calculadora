var textBox = document.querySelector("input");
var p = document.querySelector("p");
var sinalOp = document.querySelector("#sinal");
function interNummber(val) {
    textBox.value += val;
}
function operacao(acao) {
    var result = 0;
    if (acao == "soma") {
        if (p.innerText != "") {
            if (textBox.value == "") {
                textBox.value = "0";
            }
            igual();
            p.innerText = textBox.value.toString();
            sinalOp.innerText = "+";
            textBox.value = "";
        }
        else {
            igual();
            result = parseFloat(textBox.value);
            p.innerText = result.toString();
            textBox.value = "";
            sinalOp.innerText = "+";
        }
    }
    if (acao == "sub") {
        if (p.innerText != "") {
            if (textBox.value == "") {
                textBox.value = "0";
            }
            igual();
            p.innerText = textBox.value.toString();
            sinalOp.innerText = "-";
            textBox.value = "";
        }
        else {
            igual();
            result = parseFloat(textBox.value);
            p.innerText = result.toString();
            sinalOp.innerText = "-";
            textBox.value = "";
        }
    }
    if (acao == "mult") {
        if (p.innerText != "") {
            if (textBox.value == "") {
                textBox.value = "1";
            }
            igual();
            p.innerText = textBox.value.toString();
            sinalOp.innerText = "*";
            textBox.value = "";
        }
        else {
            igual();
            result = parseFloat(textBox.value);
            p.innerText = result.toString();
            textBox.value = "";
            sinalOp.innerText = "*";
        }
    }
    if (acao == "div") {
        if (p.innerText != "") {
            if (textBox.value == "") {
                textBox.value = "1";
            }
            igual();
            p.innerText = textBox.value.toString();
            sinalOp.innerText = "/";
            textBox.value = "";
        }
        else {
            igual();
            result = parseFloat(textBox.value);
            p.innerText = result.toString();
            textBox.value = "";
            sinalOp.innerText = "/";
        }
    }
    if (acao == "del") {
        if (textBox.value != "") {
            textBox.value = textBox.value.slice(0, -1);
        }
    }
    if (acao == "CE") {
        if (textBox.value != "") {
            textBox.value = "0";
        }
    }
    if (acao == "C") {
        textBox.value = "0";
        p.innerText = "";
        sinalOp.innerText = "";
    }
    if (acao == "MoM") {
        if (textBox.value != "") {
            textBox.value = (parseFloat(textBox.value) * -1).toString();
        }
    }
}
function igual() {
    var resultado = 0;
    if (sinalOp.innerText == '+') {
        resultado = parseFloat(p.innerText) + parseFloat(textBox.value);
        textBox.value = resultado.toString();
        sinalOp.innerText = "";
        p.innerText = "";
    }
    else if (sinalOp.innerText == '-') {
        resultado = parseFloat(p.innerText) - parseFloat(textBox.value);
        textBox.value = resultado.toString();
        sinalOp.innerText = "";
        p.innerText = "";
    }
    else if (sinalOp.innerText == '*') {
        resultado = parseFloat(p.innerText) * parseFloat(textBox.value);
        textBox.value = resultado.toString();
        sinalOp.innerText = "";
        p.innerText = "";
    }
    else if (sinalOp.innerText == '/') {
        resultado = parseFloat(p.innerText) / parseFloat(textBox.value);
        textBox.value = resultado.toString();
        sinalOp.innerText = "";
        p.innerText = "";
    }
}
