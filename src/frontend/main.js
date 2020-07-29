var root = document.location.origin;
var router = new Navigo(root);

// when no route specified it assumes the base route: "/"
router.on(window.handleHomeRequest).resolve();
router.on("/meals", window.handleMealsRequest).resolve();
router.on("/meals/:id", window.handleMealRequest).resolve();
router.on("/reviews", window.handleReviewsRequest).resolve();
router.on("/reviews/:id", window.handleReviewRequest).resolve();
router.on("/reservations", window.handleReservationsRequest).resolve();
router.on("/reservations/:id", window.handleReservationRequest).resolve();