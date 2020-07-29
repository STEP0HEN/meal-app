const express = require("express");
const app = express();
const router = express.Router();
const knex = require("../database");

//Get all review
router.get("/", async (request, response) => {
	try {
		// knex syntax for selecting things. Look up the documentation for knex for further info
		const review = await knex("review").select("*");
		response.json(review);
	} catch (error) {
		throw error;
	}
});

//Get review with specific id
router.get("/:id", async (request, response) => {
	try {
		const reviewWithId = await knex("review")
			.select("*")
			.where({ id: request.params.id });
		if (reviewWithId.length === 0) {
			response.send("sorry review not found");
		} else {
			response.json(reviewWithId[0]);
		}
	} catch (error) {
		throw error;
	}
});

//Add review to DB
router.post("/", async (request, response) => {
	const { name, title, description, meal_id, stars, created_date } = request.body;
	try {
		const newReview = {
			name,
			title,
			description,
			meal_id,
			stars,
			created_date,
		};
		await knex("review").insert(newReview);
		response.send("review sent succesfuly, thank you");
	} catch (error) {
		throw error;
	}
});

//Update a review by id
router.put("/:id", async (req, res) => {
	try {
		const reservationToBeUpdated = await knex("review")
			.where({ id: req.params.id })
			.update({
				title: req.query.title,
				meal_id: req.query.meal_id,
			});
		res.send("review updated succesfully");
	} catch (error) {
		throw error;
	}
});

//Delete a review by id
router.delete("/:id", async (req, res) => {
	try {
		const reservationToBeDeleted = await knex("review")
			.where({ id: req.params.id })
			.delete();
		res.send("review deleted succesfully from database");
	} catch (error) {
		throw error;
	}
});

module.exports = router;
