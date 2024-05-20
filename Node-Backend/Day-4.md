## Develop a data seeding module that generates mock API responses.

-> src/Controller/dummyDataController
-> src/dummyData.json

## Create a sample POST API that returns a seeded data as a response.

-> src/Controller/dummyDataController

## Develop an authentication middleware using a JWT dummy token.

-> src/Middleware/authMiddleware

## Integrate the authentication middleware with the previously created APIs.

-> src/app

## Write a custom middleware function that logs the incoming requests' method, URL, and timestamp to the console.

-> src/Middlware/logRequests

## Implement an error-handling middleware that captures errors thrown in the route handlers and sends an appropriate error response.

-> src/Middlware/errorHandler

## Write a series of middleware functions and chain them together to demonstrate how multiple middleware can be applied to a single route.

-> src/userRouter -> /register

## Build middleware that adds a custom header to every response. Allow the header value to be configurable.

-> src/Controllers/processParams
-> src/Middleware/ValidationParams
-> src/Routes/userRouter -> /processparams

## Develop middleware that limits the number of requests a user can make in a given time frame. Include parameters for setting the limit.

-> src/Middleware/requestLimiter
