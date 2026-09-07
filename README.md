# 🍔 Vingo — Food Delivery Web Application

Vingo is a **full-stack food delivery web application** built with the **MERN Stack**.

It connects **customers, restaurants, and delivery partners** on a single platform. Users can discover nearby restaurants, search and filter food, place orders, make online payments, track deliveries in real time, and rate their food and restaurant experience.

---

## 🚀 Live Demo

🌐 **Live Website:** https://vingo-d1d1.onrender.com/

💻 **GitHub Repository:** https://github.com/Manjeetshandilyajha/Vingo

---

# ✨ Features

## 👤 Customer Features

* 🔐 User Registration & Login
* 📍 Location-based restaurant discovery
* 🏪 Browse nearby restaurants/shops
* 🍔 Browse food items by category
* 🔎 Advanced food search
* 🛒 Add/remove food items from cart
* ➕ Increase/decrease item quantity
* 💰 Automatic cart total calculation
* 📦 Place food orders
* 💳 Razorpay online payment integration
* 📋 View order history
* 🚚 Real-time delivery tracking
* 🔄 Real-time order status updates
* ⭐ Restaurant & food ratings/reviews
* 📱 Responsive user interface
* ⚡ Optimized application performance

---

## 🏪 Restaurant / Shop Owner Features

* 🔐 Shop owner authentication
* 🏪 Create and manage restaurants
* 🍔 Add food items
* ✏️ Update food items
* 🗑️ Delete food items
* 📂 Manage food categories
* 📦 Manage incoming orders
* 🔄 Update order status
* 📊 Manage restaurant operations
* ⭐ View customer ratings and reviews

---

## 🚴 Delivery Partner Features

* 🔐 Delivery partner authentication
* 📋 View available delivery assignments
* 📍 View customer delivery location
* 📦 View complete order details
* ✅ Accept delivery assignments
* 🚚 Manage current delivery
* 🔄 Update delivery status
* 📍 Real-time delivery tracking

---

# 🛠️ Tech Stack

## Frontend

* ⚛️ React.js
* ⚡ Vite
* 🧭 React Router
* 🔄 Redux Toolkit
* 🎨 Tailwind CSS
* 📡 Axios
* 🎯 React Icons
* 🗺️ React Leaflet

## Backend

* 🟢 Node.js
* 🚂 Express.js
* 🍃 MongoDB
* 📦 Mongoose
* 🔐 JWT Authentication
* 🔌 Socket.IO

## Payment

* 💳 Razorpay
* 💵 Cash On Delivery

## Other Technologies

* ⚡ Redis
* 🐳 Docker
* ☁️ Cloudinary
* 📤 Multer
* 📍 Geoapify
* 🔄 Nodemon

---

# 🏗️ Application Architecture

```text
                         ┌──────────────────┐
                         │      VINGO       │
                         │  Food Delivery   │
                         └────────┬─────────┘
                                  │
              ┌───────────────────┼───────────────────┐
              │                   │                   │
              ▼                   ▼                   ▼
       ┌─────────────┐     ┌─────────────┐     ┌─────────────┐
       │   Customer  │     │ Restaurant  │     │  Delivery   │
       │    Panel    │     │    Panel    │     │   Partner   │
       └──────┬──────┘     └──────┬──────┘     └──────┬──────┘
              │                   │                   │
              └───────────────────┼───────────────────┘
                                  │
                                  ▼
                         ┌──────────────────┐
                         │   Express API    │
                         │     Backend      │
                         └────────┬─────────┘
                                  │
                 ┌────────────────┼────────────────┐
                 │                │                │
                 ▼                ▼                ▼
           ┌──────────┐     ┌──────────┐     ┌──────────┐
           │ MongoDB  │     │  Redis   │     │ Razorpay │
           └──────────┘     └──────────┘     └──────────┘
                                  │
                                  ▼
                            ┌───────────┐
                            │ Socket.IO │
                            │ Real-Time │
                            └───────────┘
```

