var res = document.getElementById("res");
var inputName = document.getElementById("inputName");
var inputNumber = document.getElementById("inputNumber");
var inputDebt = document.getElementById("inputDebt");

function openAddMenu() {
    document.getElementById("addUserMenu").style.display = "block";
    document.getElementById("addUserMenu").style.top = "60px";
}

function closeAddMenu() {
    document.getElementById("addUserMenu").style.display = "none";
    document.getElementById("addUserMenu").style.top = "-90vh";
}