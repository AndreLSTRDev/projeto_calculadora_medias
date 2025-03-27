const form=document.getElementById("form-atividade");
const imgAprovado='<img src="./images/aprovado.png" alt="emote celebrando"/>';
const imgReprovado='<img src="./images/reprovado.png" alt="emote triste"/>';
const atividades=[];
const notas=[];
const spanAprovado='<span class="resultado aprovado">Aprovado<span/>';
const spanReprovado='<span class="resultado reprovado">Reprovado<span/>';
const notaMinima=parseFloat(prompt("Digite a nota mínima:"));

let linhas='';

form.addEventListener('submit',function(e){
    e.preventDefault();

    adicionarLinha();
    atualizaTabela();
    atualizaMediaFinal();
});

function adicionarLinha(){
    const inputNomeAtividade=document.getElementById("nome-atividade");
    const inputNotaAtividade=document.getElementById("nota-atividade");

    if(atividades.includes(inputNomeAtividade.value)){
        alert(`A atividade ${inputNomeAtividade.value} já foi inserida`)
    } else{
        atividades.push(inputNomeAtividade.value)
        notas.push(parseFloat(inputNotaAtividade.value))

    }

    atividades.push(inputNomeAtividade.value);
    notas.push(parseFloat(inputNotaAtividade.value));

    let linha="<tr>";

    linha=linha+`<td>${inputNomeAtividade.value}</td>`;
    linha=linha+`<td>${inputNotaAtividade.value}</td>`;
    linha=linha+`<td>${inputNotaAtividade.value >=notaMinima ? imgAprovado:imgReprovado}</td>`;
    linha=linha+ `</tr>`;

    linhas=linhas+linha;

    inputNomeAtividade.value='';
    inputNotaAtividade.value='';

}
function atualizaTabela(){
    const corpoTabela=document.querySelector("tbody");
    corpoTabela.innerHTML=linhas;

}
function atualizaMediaFinal(){
    const mediaFinal=calculaMedia();

    
    document.getElementById("media-final-valor").innerHTML=mediaFinal.toFixed(2);
    document.getElementById("media-final-resultado").innerHTML=mediaFinal>=notaMinima?spanAprovado:spanReprovado;


}

function calculaMedia(){
    let somaDasNotas=0;

    for (let contador=0; contador<notas.length;contador++){
        somaDasNotas=somaDasNotas+notas[contador];

    }

    return somaDasNotas/notas.length;

}
