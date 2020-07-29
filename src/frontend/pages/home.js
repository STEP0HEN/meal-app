//Searching for meals
const matchingTitle = () => {
	const inputValue = document.querySelector(".searchBar").value.toLowerCase();
	fetch("/api/meals")
		.then((response) => response.json())
		.then((result) => {
			const listOfMeals = result.filter(
				(meal) => meal.title.toLowerCase() == inputValue
			);
			if (!inputValue) {
				return !listOfMeals;
			} else {
				listOfMeals.map((item) => {
					const section = document.body.querySelector("section");
					const div = document.createElement("div");
					const ul = document.createElement("ul");
					const li = document.createElement("li");
					li.innerHTML = `<a href="meals/${item.id}"> ${Object.values(
						item.title
					)
						.join("")
						.toUpperCase()} : ${item.price} kr. </a>`;

					div.appendChild(ul);
					ul.appendChild(li);
					//section.appendChild(div)
					section.innerHTML = `<a href="meals/${item.id}">${Object.values(
						item.title
					)
						.join("")
						.toLocaleUpperCase()} : ${item.price} kr</a>`;
				});
			}
		});
};

//Home route handler
window.handleHomeRequest = () => {
	fetch("/api/meals")
		.then((response) => response.json())
		.then((result) => {
			const section = document.querySelector("section");

			const p = document.createElement("p");
			p.innerHTML = ` SELECT YOUR MEAL :`;
			section.appendChild(p);

			result.forEach((element) => {
				const li = document.createElement("li");
				const ul = document.createElement("ul");
				li.innerHTML = `<a href="meals/${element.id}" >${Object.values(
					element.title
				)
					.join("")
					.toUpperCase()} : ${Object.values(element.price).join("")} kr.</a>`;
				ul.appendChild(li);
				section.appendChild(ul);
			});
		});

	document.body.innerHTML = `
    <header >
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
    <div class="search-container">
    <input class="searchBar"  type="text" placeholder="can't find the meal you are looking for in the list? SEARCH HERE"  name="searchValue" onkeyup="matchingTitle()"></input>
    </div>
    <section> </section>

  <footer>
  <div class="container">
  <ul class="parentDiv">
  <li> MEAL SHARING <i class="far fa-copyright"></i> 2020 All Rights Reserved </li>
  <li> Terms | Privacy Policy |  Copyright | Contact </li>
  </ul>
  </div>
  </footer>
  `;

	// if any links are added to the dom, use this function
	// make the router handle those links.

	router.updatePageLinks();
}; 
