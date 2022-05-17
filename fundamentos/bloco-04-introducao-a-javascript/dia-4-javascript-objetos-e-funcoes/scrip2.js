/*let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim'

  };
  let info2 = {
    personagem: 'Tio Patinhas',
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: 'O último MacPatinhas',
    recorrente: 'Sim'

  };
for (const key in info) {
    if (info[key] !== info2[key]) {
      console.log(info[key] +' e '+ info2[key]);
    }
    else {
      console.log("Ambos recorrentes");
    }
}*/

let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
      {
        titulo: 'Harry Potter e o Prisioneiro de Azkaban',
        autor: 'JK Rowling',
        editora: 'Rocco',
      }
    ],
  };

  console.log("O livro favorito de "+leitor.nome+leitor.sobrenome+" se chama "+leitor.livrosFavoritos[0]["titulo"]);
  
if (leitor.livrosFavoritos.length > 0) {
      console.log(leitor.nome+"tem "+leitor.livrosFavoritos.length+" livros favoritos") 
  } else{
    console.log(leitor.nome+"tem apenas 1 livros favorito")
}