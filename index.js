require("dotenv").config();

const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();

app.use(cors());

// Prime Number Check
function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Perfect Number Check
function isPerfect(num) {
    let sum = 1;
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) {
            sum += i;
            if (i !== num / i) sum += num / i;
        }
    }
    return sum === num && num !== 1;
}

// Armstrong Number Check
function isArmstrong(num) {
    const digits = num.toString().split("").map(Number);
    const power = digits.length;
    return digits.reduce((sum, digit) => sum + Math.pow(digit, power), 0) === num;
}

// Digit Sum Calculation
function digitSum(num) {
    return num.toString().split("").reduce((sum, digit) => sum + parseInt(digit), 0);
}

// Get Properties
function getProperties(num) {
    let properties = [];
    if (isArmstrong(num)) properties.push("armstrong");
    properties.push(num % 2 === 0 ? "even" : "odd");
    return properties;
}

// API Endpoint
app.get("/api/classify-number", async (req, res) => {
    const { number } = req.query;

    // Validate input: must be a positive integer
    if (!/^\d+$/.test(number)) {
        return res.status(400).json({ 
            number: number, 
            error: true, 
        });
    }

    const num = parseInt(number);

    try {
        const { data: trivia } = await axios.get(`http://numbersapi.com/${num}/math?json`);
        res.json({
            number: num,
            is_prime: isPrime(num),
            is_perfect: isPerfect(num),
            properties: getProperties(num),
            digit_sum: digitSum(num),
            trivia: trivia.text,
        });
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch trivia." });
    }
});

// Start Server
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
