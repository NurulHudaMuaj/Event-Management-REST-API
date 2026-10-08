# Event-Management-REST-API
# Event Management REST API

A backend REST API for managing events, users, authentication, and event-related operations. This project is built with **Node.js, Express.js, MongoDB, and Mongoose**, with **JWT-based authentication** for protected routes.

## 🚀 Features

* User registration and login
* JWT-based authentication
* Protected API routes
* User role management (`user`, `admin`)
* Create, read, update, and delete events
* Event organizer management
* Event validation using Mongoose
* Pagination for event listing
* Field selection for API responses
* MongoDB database integration
* Centralized error handling
* Password hashing with bcrypt
* Environment variable configuration
* RESTful API architecture

## 🛠️ Technologies Used

* **Node.js**
* **Express.js**
* **MongoDB**
* **Mongoose**
* **JSON Web Token (JWT)**
* **bcryptjs**
* **dotenv**
* **Postman** for API testing

## 📁 Project Structure

```text
Event-Management-REST-API/
│
├── src/
│   ├── config/
│   │   └── db.js
│   │
│   ├── controller/
│   │   ├── authController.js
│   │   └── eventController.js
│   │
│   ├── middleware/
│   │   ├── auth.js
│   │   └── errorHandler.js
│   │
│   ├── model/
│   │   ├── User.js
│   │   └── Event.js
│   │
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── eventRoutes.js
│   │   └── index.js
│   │
│   ├── app.js
│   └── server.js
│
├── .env
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/NurulHudaMuaj/Event-Management-REST-API.git
```

### 2. Go to the project directory

```bash
cd Event-Management-REST-API
```

### 3. Install dependencies

```bash
npm install
```

### 4. Create a `.env` file

Create a `.env` file in the project root directory:

```env
PORT=5001
NODE_ENV=development

MONGODB_URL=mongodb://admin:admin123@localhost:27017/event_db?authSource=admin

JWT_SECRET=your_secret_key
JWT_EXPIRES_IN=7d

ALLOWED_ORIGIN=["http://localhost:5001","http://localhost:5002"]
```

> Never commit your `.env` file or expose your database credentials and JWT secret publicly.

### 5. Start the server

For development:

```bash
npm run dev
```

Or:

```bash
node src/server.js
```

The API will run on:

```text
http://localhost:5001
```

## 🔐 Authentication

This API uses **JWT (JSON Web Token)** for authentication.

After logging in successfully, the API returns a token.

For protected routes, send the token using the `Authorization` header:

```text
Authorization: Bearer YOUR_JWT_TOKEN
```

### Protected Routes

* `GET /api/auth/me`
* `POST /api/events`
* `PUT /api/events/:id`
* `DELETE /api/events/:id`

## 📌 API Endpoints

### Authentication

| Method | Endpoint             | Description         | Protected |
| ------ | -------------------- | ------------------- | --------- |
| POST   | `/api/auth/register` | Register a new user | No        |
| POST   | `/api/auth/login`    | Login user          | No        |
| GET    | `/api/auth/me`       | Get current user    | Yes       |

### Events

| Method | Endpoint          | Description        | Protected |
| ------ | ----------------- | ------------------ | --------- |
| GET    | `/api/events`     | Get all events     | No        |
| GET    | `/api/events/:id` | Get a single event | No        |
| POST   | `/api/events`     | Create an event    | Yes       |
| PUT    | `/api/events/:id` | Update an event    | Yes       |
| DELETE | `/api/events/:id` | Delete an event    | Yes       |

### Health Check

```http
GET /api/health
```

Returns the current API status.

## 📝 Example: Register User

```http
POST /api/auth/register
```

Request body:

```json
{
  "name": "Muaj",
  "email": "muaj@example.com",
  "password": "123456"
}
```

## 📝 Example: Create Event

```http
POST /api/events
```

Request body:

```json
{
  "title": "CSE Tech Fest",
  "description": "Annual technology festival for CSE students",
  "date": "2027-01-15T10:00:00.000Z",
  "location": "HSTU Auditorium",
  "capacity": 500,
  "price": 100,
  "category": "conference"
}
```

The `organizer` is automatically assigned from the authenticated user's ID.

## 📄 Event Categories

The API currently supports:

* `conference`
* `workshop`
* `concert`
* `sports`
* `exhibition`
* `other`

## 🔎 Query Features

The event listing endpoint supports pagination and field selection.

### Pagination

```http
GET /api/events?page=1&limit=10
```

### Field Selection

```http
GET /api/events?fields=title,date,location
```

### Combined

```http
GET /api/events?page=1&limit=5&fields=title,date,location
```

## 🔒 Security

The project includes several security-related practices:

* Password hashing using **bcrypt**
* JWT authentication
* Protected routes
* Role-based authorization middleware
* Input validation using Mongoose
* Environment variables for sensitive configuration

## 🧪 API Testing

The API can be tested using **Postman**.

Recommended testing flow:

```text
Register
   ↓
Login
   ↓
Copy JWT Token
   ↓
Add Bearer Token
   ↓
Create Event
   ↓
Get Events
   ↓
Update Event
   ↓
Delete Event
```

## 🎯 Learning Goals

This project was built to practice:

* REST API development
* Express.js routing
* MVC architecture
* MongoDB and Mongoose
* JWT authentication
* Middleware
* CRUD operations
* API validation
* Error handling
* Pagination
* Git and GitHub workflow

## 👨‍💻 Author

**Nurul Huda Muaj**

Computer Science & Engineering Student

GitHub: [NurulHudaMuaj](https://github.com/NurulHudaMuaj)

---

⭐ If you find this project useful, consider giving it a star!
