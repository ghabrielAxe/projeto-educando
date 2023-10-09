var codigosEsperados = {
    "tutorial1.html": 'print("Hello World!")',
    "tutorial2.html": `
    numero1 = float(input("Digite o primeiro número: "))
    numero2 = float(input("Digite o segundo número: "))
    soma = numero1 + numero2
    print("A soma de", numero1, "e", numero2, "é igual a", soma)
    `,
    "tutorial3.html": `
    numero = int(input("Digite um número: "))
    if numero % 2 == 0:
        print("É um número par!")
    else:
        print("É um número ímpar!")`,
    "tutorial4.html": `
    for i in range(10, 0, -1):
    print(i)`,
    "tutorial5.html": `
    num1 = int(input("Digite o primeiro número: "))
            num2 = int(input("Digite o segundo número: "))

            if num1 > num2:
                print(num1, "é o maior número.")
            else:
                print(num2, "é o maior número.")
                `,
    "tutorial6.html": `
    numero = int(input("Digite um número para a tabuada: "))
                  for i in range(1, 11):
                      print(numero, "x", i, "=", numero * i)`
};

// Função para verificar o código inserido pelo usuário
function verificarCodigo() {
    // Obtém o código do usuário do elemento textarea
    var codigoDoUsuario = document.getElementById('codigoDoUsuario').value;
    
    // Obtém o nome do arquivo da página atual
    var paginaAtual = window.location.pathname.split("/").pop();

    // Obtém o código esperado para a página atual
    var codigoEsperado = codigosEsperados[paginaAtual];
    
    // Verifica se o código do usuário é igual ao código esperado
    if (codigoDoUsuario.trim() === codigoEsperado) {
        // Se for igual, exibe "Código correto"
        document.getElementById('resultado').innerHTML = 'Código correto';
    } else {
        // Se não for igual, exibe "Código incorreto"
        document.getElementById('resultado').innerHTML = 'Código incorreto';
    }
}

// Função para avançar para a próxima página do tutorial
function irParaProximaPagina() {
    var paginaAtual = window.location.pathname;
    var partesDaURL = paginaAtual.split('/');
    var numeroDaPagina = parseInt(partesDaURL[partesDaURL.length - 1].replace('tutorial', '')) + 1;
    var proximaPagina = 'tutorial' + numeroDaPagina + '.html';
    window.location.href = proximaPagina;
}

// Função para voltar para a página anterior do tutorial
function voltarParaPaginaAnterior() {
    var paginaAtual = window.location.pathname;
    var partesDaURL = paginaAtual.split('/');
    var numeroDaPagina = parseInt(partesDaURL[partesDaURL.length - 1].replace('tutorial', '')) - 1;
    if (numeroDaPagina >= 1) {
        var paginaAnterior = 'tutorial' + numeroDaPagina + '.html';
        window.location.href = paginaAnterior;
    }
}

function irParaConclusao() {
    window.location.href = "conclusao.html"; // Redireciona para a página conclusao.html
}