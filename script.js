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



    const cardTypes = {
        "Visa" : "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR_FrTaaaGEk9eULQpb355SxtAFizG5jleBqp_1q8j2dgMxqfHT",
        "MasterCard" : "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Mastercard_2019_logo.svg/2560px-Mastercard_2019_logo.svg.png",
        "Мир" : "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Mir-logo.SVG.svg/2560px-Mir-logo.SVG.svg.png"
    }
    const cardTypesSelect = document.createElement("div");

    const cardSelectedType = document.createElement("img");
    cardSelectedType.src = Object.values(cardTypes)[0];
    cardSelectedType.alt = Object.keys(cardTypes)[0];
    cardSelectedType.style.width = "30px";
    cardTypesSelect.appendChild(cardSelectedType);



    for ( const [name, path] of Object.entries(cardTypes) ) {
        const option = document.createElement("img");
        option.src = path;
        option.alt = name;
        option.style.width = "30px";
        option.addEventListener("click", function () {
            cardSelectedType.src = option.src;
            cardSelectedType.alt = option.alt;
            mcCardType.src = option.src;
            mcCardType.alt = option.alt;
        });
        option.style.cursor = "pointer";
        cardTypesSelect.appendChild(option);
    };

    cardForm.appendChild(cardTypesSelect);



    const cardNumberInput = document.createElement("input");
    cardNumberInput.type = "text";
    cardNumberInput.maxLength = 16;
    cardNumberInput.placeholder = "1234 5678 9012 3456";
    cardForm.appendChild(cardNumberInput);



    const cardHolderInput = document.createElement("input");
    cardHolderInput.type = "text";
    cardHolderInput.placeholder = "ivanov ivan ivanovich";
    cardForm.appendChild(cardHolderInput);



    const cardExpiryContainerInput = document.createElement("div");

    const cardExpiryMonthInput = document.createElement("input");
    cardExpiryMonthInput.type = "text";
    cardExpiryMonthInput.maxLength = 2;
    cardExpiryMonthInput.placeholder = "MM";
    cardExpiryMonthInput.style.width = "20px";
    cardExpiryContainerInput.appendChild(cardExpiryMonthInput);
    
    const slash = document.createElement("span");
    slash.textContent = "/";
    cardExpiryContainerInput.appendChild(slash);

    const cardExpiryYearInput = document.createElement("input");
    cardExpiryYearInput.type = "text";
    cardExpiryYearInput.maxLength = 2;
    cardExpiryYearInput.placeholder = "YY";
    cardExpiryYearInput.style.width = "20px";
    cardExpiryContainerInput.appendChild(cardExpiryYearInput);

    cardForm.appendChild(cardExpiryContainerInput);



    const cardCVCInput = document.createElement("input");
    cardCVCInput.type = "text";
    cardCVCInput.maxLength = 3;
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

    const mcCardType = document.createElement("img");
    mcCardType.id = "mcCardType";
    mcCardType.src = Object.values(cardTypes)[0];
    mcCardType.alt = Object.keys(cardTypes)[0];
    mcCardType.style.width = "30px";
    miniCard.appendChild(mcCardType);

    const mcCardNumber = document.createElement("div");
    mcCardNumber.id = "mcCardNumber";
    mcCardNumber.textContent = "**** **** **** ****";
    miniCard.appendChild(mcCardNumber);

    const mcCardHolder = document.createElement("div");
    mcCardHolder.id = "mcCardHolder";
    mcCardHolder.textContent = "ivanov ivan ivanovich";
    miniCard.appendChild(mcCardHolder);

    const mcCardExpiry = document.createElement("div");
    mcCardExpiry.id = "mcCardExpiry";
    const expiryMM = document.createElement("span");
    expiryMM.textContent = "**";
    mcCardExpiry.appendChild(expiryMM);
    const expirySlash = document.createElement("span");
    expirySlash.textContent = "/";
    mcCardExpiry.appendChild(expirySlash);
    const expiryYY = document.createElement("span");
    expiryYY.textContent = "**";
    mcCardExpiry.appendChild(expiryYY);
    miniCard.appendChild(mcCardExpiry);

    const mcCardCVC = document.createElement("div");
    mcCardCVC.id = "mcCardCVC";
    mcCardCVC.textContent = "***";
    miniCard.appendChild(mcCardCVC);

    document.body.appendChild(miniCard);




    bankNameInput.addEventListener("input", function () {
        mcBankName.textContent = bankNameInput.value.length > 0 ? bankNameInput.value : "Банк";
    });

            
        

    cardNumberInput.addEventListener("input", function () {

        if (!cardNumberInput.value.match(/^\d+$/)) {
            cardNumberInput.value = cardNumberInput.value.slice(0, -1);
        }
        
        const value = cardNumberInput.value.toString().replace(/\s/g, "").replace(/(\d{4})(?=\d)/g, "$1 ");
        mcCardNumber.textContent = value.length > 0 ? value : "**** **** **** ****";
    });


    cardHolderInput.addEventListener("input", function () {
        if (!cardHolderInput.value.match(/^[a-zA-Z\s]+$/)) {
            cardHolderInput.value = cardHolderInput.value.slice(0, -1);
        }
        mcCardHolder.textContent = cardHolderInput.value.length > 0 ? cardHolderInput.value : "Ivanov Ivan Ivanovich";
    });


cardExpiryMonthInput.addEventListener("input", function () {
    if (!cardExpiryMonthInput.value.match(/^\d+$/)) {
        cardExpiryMonthInput.value = cardExpiryMonthInput.value.slice(0, -1);
    }
    const value = cardExpiryMonthInput.value.replace(/\D/g, "");
    mcCardExpiry.children[0].textContent = value.length > 0 ? value : "**";
});
cardExpiryYearInput.addEventListener("input", function () {
    if (!cardExpiryYearInput.value.match(/^\d+$/)) {
        cardExpiryYearInput.value = cardExpiryYearInput.value.slice(0, -1);
    }
    const value = cardExpiryYearInput.value.replace(/\D/g, "");
    mcCardExpiry.children[2].textContent = value.length > 0 ? value : "**";
});


    cardCVCInput.addEventListener("input", function () {
        if (!cardCVCInput.value.match(/^\d+$/)) {
            cardCVCInput.value = cardCVCInput.value.slice(0, -1);
        }
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
        const cardType = cardSelectedType.alt;
        const cardNumber = cardNumberInput.value.replace(/\s/g, "");
        const cardHolder = cardHolderInput.value;
        const cardExpiry = cardExpiryMonthInput.value + "/" + cardExpiryYearInput.value;
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
        cardExpiryMonthInput.value = "";
        cardExpiryYearInput.value = "";
        cardCVCInput.value = "";

    });
});


