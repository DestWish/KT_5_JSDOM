document.addEventListener("DOMContentLoaded", function () {
    const cardForm = document.createElement("form");
    cardForm.style.backgroundColor = "#f9f9f9";
    cardForm.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.1)";
    cardForm.style.float = "left";
    cardForm.id = "cardForm";
    cardForm.style.display = "flex";
    cardForm.style.flexDirection = "column";
    cardForm.style.width = "300px";
    cardForm.style.margin = "20px auto";
    cardForm.style.padding = "20px";
    cardForm.style.border = "1px solid #ccc";
    cardForm.style.borderRadius = "5px";


    const bankNameInput = document.createElement("input");
    bankNameInput.type = "text";
    bankNameInput.placeholder = "Сбербанк";
    cardForm.appendChild(bankNameInput);

    const cardTypesSelect = document.createElement("select");
    const cardTypes = ["Visa", "MasterCard", "Мир"];
    cardTypes.forEach((type) => {
        const option = document.createElement("option");
        option.value = type;
        option.textContent = type;
        cardTypesSelect.appendChild(option);
    });
    cardForm.appendChild(cardTypesSelect);

    const cardNumberInput = document.createElement("input");
    cardNumberInput.type = "text";
    cardNumberInput.placeholder = "1234 5678 9012 3456";
    cardForm.appendChild(cardNumberInput);

    const cardHolderInput = document.createElement("input");
    cardHolderInput.type = "text";
    cardHolderInput.placeholder = "Иванов Иван Иванович";
    cardForm.appendChild(cardHolderInput);

    const cardExpiryInput = document.createElement("input");
    cardExpiryInput.type = "text";
    cardExpiryInput.placeholder = "MM/YY";
    cardForm.appendChild(cardExpiryInput);

    const cardCVCInput = document.createElement("input");
    cardCVCInput.type = "text";
    cardCVCInput.placeholder = "123";
    cardForm.appendChild(cardCVCInput);

    const submitButton = document.createElement("button");
    submitButton.type = "submit";
    submitButton.textContent = "сохранить";
    cardForm.appendChild(submitButton);

    document.body.appendChild(cardForm);


    const miniCard = document.createElement("div");
    miniCard.style.backgroundColor = "rgba(255, 132, 0, 0.1)";
    miniCard.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.1)";
    miniCard.style.float = "left";
    miniCard.style.width = "300px";
    miniCard.style.margin = "20px auto";
    miniCard.style.padding = "20px";
    miniCard.style.border = "1px solid #ccc";
    miniCard.style.borderRadius = "5px";
    miniCard.style.display = "flex";
    miniCard.style.flexDirection = "column";

    const mcBankName = document.createElement("div");
    mcBankName.id = "mcBankName";
    mcBankName.textContent = "Банк";
    miniCard.appendChild(mcBankName);

    const mcCardType = document.createElement("div");
    mcCardType.id = "mcCardType";
    mcCardType.textContent = "Тип карты";
    miniCard.appendChild(mcCardType);

    const mcCardNumber = document.createElement("div");
    mcCardNumber.id = "mcCardNumber";
    mcCardNumber.textContent = "**** **** **** ****";
    miniCard.appendChild(mcCardNumber);

    const mcCardHolder = document.createElement("div");
    mcCardHolder.id = "mcCardHolder";
    mcCardHolder.textContent = "Иванорв Иван Иванович";
    miniCard.appendChild(mcCardHolder);

    const mcCardExpiry = document.createElement("div");
    mcCardExpiry.id = "mcCardExpiry";
    mcCardExpiry.textContent = "**/**";
    miniCard.appendChild(mcCardExpiry);

    const mcCardCVC = document.createElement("div");
    mcCardCVC.id = "mcCardCVC";
    mcCardCVC.textContent = "***";
    miniCard.appendChild(mcCardCVC);

    document.body.appendChild(miniCard);



    bankNameInput.addEventListener("input", function () {
        mcBankName.textContent = bankNameInput.value.length > 0 ? bankNameInput.value : "Банк";
    });
    cardTypesSelect.addEventListener("change", function () {
        mcCardType.textContent = cardTypesSelect.value;
    });
    cardNumberInput.addEventListener("input", function () {
        const value = cardNumberInput.value.replace(/\s/g, "").replace(/(\d{4})(?=\d)/g, "$1 ");
        mcCardNumber.textContent = value.length > 0 ? value : "**** **** **** ****";
    });
    cardHolderInput.addEventListener("input", function () {
        mcCardHolder.textContent = cardHolderInput.value.length > 0 ? cardHolderInput.value : "Иванов Иван Иванович";
    });
    cardExpiryInput.addEventListener("input", function () {
        const value = cardExpiryInput.value.replace(/\D/g, "").replace(/(\d{2})(\d)/, "$1/$2");
        mcCardExpiry.textContent = value.length > 0 ? value : "**/**";
    });
    cardCVCInput.addEventListener("input", function () {
        const value = cardCVCInput.value.replace(/\D/g, "");
        mcCardCVC.textContent = value.length > 0 ? value : "***";
    });





    const table = document.createElement("table");
    const headerRow = document.createElement("tr");
    const headers = ["Банк", "Тип карты", "Номер карты", "Владелец карты", "Срок действия", "CVC"];
    headers.forEach((header) => {
        const th = document.createElement("th");
        th.textContent = header;
        headerRow.appendChild(th);
    });
    table.appendChild(headerRow);
    document.body.appendChild(table);

    cardForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const bankName = bankNameInput.value;
        const cardType = cardTypesSelect.value;
        const cardNumber = cardNumberInput.value.replace(/\s/g, "");
        const cardHolder = cardHolderInput.value;
        const cardExpiry = cardExpiryInput.value;
        const cardCVC = cardCVCInput.value;


        const row = document.createElement("tr");
        const data = [bankName, cardType, cardNumber, cardHolder, cardExpiry, cardCVC];
        data.forEach((item) => {
            const td = document.createElement("td");
            td.textContent = item;
            row.appendChild(td);
        });
        table.appendChild(row);

        bankNameInput.value = "";
        cardTypesSelect.value = cardTypes[0];
        cardNumberInput.value = "";
        cardHolderInput.value = "";
        cardExpiryInput.value = "";
        cardCVCInput.value = "";

    });
});


