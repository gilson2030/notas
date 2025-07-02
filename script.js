// Firebase config copiado do seu painel:
const firebaseConfig = {
  apiKey: "AIzaSyBnbeMwmgtEhs7c1_m90_f9EZwVLqidANQ",
  authDomain: "notas-99374.firebaseapp.com",
  projectId: "notas-99374",
  storageBucket: "notas-99374.appspot.com",
  messagingSenderId: "44752431417",
  appId: "1:44752431417:web:726005288643e13c7d20e8"
};

// Inicializa Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Turmas
const turmas = {
  A: [
    "Alessandra Gabrielly Campos de Moura",
    "Amanda Kamily da Silva",
    "Ana Júlia Rodrigues de Alencar",
    "Ana Julia Silva de Campos",
    "Ana Jullya Sousa Silva",
    "Andressa Valões Barbosa",
    "Anthony Gabriel Oliveira Diniz",
    "Beatriz Victoria dos Santos Costa",
    "Brenda Vitoria Ferreira Fialho",
    "Cássia Silva Gomes",
    "David Alan dos Santos Queiroga",
    "Eishila Celada Luciano",
    "Emilly Ruiz Cassiano",
    "Evellyn de Proença Batista Antenor",
    "Evellyn Silva Gomes",
    "Guilherme Salles Lima Rocha",
    "Gustavo da Silva Melo",
    "Isadora Ingrind Borges de Andrade",
    "João Armando Dias de Sá",
    "Luís Guilherme Amorim Dahmer Leite",
    "Maria Luiza de Paula Almeida",
    "Mariana Alves de Souza",
    "Pablo Henrique Vasconcelos Dias",
    "Rafael Yuri Hosogi Tada",
    "Renata Borges da Silva",
    "Sabina Letticia da Silva Santos",
    "Sabrina Victoria Pereira de Santana",
    "Sabrina Vitoria de Almeida",
    "Vitor Martins Santos",
    "Vitória Ferreira de Castro",
    "Yan Felipe Alves Peixoto",
    "Karolina Auxiliadora Joaquim Pereira",
    "Mayra Luiza Gomes Freitas",
    "Stefhani",
    "Gabriel Camingo",
    "Riquelme"
  ],
  B: [
    "Ana Karolyne Alves",
    "Ana Lygia Costa da Silva",
    "Ana Sara Santos da Silva",
    "Anna Clara Bueno de Souza",
    "Carlos Alberto Gonzaga Ramos",
    "Carlos Eduardo Ribeiro dos Santos",
    "Chrystian Pontes da Silva",
    "Emanuella Lopes Paiva França",
    "Gabriel Henrique da Costa Cruz",
    "Gustavo Cordeiro de Castro",
    "Heitor Dias de Paula",
    "Hitalo Miranda Costa",
    "Isabelle Angelina Alves da Cunha",
    "Jhuliette Paola Guiamactuco Chavez",
    "João Pedro Rodrigues de Souza",
    "João Victor Vicente da Silva",
    "João Vítor Melo de Amorim",
    "Julia Costa Xavier",
    "Karyn Cristina Almeida de Melo",
    "Kauã Davi Amorim de Moraes Moura",
    "Letícia Gabrielli Silva Lima",
    "Letícia Vitória Rosa de Araújo",
    "Luan Renato Lopes",
    "Luiz Gustavo de Oliveira Vaccaro",
    "Marcos da Silva Alfonso",
    "María Eduarda Pereira de Figueiredo",
    "Maria Ester Menino Amaral",
    "Mateus da Silva Cardoso",
    "Mateus de Assunção Rodrigues",
    "Mateus Ferreira Machado",
    "Victor Gabriel Jardim da Silva",
    "Vinícius Henrique de Matos Soares",
    "Marcelo Augusto da Silva Nunes",
    "Raul Gomes de Oliveira",
    "Lorena"
  ],
  C: [
    "Ana Caroline Neves da Costa",
    "Anny Gabrielly da Silva Moraes Oliveira",
    "Bianca Emanuélly Silva de Arruda",
    "Eloyse Victória da Silva Pinheiro",
    "Emilly Kauane Aparecida da Silva",
    "Fabricio Figueiredo dos Santos",
    "Gabrielly Vitoria Mendes da Silva",
    "Hadassa Pereira Brasil",
    "Izabella de Campos Rondon da Silva",
    "Josmel Eduardo Leon Polanco",
    "Lavínia Rodrigues",
    "Luís Vinicius Hungria Ferreira",
    "Maria Eduarda Borges Ferreira",
    "Mikaelly Natally Silva Pereira",
    "Pedro Augusto Hung Cardoso",
    "Pedro Henrique Silva de Magalhães",
    "Priscylia Vitória Jesus da Silva",
    "Rafael do Nascimento Souza Arcanjo",
    "Rafaela Aparecida Souza Arcanjo",
    "Raíssa Vitória Leguizamon da Silva",
    "Renan da Silva Santos",
    "Rhadassa Pereira da Silva",
    "Richard da Silva Lemes",
    "Rosa Maria de Oliveira Almeida",
    "Shara Ellen Ribeiro de Oliveira",
    "Sophia Vitória Evangelista da Silva",
    "Thalita Costa Dourado",
    "Victhor Hugo Santos de Franca",
    "Victor Hugo Pedroso Nunes",
    "Weberson Miranda de Almeida",
    "Willian Rafael Carmo de Oliveira",
    "Yasmin Magalhães Gimenez",
    "Gabrielly Vitoria Assunção de Amorim"
  ],
  D: [
    "Allyfher Victor Trajano Rodrigues",
    "Allysson Rhyan Soares F. de Oliveira",
    "Ana Vitória Gomes dos Santos",
    "Andressa Mota Rufino",
    "Anny Lorena Mendes Pereira",
    "Any Caroliny Melo dos Santos",
    "Bia Carolina da Silva Lacerda",
    "Brenno Vinicius Fernandes da Silva",
    "David Enzon Souza Rodrigues",
    "Débora Fernandes dos Santos",
    "Eduardo Ferreira Campos",
    "Emanuelly da Silva Leite",
    "Enzo Kauã Faria Costa",
    "Erika Rafaely Abreu Martins",
    "Evandro Oliveira dos Santos",
    "Ezequiel da Silva Souza",
    "Fabrício Pinho Gomes",
    "Felipe Matheus e Silva",
    "Gabriel Duarte da Silva",
    "Geovanna Beatriz Hora Nascimento",
    "Hillary da Silva Lopes",
    "Izadora Cristina de A. Conzzatti",
    "João Victor Alves de Amorim",
    "Kenner Renato Brizola F. do Prado",
    "Lays Victoria da Silva Salvador",
    "Lívia Souza Barbosa do Nascimento",
    "Maria Eduarda da Silva Cerqueira",
    "Maria Fernanda Marques G. Cardoso",
    "Millena Vitoria Estevam Ferreira",
    "Nicolli Rodolfo Cardoso de Sá",
    "Yasmin Kely Ormond Ferreira",
    "Fernanda Fernandes Santos Maciel",
    "Camila Martins de Castro",
    "Adyla Victoria Macedo da Silva"
  ],
  E: [
    "Ana Beatriz Silva Moura",
    "Ana Clara Alves Pereira",
    "Anne Louise Martins da Silva",
    "Aryadnys Camila da Silva Vieira",
    "Izabella Queiroz Camargo Silva",
    "João Pedro Ribeiro Santos",
    "Júlia Finco de Sousa",
    "Julya Vitoria Machado Leite",
    "Kaiky Rafael Xavier Andrade",
    "Kauan Felipe Rodrigues M. dos Anjos",
    "Kayky Vieira Soares",
    "Keven Vítor Gomes de Oliveira",
    "Lincon Douglas de Souza",
    "Luana Thayna Pereira de Souza",
    "Luiz Fernando Rodrigues dos Santos",
    "Luíza Finco de Sousa",
    "Maria Clara Souza Silva Neves",
    "Maria Eduarda Tonette Paulista",
    "Maria Luiza Rodrigues Costa",
    "Mateus Kaik do Nascimento",
    "Matheus Fabrício da Silva Fortes",
    "Maurício Ricardo Moreira Silva",
    "Miguel Alexandre Damaceno Campos",
    "Otávio Ferraz de Paula",
    "Rafaela Cristina Faustino de Souza",
    "Raquel Cristina de Almeida Ferreira",
    "Ryan Gustavo de Lima Ferreira",
    "Samuel Martins Neves de Oliveira",
    "Saulo Nascimento Souza",
    "Vitor do Espírito Santo",
    "Wallysson Michell F. B. de Oliveira",
    "Yasmin Vitória Marchesi Campos",
    "Miguel Alves",
    "Matheus Henrique"
  ]
};

