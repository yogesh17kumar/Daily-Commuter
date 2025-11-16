# 🚘 Daily Commute Portal  
### Smart Route • Weather Insights • Vehicle Suggestions • To-Do Manager

The **Daily Commute Portal** is a full-stack web application designed to simplify everyday travel.  
It combines **route planning**, **live weather data**, **smart vehicle suggestions**, and a **To-Do manager** inside one clean dashboard.

---

## 🌟 Features

### 🗺 1. Route Planner (React + React-Leaflet)
- Select **From** and **To** locations  
- Auto-suggestion for places  
- Route generation using **OpenRouteService API**  
- Interactive map with markers, zoom, and polylines  

---

### ⛅ 2. Live Weather Information
- Shows **temperature**, **humidity**, **wind speed**, and conditions  
- Always visible on dashboard  
- Weather impacts vehicle suggestions  

---

### 🚲 3. Smart Vehicle Suggestions
Based on weather:

| Weather | Suggested Vehicle |
|--------|-------------------|
| 🌧 Rainy | Cab / Auto |
| ☀ Sunny | Bike / Scooty |
| ❄ Cold | Car / Closed Vehicle |

Also displays:
- Approx **distance**  
- Estimated **travel cost**

---

### 📝 4. Sidebar To-Do List
- Slide toggle sidebar  
- Add / Edit / Delete tasks  
- LocalStorage → Tasks persist after refresh  

---

### 🔐 5. Authentication System
- Clean login & signup UI  
- Validations included  
- Secure passwords (bcrypt)  
- Optional JWT authentication  

---

## 🏗 Tech Stack

### **Frontend**
- React.js  
- React-Leaflet  
- Axios  
- TailwindCSS / CSS  
- Framer Motion (optional)

### **Backend**
- Node.js  
- Express.js  
- MongoDB (Mongoose)

### **APIs**
- OpenRouteService (routes)  
- OpenWeatherMap (weather)  

---

## 📦 Project Setup

### 📥 Clone Repository
```bash
git clone https://github.com/yourusername/commuter.git
cd commuter
````

---

## 🔵 Backend Setup

```bash
cd backend
npm install
```

### Create `.env`

```
MONGO_URI=your_mongodb_url
WEATHER_API_KEY=your_weather_api_key
ORS_API_KEY=your_openrouteservice_key
JWT_SECRET=your_jwt_secret
```

### Run Backend

```bash
npm start
```

Backend URL → **[http://localhost:5000](http://localhost:5000)**

---

## 🟢 Frontend Setup

```bash
cd frontend
npm install
npm start
```

Frontend URL → **[http://localhost:3000](http://localhost:3000)**

---

## 📁 Folder Structure

```
commuter/
 ├── backend/
 │    ├── controllers/
 │    ├── routes/
 │    ├── models/
 │    ├── server.js
 │    └── .env
 ├── frontend/
 │    ├── src/
 │    ├── public/
 │    ├── package.json
 │    └── .env
 └── README.md
```

---

## 🔒 Environment Variables & Security

* `.env` added to `.gitignore`
* Never commit API keys to GitHub
* Regenerate keys if leaked
* Frontend `.env` should only store URLs, not secrets


## 🚀 Future Enhancements

* Save user **trip history**
* **Cost optimization** suggestions
* Public transport integration
* **Dark / Light theme**
* Voice-based location search

---

## 👨‍💻 Developed By

**Yogesh Kumar**
*MCA – AI / ML*
