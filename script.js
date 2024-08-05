const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você acha correto a ausência dos professores nas aulas, assim como a diminuição de matérias?",
        alternativas: [
            {
                texto: "Sim, acho correto",
                afirmacao: "afirmação"
            },
            {
                texto: "Não, acho correto",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Você acha que a falta de tecnologia, a falta de investimentos no meio escolar prejudica os alunos nos seus estudos?",
        alternativas: [
            {
                texto: "Sim prejudica.",
                afirmacao: "afirmação"
            },
            {
                texto: "Não prejudica.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Você acha que a falta da participações dos pais no meio escolar pode prejudicar nos resultados dos alunos?",
        alternativas: [
            {
                texto: "Sim prejudica.",
                afirmacao: "afirmação"
            },
            {
                texto: "Não prejudica.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Você na sua opinião acha que poderia ter mais melhorias assim como o aumento de verbas para o meio escolar?",
        alternativas: [
            {
                texto: "Acho necessário.",
                afirmacao: "afirmação"
            },
            {
                texto: "Não acho necessário.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "É contanstatado que o ensino no brasil tem muito a ser melhorado, até por que a baixa qualidade do ensino, acaba prejudicando muito os alunos a desistirem de terminar os estudos! ",
        alternativas: [
            {
                texto: "0.",
                afirmacao: "afirmação"
            },
            {
                texto: "0.",
                afirmacao: "afirmação"
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiafinal = "";

function mostraPergunta() {
    if( atual >= perguntas.length){
        mostraresultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraalternativas.textcontent = "";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaselecionada ( alternativa));{
            atual++;
            mostraPergunta();
        })
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaselecionada(opcaoselecionada){
    const afirmações = opcaoselecionada.afirmações;
    historiafinal = afirmações;
    
    atual++;
    mostraPergunta();
}
   caixaAlternativas.appendChild(botaoAlternativa);
    
function mostraresultado(){
    caixaperguntas.textcontent = "Em geral...";
    textresultado.textcontent = historiafinal;
    caixaalternativas.textcontent = "";
}


mostraPergunta();