// Elementos do DOM
const turmaSelect = document.getElementById("turma");
const tbody = document.getElementById("table-body");

// Função para renderizar a tabela de alunos da turma selecionada
function renderTable(turma) {
  const alunos = turmas[turma];
  tbody.innerHTML = "";

  alunos.forEach((nome, idx) => {
    const numero = idx + 1;
    const tr = document.createElement("tr");

    // Número do aluno
    const tdNumero = document.createElement("td");
    tdNumero.textContent = numero;
    tr.appendChild(tdNumero);

    // Nome do aluno
    const tdNome = document.createElement("td");
    tdNome.textContent = nome;
    tr.appendChild(tdNome);

    // Campo para a média
    const tdMedia = document.createElement("td");
    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Digite a média";

    // Carrega do Firebase a média salva para este aluno
    db.collection("turmas").doc(turma).collection("alunos").doc(numero.toString()).get().then(doc => {
      if (doc.exists) {
        input.value = doc.data().media || "";
      }
    });

    // Salva no Firebase ao mudar o valor
    input.addEventListener("change", () => {
      db.collection("turmas").doc(turma).collection("alunos").doc(numero.toString()).set({
        nome: nome,
        media: input.value
      });
    });

    tdMedia.appendChild(input);
    tr.appendChild(tdMedia);

    tbody.appendChild(tr);
  });
}

// Atualiza tabela ao trocar turma
turmaSelect.addEventListener("change", e => {
  renderTable(e.target.value);
});

// Exibe turma padrão ao carregar
renderTable(turmaSelect.value);
