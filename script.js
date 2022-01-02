function compute() {
    
    capital = document.getElementById("capital").value;
    rate = document.getElementById("rate").value;
    years = document.getElementById("years").value;

    if (capital == "") {
        alert("Please fill the amount field with a number")
        // destaca o elemento para o usuário
        document.getElementById("capital").focus();
        return false;
    }
    else if (years == "") {
        alert("Please fill the years field with a number")
        document.getElementById("years").focus();
        return false;
    }
    else {
        currentYear = parseInt(new Date().getFullYear());

        // converter string para int
        years = parseInt(years);
        rate = parseFloat(rate);
        capital = parseFloat(capital);

        amount = years * (rate / 100) * capital;

        // float ficara sempre com duas casas decimais
        amount = amount.toFixed(2);


        years = currentYear + years;


        //criando uma nova div a partir da funcao
        var NewDiv = document.createElement("div");
        // inserindo código html na nova div
        NewDiv.innerHTML = "<p>If you deposit: " + capital + "</br>"
            + "at an Interest rate of " + rate + "%</br>"
            + "You will receive an amount of " + amount + "</br>"
            + "in the year " + years + "</p>";

        // criando vasriavel container para dizer onde quero que as divs sejam incluidas no html
        const DivContainer = document.getElementById("DivContainer")
        // adicionando essa div no body do documento
        // document.body.appendChild(NewDiv);
        // adicionando a div apos o divcontainer
        DivContainer.appendChild(NewDiv)
    }
    
    
}

function RateShow() {
    rate_p.value = document.getElementById("rate").value;
}