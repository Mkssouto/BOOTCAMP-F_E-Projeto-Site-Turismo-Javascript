// Função para adicionar curtidas nos destinos
    
        const button = document.querySelector('#like');
        const number = document.querySelector('#number');

        button.addEventListener('click', () => {
            let likeValue = document.querySelector('#number').textContent;
            let newValue = Number(likeValue) + 1;
            button.classList.add('like');
            number.innerHTML = newValue;
        })
   

// Função Fuso horario

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

           
//             var rightNow = new Date();
//             rightNow = rightNow.toLocaleString('en-GB', {hour: '2-digit',  hour12: false, minute: '2-digit', second: '2-digit', timeZone: 'Europe/London' });
//             Asia/Tokyo    America/Sao_Paulo    America/New_York
//             ja-JP Japanese (Japan)      pt-BR Brazilian Portuguese    en-US US English
//             console.log(rightNow);


            
        


//função adicionar lista desejos

function addMeusDestinos() {

    let list = document.getElementById("rioDeJaneiro").value;

    console.log(list);
    let li = document.createElement("li");
    li.innerText = list;
    ul.appendChild(li);

}


  
//nova função
