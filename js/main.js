let score = 0
currency = " PLN";

fetch("http://api.nbp.pl/api/exchangerates/tables/c/")
.then(data => data.json())
.then(data => {
    currencies = data[0]
    console.log(currencies);
    const input = document.querySelector("input")
    const select = document.getElementById("select");
    const button = document.querySelector(".btn");
    const scoreTxt = document.querySelector(".score");
    
    button.addEventListener("click", (e) =>{
        if(input.value === 0 || input.value === null)
        {
            error.textContent = "Please put a proper value!";
        }
        else
        {
            if(select.value === "EUR")
            {
                score = currencies.rates[3].ask * input.value;
            }
            else if (select.value === "USD")
            {
                score = currencies.rates[0].ask * input.value;
            }
            else
            {
                score = currencies.rates[5].ask * input.value;
            }
            scoreTxt.innerHTML = score.toFixed(2) + currency;
        }
    });
})
.catch(err => console.log(err));

