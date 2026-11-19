// Contador de matches (topo do script)
let totalMatches = 0;

/* ========== FASE 1: Caçando elementos no DOM ========== */
console.log('Sobrevivente conectado ao DOM!');

const cabecalho = document.querySelector('header');
console.log(cabecalho);

const btnTema = document.querySelector('#btn-tema');
const boasVindas = document.querySelector('#boas-vindas');
const tituloSite = document.querySelector('header h1');
const listaBeneficios = document.querySelectorAll('ol li');
console.log('Itens da lista de benefícios:', listaBeneficios.length);

const campoNome = document.querySelector('input[type="text"]');
const campoEmail = document.querySelector('input[type="email"]');

/* ========== FASE 2: Textos, estilos e atributos ========== */
tituloSite.textContent = 'The Walking Date 🧟';

const depoimento = document.querySelector('cite');
depoimento.innerHTML = '-<strong>Zezinho da Foice</strong>, Sobrevivente Nível 5';

const textoBoasVindas = document.querySelector('#boas-vindas p').textContent;
console.log(textoBoasVindas);

const aside = document.querySelector('aside');
aside.style.borderColor = 'var(--cor-sangue)';
aside.style.fontSize = '1.1rem';

const imgBoasVindas = document.querySelector('#boas-vindas img');
console.log(imgBoasVindas.getAttribute('alt'));
imgBoasVindas.setAttribute('alt', 'Casal de zumbis apaixonados caminhando ao pôr do sol');

campoNome.value = 'Sobrevivente Anônimo';

// classe .destaque-infectado está no style.css
const primeiraLinha = document.querySelector('tbody tr');
primeiraLinha.classList.add('destaque-infectado');

/* ========== FASE 3: Criando e removendo elementos ========== */
const barraAlerta = document.querySelector('#barra-alerta');

const aviso = document.createElement('p');
aviso.textContent = '⚠️ ALERTA DE HORDA: Encontros hoje apenas em zonas seguras!';
aviso.style.backgroundColor = 'var(--cor-sangue)';
aviso.style.color = '#ffffff';
aviso.style.textAlign = 'center';
aviso.style.padding = '10px';
aviso.style.flex = '1';
barraAlerta.prepend(aviso);

const novoBeneficio = document.createElement('li');
novoBeneficio.innerHTML = 'Cérebros frescos <strong>todos os dias!</strong>';
document.querySelector('#beneficios ol').appendChild(novoBeneficio);

const btnFecharAlerta = document.querySelector('#fechar-alerta');
btnFecharAlerta.addEventListener('click', function () {
    document.querySelector('#barra-alerta').remove();
});

/* ========== FASE 4: Tema e eventos de clique ========== */
const htmlRoot = document.documentElement;

btnTema.addEventListener('click', function () {
    if (htmlRoot.getAttribute('data-theme') === 'light') {
        htmlRoot.removeAttribute('data-theme');
        btnTema.textContent = '☀️ Modo Claro';
    } else {
        htmlRoot.setAttribute('data-theme', 'light');
        btnTema.textContent = 'Modo Sombrio 🌙';
    }
});

const placarMatches = document.querySelector('#placar-matches');

document.querySelectorAll('.botao-match').forEach(function (botao) {
    botao.addEventListener('click', function (event) {
        event.target.textContent = 'Match Confirmado! 💘🧟';
        event.target.disabled = true;

        totalMatches += 1;
        placarMatches.textContent = 'Matches: ' + totalMatches;
    });
});

/* ========== FASE 5: Simulador de química ========== */
const btnCalcular = document.querySelector('#btn-calcular');
const resultadoQuimica = document.querySelector('#resultado-quimica');

btnCalcular.addEventListener('click', function () {
    const bruto1 = document.querySelector('#podridao-1').value;
    const bruto2 = document.querySelector('#podridao-2').value;
    const dias1 = Number(bruto1);
    const dias2 = Number(bruto2);

    if (bruto1 === '' || bruto2 === '' || dias1 < 0 || dias2 < 0) {
        resultadoQuimica.textContent = 'Dados inválidos! Digite um número válido de dias.';
        return;
    }

    const soma = dias1 + dias2;
    resultadoQuimica.textContent =
        'Nível de podridão combinado: ' + soma + ' dias! Compatibilidade alta!';
});

/* ========== FASE 6: Formulário e teclado ========== */
const previewCracha = document.querySelector('#preview-cracha');

campoNome.addEventListener('input', function () {
    previewCracha.textContent = 'Crachá de Sobrevivente: ' + campoNome.value;
});

imgBoasVindas.addEventListener('mouseover', function () {
    console.log('Cuidado! Não morda muito perto da tela...');
});

const formulario = document.querySelector('form');

formulario.addEventListener('submit', function (event) {
    event.preventDefault();

    alert('Cadastro concluído, ' + campoNome.value + '! Prepare sua melhor mordida.');

    campoNome.value = '';
    campoEmail.value = '';
    previewCracha.textContent = '';
});

document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        const barra = document.querySelector('#barra-alerta');
        if (barra) {
            barra.remove();
        }
    }
});
