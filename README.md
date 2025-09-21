# 🎁 Desafio Amigo Secreto - Alura ONE

Este projeto foi desenvolvido como parte do desafio de programação do programa **Oracle Next Education (ONE)** em parceria com a **Alura**. O objetivo era criar uma aplicação web interativa e funcional para realizar sorteios de amigo secreto de forma simples e divertida.

---

## 🎯 Sobre o Projeto

O **Sorteador de Amigo Secreto** é uma aplicação front-end que permite aos usuários:
1.  Adicionar uma lista de participantes para o sorteio.
2.  Visualizar todos os nomes adicionados em tempo real.
3.  Realizar um sorteio individual, revelando um amigo secreto por vez.
4.  Reiniciar completamente o sistema para um novo evento.

A interface foi projetada para ser limpa, intuitiva e com uma ótima experiência de usuário, evitando alertas e pop-ups intrusivos.

---

## ✅ Funcionalidades Implementadas

-   **Adição de Nomes:** Campo de texto para inserir os nomes dos participantes um a um, com a opção de usar a tecla "Enter".
-   **Validação Avançada de Entrada:** O sistema impede a adição de nomes em branco ou nomes que já foram incluídos na lista.
-   **Feedback Visual Imediato:** Em vez de alertas, o sistema exibe mensagens de status e erro de forma suave na própria tela.
-   **Lista de Participantes Dinâmica:** Os nomes adicionados são exibidos instantaneamente na tela, e os nomes já sorteados são visualmente marcados (riscados).
-   **Sorteio Progressivo:** Ao clicar em "Sortear", um único nome é sorteado da lista de participantes restantes, garantindo que ninguém seja sorteado duas vezes.
-   **Reinicialização Completa:** Um botão "Reiniciar" limpa todos os dados da aplicação (lista de nomes, resultados e mensagens), deixando-a pronta para um novo sorteio.

---

## 💻 Recursos Utilizados

O projeto foi construído utilizando as tecnologias fundamentais do desenvolvimento web front-end:

-   **HTML5:** Para a estrutura semântica da página.
-   **CSS3:** Para a estilização, layout e design, utilizando recursos modernos como Flexbox, variáveis CSS (`:root`) e `backdrop-filter` para um visual aprimorado.
-   **JavaScript (ES6+):** Para toda a lógica, interatividade, manipulação do DOM e gerenciamento de estado da aplicação.

---

## 🧠 Como Funciona o Programa

A lógica da aplicação é gerenciada inteiramente pelo JavaScript, dividida em funções claras e com responsabilidades bem definidas.

### 1. Estrutura de Dados
-   Um array chamado `amigos` armazena a lista principal de todos os participantes adicionados.
-   Um segundo array, `sorteaveis`, é uma cópia da lista principal que é usada para controlar quem ainda pode ser sorteado. A cada sorteio, o nome é removido desta lista.

### 2. Adicionar Nomes (`adicionarNomes()`)
-   Esta função captura o valor do campo de texto.
-   Ela valida se o campo não está vazio e se o nome já não existe no array `amigos`.
-   Se a validação for bem-sucedida, o nome é adicionado ao array `amigos` e a função `atualizarLista()` é chamada para sincronizar a interface.
-   Caso contrário, a função `mostrarMensagem()` exibe um erro na tela.

### 3. Realizar o Sorteio (`sortearAmigo()`)
-   Esta função contém a lógica central do sorteio.
-   Primeiro, ela verifica se a lista `sorteaveis` está vazia. Se estiver, e o sorteio ainda não tiver começado, ela popula `sorteaveis` com todos os nomes da lista `amigos`.
-   Utiliza `Math.random()` para gerar um índice aleatório baseado no tamanho atual do array `sorteaveis`.
-   O nome sorteado é selecionado e removido (com `splice`) da lista `sorteaveis`, garantindo que não possa ser sorteado novamente.
-   O resultado é exibido na tela e o nome correspondente na lista de participantes recebe a classe `.sorteado` para ser estilizado como "já sorteado".

### 4. Reiniciar (`reiniciarJogo()`)
-   Responsável por "limpar" a aplicação para um novo uso.
-   Ela redefine os arrays `amigos` e `sorteaveis` para arrays vazios (`[]`).
-   Limpa o conteúdo HTML (`innerHTML = ''`) da lista de participantes, da área de resultado e das mensagens de status, removendo-os da tela.

---

## 📂 Como Executar

Este é um projeto estático, não necessitando de um servidor ou dependências complexas.

1.  Faça o download ou clone este repositório.
2.  Abra o arquivo `index.html` em seu navegador de preferência.
3.  Pronto! A aplicação estará funcionando.

---

Desenvolvido por Matheus Araujo.


[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/matheuspaulucci/)
