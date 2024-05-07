## Incorporate the validation middleware with the previously developed API.

-> src/Middleware/validationParams

## Write a middleware function to validate user input for a registration form. Check if the required fields are present and if they meet certain criteria (e.g., password strength, email format).

-> src/Middleware/validationRegistration
-> src/config/joi
-> src/controllers/userRegistration

## Create middleware to validate that specific query parameters in a route are numeric. If a non-numeric value is provided, respond with an appropriate error message.

-> src/Middleware/validationParams
-> src/Controller/mockDataController

## Implement middleware to validate the geographic location of the client. If the request is not coming from an expected region, respond with an error.

## User Build a validation middleware that dynamically fetches validation rules from a configuration file. The rules should be applied based on the route being accessed.

-> src/Middleware/validationRegistration
-> src/config/joi
-> src/controllers/userRegistration