---

# 📂 Project Structure

```text
Vingo/
│
├── frontend/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── redux/
│   │   ├── hooks/
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── package.json
│   └── vite.config.js
│
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middlewares/
│   ├── config/
│   ├── utils/
│   ├── index.js
│   └── package.json
│
├── docker-compose.yml
├── .gitignore
└── README.md
```

---

# ⚙️ Installation & Setup

## 1. Clone Repository

```bash
git clone https://github.com/Manjeetshandilyajha/Vingo.git
```

```bash
cd Vingo
```

---

# 🎨 Frontend Setup

Navigate to the frontend:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Create a `.env` file:

```env
VITE_FIREBASE_APIKEY = "XXXXXXXXXXXXXXXXXXXXXXXX"
VITE_GEOAPIKEY = "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
VITE_RAZORPAY_KEY_ID=XXXXXXXXXXXXXXXXXXXXXXXX
```

Start the frontend:

```bash
npm run dev
```

Frontend will run at:

```text
http://localhost:5173
```

---

# 🖥️ Backend Setup

Open a new terminal:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Create a `.env` file:

```env
PORT=4000

MONGODB_URL=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

EMAIL = your_email
PASS = your_pass

RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_secret

CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

Start the backend:

```bash
npm run dev
```

Backend will run at:

```text
http://localhost:4000
```

---

# 🗄️ Database

Vingo uses **MongoDB + Mongoose** for data management.

### Main Models

```text
User
Shop
Item
Order
ShopOrder
DeliveryAssignment
```

The database manages:

* 👤 User information
* 🏪 Restaurant information
* 🍔 Food items
* 🛒 Cart/order data
* 💳 Payment information
* 🚴 Delivery assignments
* 🔄 Order status
* ⭐ Ratings and reviews

---

# 🔐 Authentication

Vingo uses **JWT-based authentication**.

```text
             User Login
                  │
                  ▼
        ┌──────────────────┐
        │ Validate User    │
        │ Credentials      │
        └────────┬─────────┘
                 │
                 ▼
           Generate JWT
                 │
                 ▼
       Store Authentication
                 │
                 ▼
       Protected API Request
                 │
                 ▼
       JWT Middleware
                 │
                 ▼
          Authorized User
```

The application supports role-based functionality for:

* 👤 Customers
* 🏪 Restaurant owners
* 🚴 Delivery partners

---

# 💳 Payment Integration

Vingo uses **Razorpay** for online payments.

```text
Select Food
     ↓
Add to Cart
     ↓
Checkout
     ↓
Create Order
     ↓
Razorpay Checkout
     ↓
Complete Payment
     ↓
Verify Payment
     ↓
Confirm Order
```

For development, Razorpay **Test Mode** credentials can be used.

> ⚠️ Never commit real API keys or `.env` files to GitHub.

---

# 📍 Location-Based Services

Vingo provides location-based food discovery and delivery functionality.

Technologies used:

* 📍 Browser Geolocation API
* 🗺️ React Leaflet
* 🌎 Geoapify

Users can discover restaurants based on their location and delivery partners can access the required delivery location.

---

# 🔌 Real-Time Features

Vingo uses **Socket.IO** to provide real-time communication.

Real-time functionality includes:

* 🚚 Delivery tracking
* 🔄 Order status updates
* 📦 Delivery assignment updates
* ⚡ Real-time communication between users and delivery partners

---

# 🚚 Order & Delivery Flow

```text
                    CUSTOMER
                       │
                       │ Place Order
                       ▼
                  ┌──────────┐
                  │  ORDER   │
                  └────┬─────┘
                       │
                       ▼
                  RESTAURANT
                       │
                       │ Prepare Order
                       ▼
                 DELIVERY PARTNER
                       │
                       │ Accept Delivery
                       ▼
                    PICKUP
                       │
                       ▼
               LIVE DELIVERY TRACKING
                       │
                       ▼
                   CUSTOMER
                       │
                       ▼
                   DELIVERED
