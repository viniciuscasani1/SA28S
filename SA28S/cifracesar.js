function cifraCesar(chave, texto) {

    var textoCifrado = '';

    for (var i = 0; i < texto.length; i++) {

        if (texto[i] === ' ') {
            textoCifrado = textoCifrado + ' ';
        } else {
            var asciiValue = texto.charCodeAt(i) + chave;
            while (asciiValue > 126) {
                asciiValue -= 94;
            }
            textoCifrado = textoCifrado + (String.fromCharCode(asciiValue));
        }
    }

    console.log(textoCifrado);
}

cifraCesar(3, 'a descricao geral do trabalho da disciplina inclui a pesquisa e descricao sobre tres tecnicas, ferramentas ou programas que podem ser usadas para realizar ameacas e ou ataques visando explorar a vulnerabilidade de sistemas cada tecnica ferramenta ou programa deve ser descrita em termos de funcionamento funcionalidades e objetivos o tipo de ameaca contemplado contramedidas possiveis exemplo pratico e aspectos de auditoria');