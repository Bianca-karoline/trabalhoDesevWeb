function sorte(){
    let max = parseInt(document.getElementById('max').value) ;
    let min = parseInt(document.getElementById('min').value);
    let sorteado = parseInt(Math.random() * (max - min + 1) )+min;
    document.getElementById('n').innerHTML = sorteado;
}
function calcularNotas(){
    let n1 =0, n2=0, n3=0, n4=0;
    n1 = parseInt(document.getElementById('nota1').value);
    n2 = parseInt(document.getElementById('nota2').value);
    n3 = parseInt(document.getElementById('nota3').value);
    n4 = parseInt(document.getElementById('nota4').value);
    let result = (n1 + n2 + n3 + n4) / 4;
    document.getElementById('n').innerHTML = document.getElementById('nome').value;
    document.getElementById('resultado').innerHTML = result;
    if(result<2.0){
        document.getElementById('situacao').innerHTML = "Reprovado";
        document.getElementById('coluna2').style.background = "rgb(248, 87, 87)";

    }else if(result<6.0){
        document.getElementById('situacao').innerHTML = "Recuperação";
        document.getElementById('coluna2').style.background = 'rgb(107, 207, 247)';
    }else{
        document.getElementById('situacao').innerHTML = "Aprovado";
        document.getElementById('coluna2').style.background = 'rgb(128, 223, 125)';
    }
    
}
function formulario(){
    let hobbie = document.querySelectorAll('input[type="checkbox"]:checked');
    let texto = "";
    
    texto = document.getElementById('nome').value;
    for(let i=0;i<hobbie.length;i++){
        texto += ", " + hobbie[i].value;
        
    }
    if(hobbie.length == 0){
        document.getElementById('divisoria').style.border = "2px solid rgb(248, 87, 87)";
    }else if(hobbie.length <2){
        document.getElementById('divisoria').style.border = "2px solid rgb(107, 207, 247)";
    }else{
        document.getElementById('divisoria').style.border = '2px solid rgb(128, 223, 125)';
    }
    document.getElementById('span1').innerHTML = "Ter hobbies é muito importante para o bem-estar e a qualidade de vida de uma pessoa. Eles são atividades que fazemos por prazer, sem a obrigação de serem produtivos ou gerarem renda, e que nos permitem relaxar, se divertir e explorar nossos interesses."
    if(hobbie.length != 0){
        document.getElementById('span2').innerHTML = texto + " são hobbies que podem ajudar a melhorar a qualidade de vida e a promover o bem-estar geral.";
    }
    
}