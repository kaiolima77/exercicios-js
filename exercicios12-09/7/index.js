/*Receber valores de base e altura de um triângulo e verificar se são valores válidos
(positivos maiores que zero). Em caso afirmativo, calcular a área do triângulo.
*/

let base, altura, area;
    base = prompt("Informe a base do triângulo: ");
    altura = prompt("Agora informe a altura do triângulo: ");
      if (base > 0 && altura > 0){
        area = (parseFloat)(altura * base) / 2;
        alert("A área do triângulo é: " + area);
      }
      else if (alert("Você inseriu um número inválido para a base ou altura :(")){
        
      }
        
      


      