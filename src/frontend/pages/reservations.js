//render function
function renderReservations(reservations) {
  const container = document.querySelector(".container")
  const div = document.createElement("div");
  reservations.forEach((reservation) => {
    const ul = document.createElement("ul");
    const li = document.createElement("li");

    li.innerHTML = `Name : ${Object.values(reservation.name).join("")} <br> Email : ${Object.values(reservation.email).join("")}
      <br> Phone Number : ${reservation.phone_number} <br> Number of people : ${reservation.number_of_guests}`;
    ul.appendChild(li);
    div.appendChild(ul);
  });

  container.appendChild(div);
}


//reservations route handler
window.handleReservationsRequest = () => {
  document.body.innerHTML = ` 
    <header>
    <h1>Meal Sharing</h1>
    <div class="topnav">
    <ul class="nav">
    <li class="nav-item-bg-info"><a class="nav-link"href="/"> Home</a></li>
    <li class="nav-item"><a class="nav-link"href="meals"> Meals </a></li>
    <li class="nav-item"><a class="nav-link" href="reservations"> Reservations</a></li>
    <li class="nav-item"><a class="nav-link" href="reviews"> Reviews </a></li>
    </ul>
    </div>
    </header>
    
    
    <section class="reservation-sec"> 
    <h2> All Reservations</h2> 
    <div class="container"><div/>
    </section>
    
    <footer>
    <div class="container">
    <ul class="container">
    <li> MEALS SHARING <i class="far fa-copyright"></i> 2020 All Rights Reserved </li>
    <li> Terms | Privacy Policy |  Copyright | Contact </li>
    </ul>
    </div>
    </footer>
    `;

  fetch("/api/reservations")
    .then((response) => response.json())
    .then(renderReservations)

};