/* EXERCÍCIO DE FIXAÇÃO
1. Crie um novo objeto. Este objeto é uma pessoa e deve possuir três propriedades:
  a. nome, que é uma string;
  b. idade, que é um número;
  c. corFavorita, que é uma string.

2. Crie mais três objetos, que também precisam ter apenas os campos definidos acima. Crie um type Pessoa para garantir
que todos os objetos tenham as mesmas propriedades.

3. Modifique o type Pessoa para que possamos escolher apenas entre as cores do arco-íris. Utilize um enum para isso.
*/
var COR;
(function (COR) {
    COR["VERMELHO"] = "Preto";
    COR["LARANJA"] = "Laranja";
    COR["AMARELO"] = "Amarelo";
    COR["VERDE"] = "Verde";
    COR["AZUL"] = "Azul";
    COR["ANIL"] = "Anil";
    COR["VIOLETA"] = "Violeta";
})(COR || (COR = {}));
var pessoa3 = {
    nome: 'Pedro',
    idade: 30,
    corFavorita: COR.AZUL
};
var pessoa4 = {
    nome: 'Lucas',
    idade: 31,
    corFavorita: COR.ANIL
};
var pessoa5 = {
    nome: 'Cabaré',
    idade: 32,
    corFavorita: COR.VIOLETA
};
var uzboy = [];
uzboy.push(pessoa3, pessoa4, pessoa5);
console.table(uzboy);
