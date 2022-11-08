// Inicio Função Fuso horario
// Mostra o fuso horario em diferentes paises. 
// Rio de Janeiro, NY, Londres e Toquio
// Foram adicionados horas aos locais diferentes do Brasil
// Não contempla as diferenças de horario de verão

        function clock(hourId, minuteId, secondId, hourAdd=0){
            var date = new Date();
            if (hourAdd !== 0) {
                date.setHours(date.getHours() + hourAdd);   
            }
            var hour = date.getHours();         
            var minute = date.getMinutes();
            var second = date.getSeconds();

            if(hour < 10){
                hour="0"+hour;
            }
            if(minute < 10){
                minute="0"+minute;
            }
            if(second < 10){
                second="0"+second;
            }
            
            

            document.getElementById(hourId).innerHTML = hour;
            document.getElementById(minuteId).innerHTML = minute;
            document.getElementById(secondId).innerHTML = second;
        }

        var interval = setInterval( () => {
            clock("hour", "minutes", "seconds")
        }, 1000);

        var intervalLondres = setInterval( () => {
            clock("hourL", "minutesL", "secondsL", 4 )
        }, 1000);

        var intervalNovaYork = setInterval( () => {
            clock("hourNY", "minutesNY", "secondsNY", -1 )
        }, 1000);

        var intervalToquio = setInterval( () => {
            clock("hourT", "minutesT", "secondsT", 12 )
        }, 1000);

// Fim Função Fuso horario
        
        

// Inicio função loader spinner e placeholder
// Inicia com spiner de carregamento 
// Apos carregamento e durante 3 segundos o placeholderpara se mantem
// Apos os 3 segundos inicia o site


window.addEventListener("load", function() {
    document.querySelector(".spinner-border").style.display = "none";
    setTimeout(() => {
      document.querySelector("#topo").removeAttribute("style");
      document.querySelector("#mainPage").removeAttribute("style");
      document.querySelector("#contatos").removeAttribute("style");
      document.querySelector("#placeholder").style.display = 'none';
  
    

const catalogosMioloBrasil = document.querySelector(".catalogoBrasil");
const carouselClassBrasil = new Carousel(catalogosMioloBrasil, catalogos.catalogoBrasil,".catalogoBrasil", "catalogoBrasil");
carouselClassBrasil.generateCarousel();
carouselClassBrasil.initCarousel();

const catalogosMioloEuropa = document.querySelector(".catalogoEuropa");
const carouselClassEuropa = new Carousel(catalogosMioloEuropa, catalogos.catalogoEuropa, ".catalogoEuropa", "catalogoEuropa");
carouselClassEuropa.generateCarousel();
carouselClassEuropa.initCarousel();

const catalogosMioloEUA = document.querySelector(".catalogoEUA");
const carouselClassEUA = new Carousel(catalogosMioloEUA, catalogos.catalogoEUA, ".catalogoEUA", "catalogoEUA");
carouselClassEUA.generateCarousel();
carouselClassEUA.initCarousel();

const catalogosMioloAmerS = document.querySelector(".catalogoAmerS");
const carouselClassAmerS = new Carousel(catalogosMioloAmerS, catalogos.catalogoAmerS, ".catalogoAmerS", "catalogoAmerS");
carouselClassAmerS.generateCarousel();
carouselClassAmerS.initCarousel();

const catalogosMioloAmerCN = document.querySelector(".catalogoAmerCN");
const carouselClassAmerCN = new Carousel(catalogosMioloAmerCN, catalogos.catalogoAmerCN, ".catalogoAmerCN", "catalogoAmerCN");
carouselClassAmerCN.generateCarousel();
carouselClassAmerCN.initCarousel();

const catalogosMioloAsia = document.querySelector(".catalogoAsia");
const carouselClassAsia = new Carousel(catalogosMioloAsia, catalogos.catalogoAsia, ".catalogoAsia", "catalogoAsia");
carouselClassAsia.generateCarousel();
carouselClassAsia.initCarousel();

const catalogosMioloOceania = document.querySelector(".catalogoOceania");
const carouselClassOceania = new Carousel(catalogosMioloOceania, catalogos.catalogoOceania, ".catalogoOceania", "catalogoOceania");
carouselClassOceania.generateCarousel();
carouselClassOceania.initCarousel();

const catalogosMioloAfrica = document.querySelector(".catalogoAfrica");
const carouselClassAfrica = new Carousel(catalogosMioloAfrica, catalogos.catalogoAfrica, ".catalogoAfrica", "catalogoAfrica");
carouselClassAfrica.generateCarousel();
carouselClassAfrica.initCarousel();

    }, 3000);
  });


document.addEventListener("DOMContentLoaded", function () {
    $("body").tooltip({ selector: "[data-toggle=tooltip]" });
  });

//fim função loader spinner e placeholder



// inicio função para adicionar curtidas nos destinos
    
        // const button = document.querySelector('#like');
        // const number = document.querySelector('#number');

        // button.addEventListener('click', () => {
        //     let likeValue = document.querySelector('#number').textContent;
        //     let newValue = Number(likeValue) + 1;
        //     button.classList.add('like');
        //     number.innerHTML = newValue;
        // })

// fim função para adicionar curtidas nos destinos


//função adicionar lista desejos

// function addMeusDestinos() {

//     let list = document.getElementById("rioDeJaneiro").value;

//     console.log(list);
//     let li = document.createElement("li");
//     li.innerText = list;
//     ul.appendChild(li);

// }
 //Fim função adicionar lista de desejos