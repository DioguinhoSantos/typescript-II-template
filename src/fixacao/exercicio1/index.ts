/* EXERCÍCIO DE FIXAÇÃO
1. Crie um novo objeto. Este objeto é uma pessoa e deve possuir três propriedades:
  a. nome, que é uma string;
  b. idade, que é um número;
  c. corFavorita, que é uma string.

2. Crie mais três objetos, que também precisam ter apenas os campos definidos acima. Crie um type Pessoa para garantir
que todos os objetos tenham as mesmas propriedades.

3. Modifique o type Pessoa para que possamos escolher apenas entre as cores do arco-íris. Utilize um enum para isso.
*/

type TPerson2 = {
  nome: string,
  idade: number,
  corFavorita: COR
}

enum COR {
  VERMELHO = 'Preto',
  LARANJA = 'Laranja',
  AMARELO = 'Amarelo',
  VERDE = 'Verde',
  AZUL = 'Azul',
  ANIL = 'Anil',
  VIOLETA = 'Violeta'
}

const pessoa3: TPerson2 = {
  nome: 'Pedro',
  idade: 30,
  corFavorita: COR.AZUL
}

const pessoa4: TPerson2 = {
  nome: 'Lucas',
  idade: 31,
  corFavorita: COR.ANIL
}

const pessoa5: TPerson2 = {
  nome: 'Cabaré',
  idade: 32,
  corFavorita: COR.VIOLETA
}

type Valide = TPerson2 | COR ;

const uzboy: Valide[] = []

uzboy.push(pessoa3, pessoa4, pessoa5);

console.table(uzboy);