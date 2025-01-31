# Início:
Objetivo: 
Crie um projeto react + typescript
•⁠  ⁠⁠ao inicializar, deverá conter:
•⁠  ⁠⁠4 radio buttons: soma, subtraçao, multiplicaçao e divisao
•⁠  ⁠2 inputs que aceitam somente valores numericos inteiros e um botao “Calcular”
- o resultado do botao “Calcular” deverá ser exibido logo abaixo e o valor do resultado deve ser baseado com o valor escolhido no radio button.
Pré-requisito: utilizar o hook “useState” (nativo do react)
---
Tecnologias Utilizadas

* [React.js](https://pt-br.reactjs.org/)
* [Hooks](https://pt-br.reactjs.org/docs/hooks-intro.html)
* [Typescript](https://www.typescriptlang.org/)
* [CSS](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
* [JS](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
---

## Instalar React
1. Instalar Node.js
Problema encontrado: " execução de scripts foi desabilitada neste sistema". Desabilitar no PowerShell do Windows. 
2. Instalar com comando no console npm create vite@latest - nomear arquivo\
2.1 Selecionat React > Typescript\
2.2 Rodar cd calculator-react-js\
2.3 npm install\
2.4 npm run dev\
Fonte: Documentação React (https://pt-br.react.dev/learn/installation)
---

## Conceitos 

JSX = HTML "misturado" com JS
Explicação da documentação: O JSX é uma extensão de sintaxe para JavaScript escrita para ser usada com o React parecida com HTML, mas que, na verdade, é um arquivo JavaScript que precisa ser compilado ou convertido em JavaScript normal.\
TSX = Usado com Typescript ao contrário do JSX que é usado com JS puro.\
Explicação da documentação: TSX é essencialmente a mesma coisa que JSX, mas é usada junto com TypeScript. TypeScript é uma superconjunto de JavaScript, ou seja, tudo que você pode fazer em JavaScript pode ser feito em TypeScript, mas TypeScript adiciona tipos de dados e outras funcionalidades de segurança de tipos, que ajudam a evitar erros e melhorar a qualidade do código.

DOM = Document Object Model. Forma que o navegador usa para saber onde e como vai exibir cada elemento na tela. 
Árvore de DOM = Uma estrutura que o navegador cria para representar a página. Essa árvore ajuda o navegador a entender como renderizar a página

DOM Virtual = Cópia do DOM verdadeiro. Usado por bibliotecas e frameworks como o React que irei usar nessa task para melhorar o desempenho das aplicações. O DOM verdadeiro é uma árvore de verdade enquanto o DOM Virtual é uma espécie de rascunho. Quando alguma coisa muda na página, o React age da seguinte forma: 1. Cria uma cópia do DOM no Virtual DOM; 2. Compara o Virtual DOM com o DOM real para ver o que mudou; 3. Atualiza apenas as partes que mudaram no DOM real, em vez de recriar toda a árvore. 

Hook = ferramenta do React para adicionar estado e efeitos a componentes.\
Hook useState: É um hook do React que permite adicionar estado (dados que podem mudar) a um componente funcional. Usado nesse código para gerenciar os valores que serão inseridos. 


---

#Log:
- Criado o componente calculator.tsx (usando tsx para que possa utilizar typescript)
- Dentro do calculator, foram criados 04 estados para armazenar dados no componente com o uso do hook "useState". Sendo "operation" para armazenar o tipo de operação que será realizada, dois "inputs" para armazenar os números a serem utilizados e "result" para o resultado das operações.
- Depois, criei uma função para realizar o cálculo das operações a seguir: Soma, subtração, multiplicação e divisão. A função tem o nome de "handleCalculate" pois ao pesquisar em documentações, percebi um padrão com o termo "handle"
- Ainda nessa função, usei a condicional "switch" para alternar entre as operações. (https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/switch)
- Agora para criação dos radio buttons, utilizei o comando input, setando o tipo dele como "radio", o valor com o nome da operação criada anteriormente, checked para marcar a caixa quando selecionada.
- Todos foram criados dentro de uma tag label pois em pequisas dentro da doc do HTML (https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/label), essa tag é uma recomendação para "formulários". 
- Por fim, um botão de "Calcular" com o evento "onClick" de JS onde ele irá chamar a função de cálculo que criamos no início (https://www.w3schools.com/jsref/event_onclick.asp)
