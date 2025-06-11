const numeroSenha = document.querySelector('.parametro-senha__texto');
let tamanhoSenha = 12

const botoes = documents .querySelectorAll('parametro-senha__botao')

botoes[0].onclick = diminuirTamanho;
botoes[1].onclick= aumentarTamanho;

function diminuirTamanho (){
   if( tamanhoSenha > 1){
     tamanhoSenha--;
}
numeroSenha.textContent= tamanhoSenha;
};
 function aumentarTamanho(){
    if(tamanhoSenha < 20) {
        tamanhoSenha ++;
    }
 numeroSenha.textContent= tamanhoSenha;
 }

