fetch("http://api.nbp.pl/api/exchangerates/tables/c/")
.then(data => data.json())
.then(data => {
    console.log(data)
})
.catch(err => console.log(err));

