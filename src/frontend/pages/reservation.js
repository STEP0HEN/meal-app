//render function
function renderReservation(reservation) {
	const div = document.createElement("div");
	const ul = document.createElement("ul");
	const li = document.createElement("li");

	li.innerHTML = `Name : ${Object.values(reservation.name).join(
		""
	)} <br> Email : ${Object.values(reservation.email).join("")}
	<br> Phone Number : ${reservation.phone_number} <br> Number of people : ${
		reservation.number_of_guests
	}`;
	ul.appendChild(li);
	div.appendChild(ul);
	document.body.appendChild(div);
}

//reservation route handler
window.handleReservationRequest = (params) => {
	document.body.innerHTML = `
  <header>
  <h1>Meal Sharing</h1> 
  <ul>
  <li><a href="/"> Home</a></li>
  <li><a href="meals"> Meals </a></li>
  <li><a href="reservations"> Reservations</a></li>
  <li><a href="reviews"> Reviews </a></li>
  <ul>
  </header>
  
  <h1> Reservations with id ${params.id}</h1>`;
	document.body.style.backgroundImage =
		"url('https://i.postimg.cc/g2SFb1Nr/image-2.jpg')";
	// make sure the backend api works before working with it here
	fetch(`/api/reservations/${params.id}`)
		.then((response) => response.json())
		.then(renderReservation);
};
