
var letrasMaiusculas = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N',
    'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',];

var letrasMinusculas = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n',
    'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',];

function decodeFn(decrypt, chave) {
    let texto = '';
    for (let i = 0; i < decrypt.length; i++) {
        let asciiValue = decrypt.charCodeAt([i]);
        let letra = String.fromCharCode(asciiValue);

        if (letra === ' ') {
            texto += ' '
        } else {
            if (letra.toLocaleUpperCase() === letra) {
                asciiValue = (asciiValue + 65 - chave) % 26;
                texto += letrasMaiusculas[asciiValue];
            } else {
                asciiValue = (asciiValue - 97 - chave) % 26;
                if (asciiValue < 0) {
                    asciiValue = asciiValue + 26;
                }
                texto += letrasMinusculas[asciiValue];
            }
        }
    }
    console.log('Sua mensagem descriptografada é: ' + texto);
}

decodeFn('NBCN CNGCX OXR LROAJMX DBJWMX MNBUXLJVNWCX BRVYUNB XWMN T ORLJ RPDJU J BNRB', 9);
