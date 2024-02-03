var res = document.getElementById("res");
var inputName = document.getElementById("inputName");
var inputNumber = document.getElementById("inputNumber");
var inputDebt = document.getElementById("inputDebt");
var body = document.querySelector("body");
var users = [
    {
        name: "Behruz",
        phoneNumber: "+998974818006",
        debt: 20000,
        history: [
            {
                title: "Berildi",
                debt: 20000,
                time: "02.02.2024",
            }
        ],
    }
];

function openAddMenu() {
    body.classList.toggle("active");
    closeHistory();
}


function check() {
    if (inputName.value.trim() != "" && inputNumber.value.trim() != "" && inputDebt.value.trim() != "") {
        add();
    } else {
        alert("Malumotlar to'liq emas");
    }
}

function add() {
    users.push({
        name: inputName.value,
        phoneNumber: inputNumber.value,
        debt: +inputDebt.value,
        history: [],
    })
    inputName.value = "";
    inputNumber.value = "";
    inputDebt.value = "";

    showUsers(users);
}

function showUsers(arr) {
    res.innerHTML = "";
    arr.forEach((element, i) => {
        var { name, phoneNumber, debt } = element;
        res.innerHTML += `
        <tr>
            <td>${i+1}</td>
            <td>${name}</td>
            <td>${phoneNumber}</td>
            <td>${debt.toLocaleString("ru")}</td>
            <td>
                <button onclick="showAddDebtMenu(${i})">+</button>
                <button onclick="showRemoveDebtMenu(${i})">-</button>
            </td>
            <td><i class='bx bx-history' onclick="showHistory(${i})"></i></td>
        </tr>
        `
    });
}
showUsers(users)

function showAddDebtMenu(id) {
    document.getElementById("showAddDebtMenu").style.display = "block";
    document.getElementById("showAddDebtMenu").innerHTML = `
        <p>Olinayotgan so'mmani kiriting</p>
        <input type="number" id="addDebt">
        <button onclick="addDebt(${id})">Ok</button>
        <button onclick="closeAddDebtMenu()">Back</button>
    `;
}

function closeAddDebtMenu() {
    document.getElementById("showAddDebtMenu").style.display = "none";
}

function addDebt(id) {
    var inputAddDebt = document.getElementById("addDebt");
    if (inputAddDebt.value.trim() != "") {
        users[id].debt += +inputAddDebt.value;

        users[id].history.push({
            title: "Olindi",
            debt: +inputAddDebt.value,
            time: new Date().toLocaleString('ru')
        })
        showUsers(users);
        closeAddDebtMenu();
        showHistory(id)
    }
}

function showRemoveDebtMenu(id) {
    document.getElementById("showRemoveDebtMenu").style.display = "block";
    document.getElementById("showRemoveDebtMenu").innerHTML =`
        <p>To'langan so'mmani kiriting</p>
        <input type="number" id="removeDebt">
        <button onclick="removeDebt(${id})">Ok</button>
        <button onclick="closeRemoveDebtMenu()">Back</button>
    `
}

function closeRemoveDebtMenu() {
    document.getElementById("showRemoveDebtMenu").style.display = "none";
}

function removeDebt(id) {
    var inputRemoveDebt = document.getElementById("removeDebt");
    if (inputRemoveDebt.value.trim() != "") {
        users[id].debt -= +inputRemoveDebt.value;

        users[id].history.push({
            title: "Berildi",
            debt: +inputRemoveDebt.value,
            time: new Date().toLocaleString('ru')
        })
        showUsers(users);
        closeRemoveDebtMenu();
        showHistory(id)
    }
}

function showHistory(id) {
    openAddMenu()
    document.getElementById("history").style.display = "block";
    document.getElementById("showHistory").innerHTML = ""
    users[id].history.forEach(element => {
        var {title,debt,time} = element
        document.getElementById("showHistory").innerHTML += `
        <ul>
            <li>${title}</li>
            <li>${debt.toLocaleString("ru")}</li>
            <li>${time}</li>
        </ul>
        <hr>
        `
    })
}

function closeHistory() {
    document.getElementById("history").style.display = "none";
}