//create a div 
const div = document.createElement('div');
div.className = 'div-content'

//fetch our data form our server
//create a function that will return all films
function getFilms(){
    //fetch method
    fetch('http://localhost:3000/films')
    //making a promise
    //converting the string response to an object json
    .then(response => response.json())
    .then(data => {

        data.forEach(film => {
            //create a div that will contain img, p

            const divList = document.createElement('div');
            divList.className = 'divList-content';
            const image = document.createElement('img');
            image.className ='posters';
            const title = document.createElement('h3');
            title.className = 'title';
            const description = document.createElement('p');
            const capacity = document.createElement('p');
            const ticketSold = document.createElement('p');
            const buttonTicket = document.createElement('button');
            buttonTicket.className = 'ticket';
            const divTime = document.createElement('div');
            divTime.className = 'divTime'
            const runTime = document.createElement('p');
            const showTime = document.createElement('p')

            
            image.src =`${film.poster}`
            title.textContent = `${film.title}`
            description.textContent =`${film.description}`
            capacity.textContent =`Capacity: ${film.capacity}`
            ticketSold.textContent = `Ticket Sold: ${film.tickets_sold}`
            buttonTicket.textContent = 'Buy Ticket';
            runTime.textContent =`Duration: ${film.runtime} Minutes`
            showTime.textContent =`${film.showtime}`

        //append the child element to the parent element
        document.body.appendChild(div);
        div.appendChild(divList);
        divList.appendChild(image);
        divList.appendChild(title);
        divList.appendChild(description);
        divList.appendChild(capacity);
        divList.appendChild(ticketSold);
        divList.appendChild(buttonTicket);
        divList.appendChild(divTime)
        divTime.appendChild(runTime);
        divTime.appendChild(showTime);
        console.log(div);

        //available tickets using conditional statement
        buttonTicket.addEventListener("click", () => {
            if (film.tickets_sold < film.capacity) {
              film.tickets_sold++;
              ticketSold.textContent = film.capacity - film.tickets_sold;
            } else {
              alert("Sorry, this showing is sold out.");
            }
        });

        });
         
    })
}
//call the function
const fetchData = getFilms();