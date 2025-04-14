function calcular(){
    let codigo = Number(document.getElementById("codigo").value)
    let quantidade = Number(document.getElementById("quantidade").value)
    let texto = document.getElementById("texto")
    let total = 0

    //testando os códigos dos lanches

    switch (codigo) {
        case 1:
            total = quantidade * 18.00
            break;
        case 2:
            total = quantidade * 15.00
            break;
        case 3:
            total = quantidade * 17.00
            break;
        case 4:
            total = quantidade * 22.00
            break;
        case 5:
            total = quantidade * 25.00
            break;
        case 6:
            total = quantidade * 20.00
            break;
        case 7:
            total = quantidade * 27.00
            break;
        case 8:
            total = quantidade * 28.00
            break;
    
        default:
            total = "Código Inválido"
            break;
    }

    texto.innerHTML = "R$ " + total 
}