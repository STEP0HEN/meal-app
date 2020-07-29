//single meal route handler
window.handleMealRequest = (params) => {
	document.body.innerHTML = `
	<header>
	<h1>Meal Sharing</h1>
	<ul class="topnav">
	<li><a href="/"> Home</a></li>
	<li><a href="meals"> Meals </a></li>
	<li><a href="reservations"> Reservations </a></li>
  <li><a href="reviews"> Reviews </a></li>
  <li><a href="#"> reserve a meal</a></li>
  </ul>
  </header>
  
  <div class="container">
  <h1>Meal no. ${params.id}</h1>
  <section class="mealDiv"> <section>
  </div>
  
  <footer>
  <div class="container">
  <ul class="container">
  <li> MEAL SHARING <i class="far fa-copyright"></i> 2020 All Rights Reserved</li>
  <li> Terms| Privacy Policy|  Copyright | Contact </li>
  </ul>
	</div>
	</footer> 
	`;

	// make sure the backend api works before working with it here
	fetch(`/api/meals/${params.id}`)
		.then((response) => response.json())
		.then(renderMeal);
};

//Form to reserve/order a meal
const reserveMeal = () => {
	return (document.body.innerHTML = `
	<header>
  <h1>Meal Sharing</h1>
  <ul class="topnav">
  <li><a href="/"> Home</a></li>
  <li><a href="meals"> Meals </a></li>
  <li><a href="reservations"> Reservations </a></li>
  <li><a href="reviews"> Reviews </a></li>
  <li><a href="#"> reserve a meal</a></li>
  </ul>
  </header>

	<h2>Please fill form to order meal</h2>
	  <form action="../../api/reservations" method="post">
	  <label for="name">Name:</label>
	  <input type="text" id="name" name="name" required >
	  <label for="email">Email:</label>
	  <input type="text" id="email" name="email" required >
	  <label for="fname">Phonenumber:</label>
	  <input type="text" id="phone_number" name="phone_number" required >
	  <label for="number_of_guest">number of guests:</label>
	  <input type="text" id="number_of_guests" name="number_of_guests" required >
	  <label for="meal_id">meal number</label>
	  <input type="number" id="meal_id" name="meal_id">
	  <input type="submit" value="Submit">
	</form> 
	
	
	<footer>
	<div class="container">
	<ul>
	<li> MEAL SHARING <i class="far fa-copyright"></i> 2020 All Rights Reserved</li>
	<li> Terms| Privacy Policy|  Copyright | Contact </li>
	</ul>
	</div>
	</footer> 
	`);
};

//render meal function

function renderMeal(meal) {
	const ParentDiv = document.querySelector(".mealDIv");
	const div = document.createElement("div");
	const ul = document.createElement("ul");
	const li = document.createElement("li");
	const btn = document.createElement("button");

	li.innerHTML = `<h1>${Object.values(meal.title).join(
		""
	)}</h1><img src="https://images.pexels.com/photos/4553023/pexels-photo-4553023.jpeg?cs=srgb&dl=potatoes-and-mushrooms-with-chicken-in-white-plate-4553023.jpg&fm=jpg"></img> 
	<p>${Object.values(meal.description).join("")}<br>${Object.values(
		meal.price
	).join("")} kr.</br></p>`;
	btn.innerHTML = "Order meal";

	ul.appendChild(li);
	div.appendChild(ul);
	div.appendChild(btn);

	ParentDiv.appendChild(div);

	btn.addEventListener("click", reserveMeal);
}