```

---

# ⭐ Rating & Review System

Customers can rate their experience after receiving an order.

Users can provide:

* ⭐ Restaurant rating
* ⭐ Food rating
* 📝 Reviews/feedback

This helps customers discover highly-rated restaurants and food items.

---

# 🔎 Food Search & Filtering

Vingo provides an improved food discovery experience through:

* 🔎 Food search
* 🍔 Category filtering
* 🏪 Restaurant-based browsing
* 📍 Location-based discovery
* ⚡ Optimized result rendering

Users can quickly find the food they are looking for without manually browsing every restaurant.

---

# ⚡ Performance Optimization

The application has been optimized to provide a smoother user experience.

Performance improvements include:

* Efficient API calls
* Optimized state management
* Reusable React components
* Efficient rendering
* Backend optimization
* Redis caching where required
* Optimized database queries
* Image optimization

---

# 🔌 API Overview

### Authentication

```text
POST /api/auth/register
POST /api/auth/login
```

### Orders

```text
POST /api/order/place-order
GET  /api/order/my-orders
GET  /api/order/get-current-order
GET  /api/order/get-assignments
```

### Delivery

```text
POST /api/order/accept-order/:assignmentId
PUT  /api/order/update-status/:orderId/:shopId
```

> API route prefixes may vary depending on your backend configuration.

---

# 🐳 Docker

Vingo can be run using Docker for easier development and deployment.

### Services

```text
Frontend
Backend
Redis
```

Start containers:

```bash
docker compose up
```

Stop containers:

```bash
docker compose down
```

---

# 🔒 Environment Variables

Sensitive information should never be committed to GitHub.

Add these files to `.gitignore`:

```text
.env
.env.local
.env.*.local
node_modules/
```

Provide an example environment file:

```text
.env.example
```

---

# 🔮 Future Improvements

Planned improvements for Vingo include:

* 🤖 AI-powered food recommendations
* 🔔 Push notifications
* 💬 Real-time customer support/chat
* 🎁 Coupons and promotional offers
* 📊 Advanced restaurant analytics
* 📱 Progressive Web App (PWA)
* 🧠 Personalized user recommendations
* 🛡️ Advanced fraud detection
* 📈 Advanced admin dashboard

---

# 🎯 Why Vingo?

Vingo is more than a simple food ordering application.

It demonstrates a **real-world full-stack architecture** where multiple user roles interact with the same platform.

```text
             ┌─────────────┐
             │  CUSTOMER   │
             └──────┬──────┘
                    │
                    ▼
             ┌─────────────┐
             │    VINGO    │
             └──────┬──────┘
                    │
          ┌─────────┴─────────┐
          ▼                   ▼
   ┌─────────────┐     ┌─────────────┐
   │ RESTAURANT  │     │  DELIVERY   │
   │    OWNER    │     │   PARTNER   │
   └─────────────┘     └─────────────┘
```

The project demonstrates practical experience with:

* Full-stack development
* REST APIs
* Authentication & authorization
* Real-time communication
* Online payments
* Location-based services
* Database design
* State management
* Cloud storage
* Caching
* Docker
* Performance optimization

---

# 👨‍💻 Author

## Manjeet Kumar Jha

**AI Full Stack Developer | MERN Stack Developer**

💻 GitHub: https://github.com/Manjeetshandilyajha

📸 Instagram: https://www.instagram.com/manjeetjha.dev

🔗 LinkedIn: https://www.linkedin.com/in/manjeet-kumar-jha-01871528b

---

# ⭐ Support

If you like this project, please consider giving the repository a ⭐.

Your support helps motivate further development!

---

# 📄 License

This project is developed for **educational and portfolio purposes**.

© 2026 Manjeet Kumar Jha. All rights reserved.
