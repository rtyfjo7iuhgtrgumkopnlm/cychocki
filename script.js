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
                afirmacao: "É constatada que "
            },
            {
                texto: "Não,acho correto",
                afirmacao: "O ensino no brasil"
            }
        ]
    },
    {
        enunciado: "Você acha que a falta de tecnologia, a falta de investimentos no meio escolar prejudica os alunos nos seus estudos?",
        alternativas: [
            {
                texto: "Sim,prejudica",
                afirmacao: "Tem muito "
            },
            {
                texto: "Não,prejudica",
                afirmacao: "A ser melhorado"
            }
        ]
    },
    {
        enunciado: "Você acha que a falta da participações dos pais no meio escolar pode prejudicar nos resultados dos alunos?",
        alternativas: [
            {
                texto: "Sim,prejudica",
                afirmacao: "até por que"
            },
            {
                texto: "Não,prejudica",
                afirmacao: "a baixa qualidade"
            }
        ]
    },
    {
        enunciado: "Você na sua opinião acha que poderia ter mais melhorias assim como o aumento de verbas para o meio escolar?",
        alternativas: [
            {
                texto: "Sim,acho",
                afirmacao: "do ensino,"
            },
            {
                texto: "Não,acho",
                afirmacao: "Acaba prejudicando"
        ]

            },
            
    {
        enunciado: "Você na sua opinião você acha que poderia ter melhorias no meio escolar?",
        alternativas: [
            {
                texto: "Sim poderia",
                afirmacao: "Muito os alunos "
            },
            {
                texto: "Não poderia",
                afirmacao: "a desistirem de terminarem os estudos."
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();