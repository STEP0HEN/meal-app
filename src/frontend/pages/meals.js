//random images src to fil the meals src
const imgArray = [
	"https://images.pexels.com/photos/2318966/pexels-photo-2318966.jpeg?cs=srgb&dl=vegetables-and-noodles-in-plates-on-table-2318966.jpg&fm=jpg",
	"https://images.pexels.com/photos/1508659/pexels-photo-1508659.jpeg?cs=srgb&dl=close-up-photo-of-assorted-type-of-dishes-1508659.jpg&fm=jpg",
	"https://images.pexels.com/photos/1600711/pexels-photo-1600711.jpeg?cs=srgb&dl=club-sandwich-served-on-chopping-board-1600711.jpg&fm=jpg",
	"https://images.pexels.com/photos/1860204/pexels-photo-1860204.jpeg?cs=srgb&dl=food-in-a-plate-1860204.jpg&fm=jpg",
	"https://images.pexels.com/photos/323682/pexels-photo-323682.jpeg?cs=srgb&dl=close-up-of-meal-served-in-plate-323682.jpg&fm=jpg",
];
const randomImages = imgArray[Math.floor(Math.random() * imgArray.length)];

//Form to order meal / book seat for an existing meal
const orderMeal = () => {
	return (document.body.innerHTML = `
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
  
  <h2> Please fill the form below to place your order</h2>
  <form action="../../api/reservations" method="post">
  <label for="name">Name:</label>
  <input type="text" id="name" name="name" placeholder="please enter your name" required >
  <label for="email">email:</label>
  <input type="text" id="email" name="email" placeholder="please enter your email" required>
  <label for="phone">Phone no.:</label>
  <input type="number" id="phone" name="phone" placeholder="please enter phone number" required>
  <label for="meal_id">meal number:</label>
  <input type="text" id="meal_id" name="meal_id" placeholder="please enter the meal id " required>
  <label for="number_of_guests">Number of guests:</label>
  <input type="number" id="number_of_guests" name="number_of_guests" placeholder="please indicate how many people" required>
  <input type="submit" value="Submit">
  </form> 
  
  <footer>
  <div>
  <ul>
  <li>STEFAMEALS <i class="far fa-copyright"></i> 2020 All Rights Reserved</li>
  <li> Terms| Privacy Policy|  Copyright | Contact </li>
  </ul>
  </div>
  </footer> 
  `);
};

//Form to create new meal
const createMeal = () => {
	return (document.body.innerHTML = `
  
  <header>
  <h1>Meal Sharing</h1>
  <div class="topnav">
  <ul class="nav">
  
  <li><a href="/"> Home</a></li>
  <li><a href="meals"> Meals </a></li>
  <li><a href="reservations"> Reservations</a></li>
  <li><a href="reviews"> Reviews </a></li>
  
  </ul>
  </div>
  </header>
  
  <h2> Please fill the form below to create your own meal </h2>
  <form action="../../api/meals" method="post">
  <label for="title">Title:</label>
  <input type="text" id="title" name="title" placeholder="please enter name of food..." required >
  <label for="description">Description:</label>
  <input type="text" id="description" name="description" placeholder="please describe the meal..." required>
  <label for="location">Location :</label>
  <input type="text" id="location" name="location" placeholder="please enter location" required>
  <label for="when">When:</label>
  <input type="text" id="when" name="when" placeholder="please enter arrival time" required>
  <label for="max_reservations">Max reservations:</label>
  <input type="number" id="max_reservations" name="max_reservations" placeholder="how many orders per meal?" required>
  <label for="price">Price:</label>
  <input type="number" id="price" name="price" placeholder="please enter price 000.00" required>
  <input type="submit" value="Submit">
  
  </form>
  
  <footer>
  <div>
  <ul>
  <li> MEAL SHARING <i class="far fa-copyright"></i> 2020 All Rights Reserved</li>
  <li> Terms| Privacy Policy|  Copyright | Contact </li>
  </ul>
  </div>
  </footer> 
  `);
};

//Render meals function
function renderMeals(meals) {
	meals.forEach((meal) => {
		const section = document.querySelector("section");
		const div = document.createElement("div");
		const ul = document.createElement("ul");
		const li = document.createElement("li");
		const img = document.createElement("img");
		const btn = document.createElement("button");

		li.innerHTML = `${meal.id}. ${Object.values(meal.title)
			.join("")
			.toUpperCase()} <br> ${meal.description} <br> ${meal.price}kr.`;
		img.src = `${randomImages}`;
		btn.textContent = "Book Seat";
		div.setAttribute("class", "mealDiv");

		div.appendChild(img);
		ul.appendChild(li);
		div.appendChild(ul);
		ul.appendChild(btn);
		section.appendChild(div);

		btn.addEventListener("click", orderMeal);
	});
}

//meals route handler
window.handleMealsRequest = () => {
	document.body.innerHTML = `
 
  <header>
  <h1>Meal Sharing</h1>
  <div class="topnav">
  <ul class="nav">
  <li class="nav-item-bg-info"><a class="nav-link"href="/"> Home</a></li>
    <li class="nav-item"><a class="nav-link"href="meals"> Meals </a></li>
    <li class="nav-item"><a class="nav-link" href="reservations"> Reservations</a></li>
    <li class="nav-item"><a class="nav-link" href="reviews"> Reviews </a></li>
  <li><button>Create A meal</button></li>
  </ul>
  </div>
  </header>

  <section class="container">

  </section>

  <footer>
  <div class="container">
  <ul>
  <li> MEAL SHARING <i class="far fa-copyright"></i> 2020 All Rights Reserved </li>
  <li> Terms | Privacy Policy |  Copyright | Contact </li>
  </ul>
  </div>
  </footer>
  `;

	// make sure the backend api works before working with it here
	fetch("/api/meals")
		.then((response) => response.json())
		.then(renderMeals);

	//eventListener added to button to create meal
	const button = document.body.querySelector("button");
	button.addEventListener("click", createMeal);
};
