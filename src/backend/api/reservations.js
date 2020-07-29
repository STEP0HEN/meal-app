const express = require("express");
const app = express();
const router = express.Router();
const knex = require("../database");

//Get all reservations
router.get("/", async (request, response) => {
	try {
		const reservations = await knex("reservation").select("*");
		response.json(reservations);
	} catch (error) {
		throw error;
	}
});

//Get reservations with specific id
router.get("/:id", async (request, response) => {
	try {
		const reservationWithId = await knex("reservation")
			.select("*")
			.where({ id: request.params.id });
		if (reservationWithId.length === 0) {
			response.send("sorry reservation not found");
		} else {
			response.json(reservationWithId[0]);
		}
	} catch (error) {
		throw error;
	}
});

//Add reservation to DB
router.post("/", async (request, response) => {
	try {
		const {name,email,phone,meal_id,number_of_guests} = request.body;
		const newReservation = {
			name, 
			email,
			phone, 
			meal_id,
			number_of_guests,
		};
		await knex("reservation").insert(newReservation);
		response.send("reservation made succesfuly, thank you");
	} catch (error) {
		throw error;
	}
});

//Update a reservation by id
router.put("/:id", async (req, res) => {
	try {
		const reservationToBeUpdated = await knex("reservation")
			.where({ id: req.params.id })
			.update({
				number_of_guests: req.query.number_of_guests,
				meal_id: req.query.meal_id,
			});
		res.send("reservation updated succesfully");
	} catch (error) {
		throw error;
	}
});

//Delete a reservation by id
router.delete("/:id", async (req, res) => {
	try {
		const reservationToBeDeleted = await knex("reservation")
			.where({ id: req.params.id })
			.delete();
		res.send("reservation deleted succesfully from database");
	} catch (error) {
		"error", error;
	}
});

module.exports = router;
