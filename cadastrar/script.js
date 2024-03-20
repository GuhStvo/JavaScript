function salvar() {
    let nome = document.getElementById('nome').value
    let idade = document.getElementById('idade').value
    let cargo = document.getElementById('cargo').value
    let salario = document.getElementById('salario').value

    document.getElementById('printNome').innerHTML = nome
    document.getElementById('printIdade').innerHTML = idade
    document.getElementById('printCargo').innerHTML = cargo
    document.getElementById('printSalario').innerHTML = salario

    
}
