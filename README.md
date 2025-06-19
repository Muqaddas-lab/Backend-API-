# 📦 Node.js API Projects

This repository contains three simple Express.js-based APIs:

1. ✅ BMI Calculator API
2. ✅ Palindrome Checker API
3. ✅ Calculator API (Add & Subtract)

---

## 🔧 Technologies Used

- Node.js
- Express.js
- JavaScript (ES6)
- Postman (for API testing)

---

# 1️⃣ BMI Calculator API

### 📌 Endpoint
`POST /bmi`

### 📥 Request Body (JSON)
```json
{
  "height": 1.75,
  "weight": 70
}
📤 Response
json

{
  "success": true,
  "data": {
    "BMI": "22.86",
    "status": "Normal weight"
  }
}
✅ BMI Logic
BMI = weight / (height * height)
📊 BMI Status Categories:
BMI < 18.5 → Underweight

18.5 ≤ BMI < 24.9 → Normal weight

25 ≤ BMI < 29.9 → Overweight

BMI ≥ 30 → Obese

2️⃣ Palindrome Checker API
📌 Endpoint
POST /palindrome

📥 Request Body (JSON)
json
{
  "word": "madam"
}
📤 Response
json
{
  "isPalindrome": true
}
✅ Palindrome Logic
Converts word to lowercase

Removes extra spaces

Reverses word and checks equality

3️⃣ Calculator API (Add & Subtract)
➕ Add Two Numbers
📌 Endpoint:
GET /calc/add?num1=5&num2=7

📤 Response:
json
{
  "success": true,
  "result": 12
}
➖ Subtract Two Numbers
📌 Endpoint:
GET /calc/subtract/:a/:b
Example: /calc/subtract/10/3

📤 Response:
json
{
  "success": true,
  "result": 7
}
📁 Folder Structure

project/
│
├── controllers/
│   ├── bmiController.js
│   ├── wordController.js
│   └── calController.js
│
├── routers/
│   ├── bmiRoutes.js
│   ├── wordRoutes.js
│   └── calRoutes.js
│
├── app.js
├── package.json
└── README.md
🧪 Testing Tools
Postman for API testing

