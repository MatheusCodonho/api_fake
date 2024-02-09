function HomemDeFerro(){

const myJSON_personagens = '["Homem de Ferro", "PhD em Física e Engenharia Eletrônica","53 anos"]'

console.log(myJSON_personagens)

const array_personagens = JSON.parse(myJSON_personagens)
        console.log(array_personagens)


document.getElementById("info").innerHTML = 
        "<p>Nome: " + array_personagens[0] + "</p>" +
        "<p>Profissao: " + array_personagens[1] + "</p>" +
        "<p>Idade: " + array_personagens[2] + "</p>" +
        "<p><img src='imagens/homem_de_ferro-removebg-preview.png' alt=" + array_personagens[3] + "</p>"
}

function HomemAranha(){

const myJSON_personagens = '["Homem Aranha", "Fotógrafo","60 anos"]'

console.log(myJSON_personagens)

const array_personagens = JSON.parse(myJSON_personagens)
        console.log(array_personagens)


document.getElementById("info").innerHTML = 
        "<p>Nome: " + array_personagens[0] + "</p>" +
        "<p>Profissao: " + array_personagens[1] + "</p>" +
        "<p>Idade: " + array_personagens[2] + "</p>" +
        "<p><img src='imagens/homem_aranha-removebg-preview.png' alt=" + array_personagens[3] + "</p>" 
}

function CapitaoAmerica(){

const myJSON_personagens = '["Capitão América", "Soldado","38 anos"]'

console.log(myJSON_personagens)

const array_personagens = JSON.parse(myJSON_personagens)
        console.log(array_personagens)


document.getElementById("info").innerHTML = 
        "<p>Nome: " + array_personagens[0] + "</p>" +
        "<p>Profissao: " + array_personagens[1] + "</p>" +
        "<p>Idade: " + array_personagens[2] + "</p>" +
        "<p><img src='imagens/capitao_america-removebg-preview.png' alt=" + array_personagens[3] + "</p>" 
}

function Hulk(){

const myJSON_personagens = '["Hulk", "Engenheiro Genético","54 anos"]'

console.log(myJSON_personagens)

const array_personagens = JSON.parse(myJSON_personagens)
        console.log(array_personagens)


document.getElementById("info").innerHTML = 
        "<p>Nome: " + array_personagens[0] + "</p>" +
        "<p>Profissao: " + array_personagens[1] + "</p>" +
        "<p>Idade: " + array_personagens[2] + "</p>" +
        "<p><img src='imagens/hulk-removebg-preview.png' alt=" + array_personagens[3] + "</p>"
}

function DoutorEstranho(){

const myJSON_personagens = '["Doutor Estranho", "Neurocirurgião","50 anos"]'

console.log(myJSON_personagens)

const array_personagens = JSON.parse(myJSON_personagens)
        console.log(array_personagens)


document.getElementById("info").innerHTML = 
        "<p>Nome: " + array_personagens[0] + "</p>" +
        "<p>Profissao: " + array_personagens[1] + "</p>" +
        "<p>Idade: " + array_personagens[2] + "</p>" +
        "<p><img src='imagens/doutor_estranho-removebg-preview.png' alt=" + array_personagens[3] + "</p>"
}
