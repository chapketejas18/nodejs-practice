## Incorporate the error handling middleware with the previously developed API.

-> src/Middleware/errorHandler

## Create scenarios that generate all possible error codes.

-> Done in every Controllers & Middlewares.

## Create an asynchronous route that intentionally throws an error.Implement error handling for asynchronous errors within the route.Send an appropriate response to the client, indicating the error.

-> Done in arc/Routes/userRouter -> /errorhandler

## Create a route that expects certain parameters in the request. Implement validation checks and throw a validation error if the checks fail. Handle validation errors gracefully and send a JSON response with error details.

-> src/Middleware/validationParams
-> src/Controllers/processParams
