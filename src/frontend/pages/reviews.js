//Form to leave a review
const leaveReview = (params) => {
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
  
  
  <h2> Please fill form to leave a Review </h2>
 
  <form action="../../api/reviews" method="post">
  <label for="name">Name : </label>
  <input type="text" id="name" name="name" placeholder="please enter name" required ><br>

  <label for="title">Title : </label>
  <input type="text" id="title" name="title" placeholder="please enter title of review" required ><br>
  
  <label for="description">Description : </label>
  <input type="text" id="description" name="description" placeholder="please describe your experience" required><br>
  
  <label for="meal_id">Meal No.:</label>
  <input type="number" id="meal_id" name="meal_id" placeholder="please enter meal number here" required><br>
  
  <label for="stars">Number Of Stars : </label>
  <input type="number" id="stars" name="stars" placeholder="please enter ratings " min="1" max="5" required><br>
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

//RenderReviews function
function renderReviews(meals) {
	const section = document.querySelector("section");
	const div = document.createElement("div");
	div.setAttribute("class", "review-div");

	meals.forEach((review) => {
		const ul = document.createElement("ul");
		const li = document.createElement("li");

		li.innerHTML = `Name : ${Object.values(review.name).join(
			""
		)} <br> Meal Number : ${review.meal_id}<br>Title : ${Object.values(
			review.title
		).join("")} <br> Description : ${Object.values(review.description).join(
			""
		)}`;
		ul.appendChild(li);
		div.appendChild(ul);
	});

	section.appendChild(div);
}

//Reviews route handler
window.handleReviewsRequest = () => {
	document.body.innerHTML = `
    
    <header>
    <h1>MEAL SHARING</h1>
    <div class="topnav">
  <ul class="nav">
  <li class="nav-item-bg-info"><a class="nav-link"href="/"> Home</a></li>
    <li class="nav-item"><a class="nav-link"href="meals"> Meals </a></li>
    <li class="nav-item"><a class="nav-link" href="reservations"> Reservations</a></li>
    <li class="nav-item"><a class="nav-link" href="reviews"> Reviews </a></li>
    <li><button>Leave a Review</button></li>
    <li></li>
  </ul>
  </div>
  </header>
    
  <section class="reservation-sec"> 
    <h2> All Reviews</h2> 
    <div class="container"><div/>
    </section>

  <footer>
  <div>
  <ul>
  <li> MEAL SHARING <i class="far fa-copyright"></i> 2020 All Rights Reserved</li>
  <li> Terms| Privacy Policy|  Copyright | Contact </li>
  </ul>
  </div>
  </footer> 
    `;

	// make sure the backend api works before working with it here
	fetch("/api/reviews")
		.then((response) => response.json())
		.then(renderReviews);

	const button = document.querySelector("button");
	button.addEventListener("click", leaveReview);
};
