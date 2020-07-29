//Form to add a review
const leaveAReview = () => {
	return (document.body.innerHTML = `
	<header>
	<h1>MEAL SHARING</h1> 
	<ul>
	<li><a href="meals"> Menu 
	<ul>
	<li><a href="meals"> meals</a></li>
	<li><a href="reservations"> reservations</a></li>
	<li><a href="reviews"> reviews</a></li>
	</ul>
	</a></li>
	<li><a href="#"> Help</a></li>  <ul>
	<li><a href="meals"> meals</a></li>
	<li><a href="reservations"> reservations</a></li>
	<li><a href="reviews"> reviews</a></li>
	</ul>
	<li><a href="#"> About </a></li>
	<li><a href="#"> Get in touch </a></li>
	<li><a href="#"> reserve a meal</a></li>
	<ul>
	</header>
	
	<h1> Please fill the form below to add your review</h1>
	<form action="../../api/review" method="post">
	<label for="name">Name :</label>
	<input type="number" id="name" name="name" placeholder="please enter name here" required><br><br>
	<label for="title">Title</label>
	<input type="text" id="title" name="title" placeholder="please enter title" required ><br><br>
	<label for="description">Description :</label>
	<input type="text" id="description" name="description" placeholder="please enter text here" required><br><br>
	<label for="meal_id">Meal id</label>
	<input type="text" id="meal_id" name="meal_id" placeholder="please enter the meal id here" required><br><br>
	<input type="submit" value="Submit">
	</form>
	
	<footer>
	<div>
	<ul>
	<li>MEAL SHARING <i class="far fa-copyright"></i> 2020 All Rights Reserved</li>
	<li> Terms| Privacy Policy|  Copyright | Contact </li>
	</ul>
	</div>
	</footer> 
	`);
};

//render function
function renderReview(review) {
	const div = document.createElement("div");
	div.setAttribute("class", "review-div");
	const ul = document.createElement("ul");
	const li = document.createElement("li");

	li.innerHTML = `Name : ${Object.values(review.name).join(
		""
	)} <br> Title : ${Object.values(review.title).join(
		""
	)} <br> Description : ${Object.values(review.description).join("")}`;
	div.appendChild(ul);
	ul.appendChild(li);
	document.body.appendChild(div);
}

//review route handler
window.handleReviewRequest = (params) => {
	document.body.innerHTML = `<h1> Review with id ${params.id}</h1> <br> <p>Leave a review:</p>`;
	document.body.style.backgroundImage =
		"url('https://i.postimg.cc/mr8PKDGF/image.jpg')";

	fetch(`/api/reviews/${params.id}`)
		.then((response) => response.json())
		.then(renderReview);
};
