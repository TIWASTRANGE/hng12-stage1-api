# Number Classification API
The Number Classification API is a Node.js-based RESTful API that provides mathematical properties of a given number, including whether it's a prime number, perfect number, Armstrong number, and other related details. Additionally, it fetches a fun fact about the number using the Numbers API.

## Features
### 1. Prime Number Check
Determines if the input number is a prime number.

### 2. Perfect Number Check
Checks if the number is a perfect number (sum of its proper divisors equals the number).

### 3. Armstrong Number Check 
Validates if the number is an Armstrong number.

### 4. Odd/Even Classification
Identifies whether the number is odd or even.

### 5. Digit Sum Calculation 
Computes the sum of all digits in the number.

### 6. Fun Fact
Fetches an interesting trivia about the number using the Numbers API.


## API Specification
Endpoint
GET /api/classify-number?number=<number>

Request Parameters
Parameter	Type	Required	Description
number	Integer	Yes	The number to classify and analyze
Response Format
Success (200 OK)
json
Copy
Edit
{
    "number": 371,
    "is_prime": false,
    "is_perfect": false,
    "properties": ["armstrong", "odd"],
    "digit_sum": 11,
    "trivia": "371 is an Armstrong number because 3^3 + 7^3 + 1^3 = 371"
}
Error (400 Bad Request)
json
Copy
Edit
{
    "number": "invalid-input",
    "error": true
}
Error (500 Internal Server Error)
json
Copy
Edit
{
    "error": "Failed to fetch trivia."
}
Project Setup and Installation
1. Prerequisites
Ensure the following are installed:

Node.js (v16 or later)
npm (Node Package Manager)
A GitHub account
2. Installation Steps
Clone the repository:

bash
Copy
Edit
git clone https://github.com/TIWASTRANGE/hng12-stage1-api.git
cd hng12-stage1-api
Install dependencies:

bash
Copy
Edit
npm install
Create a .env file and set the PORT variable:

env
Copy
Edit
PORT=3000
Start the server:

bash
Copy
Edit
node index.js
Visit the API at:

bash
Copy
Edit
http://localhost:3000/api/classify-number?number=371
Deployment
This API is deployed on Render and publicly accessible at:

arduino
Copy
Edit
https://<your-app-name>.onrender.com/api/classify-number?number=371
Deployment Steps:
Push the code to GitHub.
Log in to Render.
Create a new Web Service and link your GitHub repository.
Configure the deployment settings:
Build Command: npm install
Start Command: node index.js
Render will assign a unique public URL for your API.
How It Works
Input Validation:
The API validates the input to ensure it's an integer. If the input is invalid, a 400 error is returned.

Mathematical Analysis:
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

Error Handling
Invalid Input:
If the input number is not an integer or missing, the API responds with a 400 status code and an error message.
Trivia Fetching Errors:
If the Numbers API fails, a 500 status code is returned with an appropriate error message.
Technologies Used
Backend Framework: Node.js with Express
HTTP Requests: Axios
Deployment Platform: Render
Cross-Origin Resource Sharing (CORS): Enabled for flexibility
File Structure
bash
Copy
Edit
hng12-stage1-api/
├── index.js         # Main server file
├── package.json     # Project dependencies
├── .env             # Environment variables
└── README.md        # Project documentation
Future Improvements
Add support for decimal numbers.
Include additional mathematical properties (e.g., Fibonacci, Happy Numbers).
Improve error handling for edge cases.
References
Numbers API Documentation
Parity in Mathematics (Wikipedia)
Perfect Numbers (Wikipedia)
Armstrong Numbers (GeeksforGeeks)
