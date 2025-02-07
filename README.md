# Number Classification API
The Number Classification API is a Node.js-based RESTful API that provides mathematical properties of a given number, including whether it's a prime number, perfect number, Armstrong number, and other related details. Additionally, it fetches a fun fact about the number using the Numbers API.

## Features
### 1. Prime Number Check
A prime number is a number greater than 1 that has no divisors other than 1 and itself.
For example:

Prime numbers: 2, 3, 5, 7, 11

### 2. Perfect Number Check
A perfect number is a positive integer that equals the sum of its proper divisors (excluding itself).
For example:

6: Divisors = 1, 2, 3 → 1 + 2 + 3 = 6 (Perfect)

### 3. Armstrong Number Check 
An Armstrong number (or Narcissistic number) is a number equal to the sum of its digits raised to the power of the number of digits.
For example:

371 (has 3 digit, sum of digits multiplied by itself 3 times): (3^3) + (7^3) + (1^3) = 371 (Armstrong)

### 4. Odd/Even Classification
A number is classified as:

Odd: Not divisible by 2 (remainder is 1). Examples: 1, 3, 5, 7, 9

Even: Divisible by 2 (remainder is 0). Examples: 2, 4, 6, 8, 10

### 5. Digit Sum Calculation 
Computes the sum of all digits in the number.

### 6. Fun Fact
Fetches an interesting trivia about the number using the Numbers API.


## API Specification
Endpoint: 
GET /api/classify-number?number=<number>

Request Parameters

Response Format: 
Success (200 OK)

{

    "number": 371,
    
    "is_prime": false,
    
    "is_perfect": false,
    
    "properties": ["armstrong", "odd"],
    
    "digit_sum": 11,
    
    "trivia": "371 is an Armstrong number because 3^3 + 7^3 + 1^3 = 371"
    
}

Error (400 Bad Request):
json

{

    "number": "invalid-input",
    
    "error": true
    
}

Error (500 Internal Server Error):
json

{

    "error": "Failed to fetch trivia."
    
}

### Project Setup and Installation
#### 1. Prerequisites
   
Ensure the following are installed:

Node.js (v20 or later)

npm (Node Package Manager)

A GitHub account

#### 2. Installation Steps
- Clone the repository:

git clone https://github.com/TIWASTRANGE/hng12-stage1-api.git

cd hng12-stage1-api

- Install dependencies:

npm install

- Create a .env file and set the PORT variable:

PORT=3000

- Start the server:

npm run dev 

- Visit the API at:

http://localhost:3000/api/classify-number?number=371
  
- Deployment

This API is deployed on Render and publicly accessible at:

https://hng12-stage1-api-v1.onrender.com/api/classify-number?number=371

### How It Works

- Input Validation: 
The API validates the input to ensure it's an integer. If the input is invalid, a 400 error is returned.

- Mathematical Analysis: 
The API calculates the following properties:

Prime: Checks divisibility to determine if it's prime.

Perfect: Sum of divisors is compared to the number.

Armstrong: Validates if the number satisfies Armstrong's property.

Odd/Even: Determines parity.

Digit Sum:
Adds up all digits in the number.

Fun Fact Fetching:
Uses the Numbers API (http://numbersapi.com/<number>/math?json) to fetch trivia.

Response Construction:
Combines all computed properties into a JSON response and sends it back.

- Error Handling
  
Invalid Input: 
If the input number is not an integer or missing, the API responds with a 400 status code and an error message.

Trivia Fetching Errors: 
If the Numbers API fails, a 500 status code is returned with an appropriate error message.

- Technologies Used

Backend Framework: Node.js with Express

HTTP Requests: Axios

Deployment Platform: Render

Cross-Origin Resource Sharing (CORS): Enabled for flexibility

### Future Improvements

Add support for decimal numbers.

Include additional mathematical properties (e.g., Fibonacci, Happy Numbers).

### References
Numbers API Documentation: http://numbersapi.com/#42

Parity in Mathematics (Wikipedia): https://en.wikipedia.org/wiki/Parity_(mathematics)
