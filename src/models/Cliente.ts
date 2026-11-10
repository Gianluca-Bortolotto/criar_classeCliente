export class Cliente {
  private id: number;
  private nome: string;
  private cpf: string;
  private rg: string;
  private anoNascimento: number;

  constructor(id: number, nome: string, cpf: string, rg: string, anoNascimento: number) {
    this.id = id;
    this.nome = nome;
    this.cpf = cpf;
    this.rg = rg;
    this.anoNascimento = anoNascimento;
  }

  public getId(): number {
    return this.id;
  }

  public getNome(): string {
    return this.nome;
  }

  public getCPF(): string {
    return this.cpf;
  }

  public getRG(): string {
    return this.rg;
  }

  public getAnoNascimento(): number {
    return this.anoNascimento;
  }

  public getIdade(): number {
    const anoAtual = new Date().getFullYear();
    return anoAtual - this.anoNascimento;
  }
}