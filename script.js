// Вывод списка циклом.

const vznData = [
    {
        number: "ВЗН №132313",
        sender: "Цех 01 / участок Цеха 01",
        recipient: "Цех 02 / участок Цеха 02",
        date: "15.06.2024"
    },
    {
        number: "ВЗН №7063041",
        sender: "Цех 01",
        recipient: "Цех 02",
        date: "15.06.2024"
    },
    {
        number: "ВЗН №7063041",
        sender: "Цех 01",
        recipient: "Цех 02",
        date: "15.06.2024"
    },
    {
        number: "ВЗН №7063041",
        sender: "Цех 01",
        recipient: "Цех 02",
        date: "15.06.2024"
    },
    {
        number: "ВЗН №7063041",
        sender: "Цех 01",
        recipient: "Цех 02",
        date: "15.06.2024"
    },
    {
        number: "ВЗН №7063041",
        sender: "Цех 01",
        recipient: "Цех 02",
        date: "15.06.2024"
    },
    {
        number: "ВЗН №7063041",
        sender: "Цех 01",
        recipient: "Цех 02",
        date: "15.06.2024"
    },
];

function generateList() {
    const listContainer = document.getElementById('vzn-list');
    
    for (let i = 0; i < vznData.length; i++) {
        const item = vznData[i];
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <p class="headline">${item.number}</p>
            <p class="text">
                Отправитель:<span> ${item.sender}</span><br>
                Получатель:<span> ${item.recipient}</span><br>
                Дата выдачи:<span> ${item.date}</span>
            </p>
        `;
        listContainer.appendChild(listItem);
    }
}

window.addEventListener('load', generateList);

// Форма.

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('myForm');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const numberInput = document.getElementById('numberInput').value;
        const senderInput = document.getElementById('senderInput').value;
        const receiverInput = document.getElementById('receiverInput').value;
        const dateInput = document.getElementById('dateInput').value;

        let valid = true;

        clearErrors();

        if (!isPositiveInteger(numberInput) || numberInput.length > 20) {
            showError('numberError', 'Номер ВЗН должен быть целым положительным числом до 20 знаков.');
            valid = false;
        }

        if (senderInput.length > 50) {
            showError('senderError', 'Отправитель не может быть длиннее 50 символов.');
            valid = false;
        }

        if (receiverInput.length > 50) {
            showError('receiverError', 'Получатель не может быть длиннее 50 символов.');
            valid = false;
        }

        if (!isValidDateRange(dateInput)) {
            showError('dateError', 'Дата принятия должна быть в формате "dd.mm.yyyy - dd.mm.yyyy".');
            valid = false;
        }

        if (valid) {
            alert('Форма успешно отправлена!');
        }
    });

    function isPositiveInteger(value) {
        const number = parseInt(value, 10);
        return !isNaN(number) && number > 0 && number.toString() === value;
    }

    function isValidDateRange(dateRange) {
        const parts = dateRange.split(' - ');
        if (parts.length !== 2) return false;

        const [startDate, endDate] = parts;
        return isValidDate(startDate) && isValidDate(endDate);
    }

    function isValidDate(date) {
        const parts = date.split('.');
        if (parts.length !== 3) return false;

        const [day, month, year] = parts.map(part => parseInt(part, 10));
        return !isNaN(day) && !isNaN(month) && !isNaN(year)
            && day > 0 && day <= 31
            && month > 0 && month <= 12
            && year >= 1900 && year <= 2100; 
    }

    function clearErrors() {
        document.querySelectorAll('.error').forEach(error => {
            error.textContent = '';
        });
    }

    function showError(id, message) {
        document.getElementById(id).textContent = message;
    }
});


// Popup Фильтр ВЗН
const openPopupButton = document.getElementById('openPopup');
const popup = document.getElementById('popup');
const wrap = document.getElementById('wrap')
const closePopupButton = document.getElementById('closePopup');
const btnCancel = document.getElementById('btn-cancel')


openPopupButton.addEventListener('click', () => {
    popup.style.display = 'block';
    wrap.style.display = 'none'; 
    console.log(1)
});

closePopupButton.addEventListener('click', () => {
    popup.style.display = 'none'; 
    wrap.style.display = 'block';
});

btnCancel.addEventListener('click', () => {
    popup.style.display = 'none'; 
    wrap.style.display = 'block';
});

// window.addEventListener('click', (event) => {
//     if (event.target === popup) {
//         popup.style.display = 'none'; 
//     }
// });



function mainMenu () {
    window.location.href = "/index.html"
}

function goBack () {
    history.go(-1)
}

function close () {
    document.getElementById('popup').style.display = 'none'; 
    document.getElementById('wrap').style.display = 'block';
}




