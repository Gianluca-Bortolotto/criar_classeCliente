import { Cliente } from './models/Cliente.js';

const listaClientes = [
  {
    id: 1,
    nome: "André Solicito",
    cpf: "068.753.540-98",
    rg: "41.068.896-4",
    anoNascimento: 1980
  },
  {
    id: 2,
    nome: "Janete de Oliveira",
    cpf: "501.764.310-98",
    rg: "20.360.374-6",
    anoNascimento: 1970
  },
  {
    id: 3,
    nome: "José de Almeida",
    cpf: "862.373.890-08",
    rg: "42.172.423-7",
    anoNascimento: 1965
  }
];

console.log("      RELATÓRIO DE TESTES DA CLASSE CLIENTE       \n");

listaClientes.forEach((dados) => {
  const cliente = new Cliente(
    dados.id,
    dados.nome,
    dados.cpf,
    dados.rg,
    dados.anoNascimento
  );

  console.log(`[CLIENTE ID: ${cliente.getId()}]`);
  console.log(` - Nome:              ${cliente.getNome()}`);
  console.log(` - CPF:               ${cliente.getCPF()}`);
  console.log(` - RG:                ${cliente.getRG()}`);
  console.log(` - Ano Nascimento:    ${cliente.getAnoNascimento()}`);
  console.log(` - Idade Calculada:   ${cliente.getIdade()} anos`);
  console.log("--------------------------------------------------");
});