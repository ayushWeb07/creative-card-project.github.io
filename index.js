const formName= document.querySelector("#formName");
const formCardNumber= document.querySelector("#formCardNumber");
const formMonth= document.querySelector("#formMonth");
const formYear= document.querySelector("#formYear");
const formCvc= document.querySelector("#formCvc");
const form= document.querySelector("#form");
const confirm_message= document.querySelector(".confirm_message");


// Function for Cardholder name
formName.addEventListener("change", function updateName(event){
    updatedName= event.target.value;
    document.querySelector("#name").textContent= updatedName;
    document.querySelector("#nameMobile").textContent= updatedName;
})

// Function for Card Number
formCardNumber.addEventListener("change", function updateCardNumber(event){
    updatedCardNumber= event.target.value;
    document.querySelector("#card_number").textContent= updatedCardNumber;
    document.querySelector("#card_numberMobile").textContent= updatedCardNumber;
})


//Function for month
formMonth.addEventListener("change", function updateMonth(event){
    updatedMonth= event.target.value;
    document.querySelector("#date_month").textContent= updatedMonth;
    document.querySelector("#date_monthMobile").textContent= updatedMonth;
})


//Function for year
formYear.addEventListener("change", function updateYear(event){
    updatedYear= event.target.value;
    document.querySelector("#date_year").textContent= updatedYear;
    document.querySelector("#date_yearMobile").textContent= updatedYear;
})


//Function for cvc
formCvc.addEventListener("change", function updateCvc(event){
    updatedCvc= event.target.value;
    document.querySelector("#cvc").textContent= updatedCvc;
    document.querySelector("#cvcMobile").textContent= updatedCvc;
})


//Function for the submition of the form
form.addEventListener("submit", (e) => {
    e.preventDefault();
    form.style.display= "none";
    confirm_message.style.display= "block";
})