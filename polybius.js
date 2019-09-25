const readline = require("readline");

const alphabet = [
  ["a", "b", "c", "d", "e", "f"],
  ["g", "h", "i", "j", "k", "l"],
  ["m", "n", "o", "p", "q", "r"],
  ["s", "t", "u", "v", "w", "x"],
  ["y", "z", "0", "1", "2", "3"],
  ["4", "5", "6", "7", "8", "9"]
];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question(
  "O que você deseja fazer? \n 1 - Codificar \n 2 - Decodificar \n Opcao desejada: ",
  sentence => {
    sentence === "1"
      ? rl.question("Qual palavra você quer codificar? ", sentence => {
          let position = "";

          [...sentence].forEach(item => {
            alphabet.forEach((i, iIndex) => {
              i.forEach((j, jIndex) => {
                if (j === item.toLocaleLowerCase())
                  position += `${iIndex + 1}${jIndex + 1}`;
              });
            });
          });

          console.log(position);

          rl.close();
        })
      : rl.question("Decodificar:  ", sentence => {
          let word = "";

          const newSentence = [...sentence].map(item => item - 1);

          for (x = 0; x < newSentence.length; x += 2) {
            word += alphabet[newSentence[x]][newSentence[x + 1]];
          }

          console.log(word);

          rl.close();
        });
  }
);
