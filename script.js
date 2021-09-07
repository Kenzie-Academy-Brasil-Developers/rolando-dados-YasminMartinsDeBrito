
const rolar = document.querySelector('#rolar');

rolar.addEventListener('click', limparRolandoDados)
function limparRolandoDados(){
    mostrar.innerText='';
    mostrarTabela.innerText=''; 
    rolandoDados()
}

function rolandoDados(){
    let count = [0,0,0,0,0,0,0,0,0,0,0,0];
    for(let i = 1; i <= 1000;i++){
        //rolando 2 dados
        let dado1 = Math.floor(Math.random()* 6) + 1;
        let dado2 = Math.floor(Math.random() * 6) + 1;
        let somarDados = dado1 + dado2;
        let somando = somarDados;
        count[somando]+= 1;
    }
    //mostrando resultado na tela
    let mostrar = document.getElementById('mostrar');
        
          for(let j = 2; j<13-1; j++){
            const resultado = document.createElement('div');
            resultado.className ='resultado';
            resultado.innerText += ` ${j}: ${count[j]}\n` ;
            mostrar.appendChild(resultado);
    }
  let mostrarTabela = document.getElementById('mostrarTabela')
    for(i = 2; i < 13-1;i++){
        const tabela = document.createElement('div');
        tabela.className =  'tabela';
        tabela.style.backgroundColor = 'blue'
        tabela.style.width = `${count[i]}px`;

        tabela.innerText =`${count[i]}\n`; 
        mostrarTabela.appendChild(tabela)
    }

}