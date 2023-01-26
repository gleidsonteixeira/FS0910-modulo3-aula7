let meses = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro"
];

//Laço do dia


//Laço do mês
for(let i = 0;i < meses.length;i++){
    document.getElementById("escolherMes").innerHTML += `<option>${meses[i]}</option>`;
}

//Laço do ano
for(let i = 2023;i >= 1923;i--){
    document.getElementById("escolherAno").innerHTML += `<option>${i}</option>`;    
}

function mesEscolhido(){
    let mes = escolherMes.value;
    let ano = Number(escolherAno.value);
    document.getElementById("escolherDia").innerHTML = '';
    if(mes == "Fevereiro"){
        if((ano % 4 == 0) && (ano % 100 != 0) || (ano % 400 == 0)){
            gerarDias(29);
            return;
        }
        gerarDias(28);
    }
    if(mes == "Abril" || mes == "Junho" || mes == "Setembro" || mes == "Novembro"){
        gerarDias(30);
    }
    if(mes == "Janeiro" || mes == "Março" || mes == "Maio" || mes == "Julho" || mes == "Agosto" || mes == "Outubro" || mes == "Dezembro"){
        gerarDias(31);
    }
}

function gerarDias(dias){
    for(let i = 1;i <= dias; i++){
        document.getElementById("escolherDia").innerHTML += `<option>${i}</option>`;
    }
}