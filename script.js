document.addEventListener("DOMContentLoaded", function() {
        // Função para obter uma posição aleatória na tela
        function getRandomPosition() {
            var screenHeight = window.innerHeight;
            var screenWidth = window.innerWidth;
            var randomX = Math.random() * (screenWidth - 100); // Largura do botão
            var randomY = Math.random() * (screenHeight - 40); // Altura do botão
            return [randomX, randomY];
        }

        // Adicionar evento de mouseover ao botão "Não"
        document.getElementById("botaoNao").addEventListener("mouseover", function() {
            var position = getRandomPosition();
            this.style.position = 'absolute';
            this.style.left = position[0] + 'px';
            this.style.top = position[1] + 'px';
        });

        // Adicionar evento de clique aos botões "Sim" e "Claro"
        document.getElementById("botaoSim").addEventListener("click", function() {
            alert("Achei que não iria aceitar kkkkk !");
        });

        document.getElementById("botaoClaro").addEventListener("click", function() {
            alert("Se clicou em claro é porque você está apaixonada !! Printa e manda pra mim.");
        });
    });

    