# Wanderlast Chronicles

Welcome to Wanderlast Chronicles – Your Gateway to Endless Adventures!

## About Wanderlast Chronicles

Wanderlast Chronicles is a dynamic and interactive travel blogging platform where passionate travelers like you can share your exciting journeys, discover hidden gems, and connect with a community of fellow explorers. Whether you're a seasoned globetrotter or a first-time adventurer, Wanderlast Chronicles is the perfect space to document your travel tales and inspire others to embark on their own unforgettable experiences.

## Features

### 1. **Create Your Travel Blog**

Share your travel stories, anecdotes, and tips with the world! Our user-friendly interface makes it easy to compose and publish your blogs, complete with captivating images that bring your adventures to life.

### 2. **Discover Unique Destinations**

Explore a diverse range of tourist places from around the globe. Wanderlast Chronicles is not just a platform for sharing; it's also a source of inspiration for your next travel destination. Discover hidden treasures, off-the-beaten-path gems, and iconic landmarks that will ignite your wanderlust.

### 3. **Connect with Fellow Travelers**

Engage with a vibrant community of like-minded individuals. Comment on blogs, exchange travel recommendations, and build lasting connections with fellow wanderers. Wanderlast Chronicles is more than a blogging site; it's a social hub for passionate travelers.

### 4. **Plan Your Next Adventure**

Use Wanderlast Chronicles to plan your upcoming trips efficiently. Browse through curated itineraries, read firsthand experiences, and gather valuable insights to make the most of your travels. Our platform is designed to be your go-to resource for trip planning.

## Getting Started

1. **Create an Account:** Joining the Wanderlast Chronicles community is quick and easy. Simply sign up to start sharing your travel experiences.

2. **Compose Your First Blog:** Once registered, dive into the world of travel blogging. Use our intuitive blog editor to craft engaging stories and share them with the world.

3. **Explore Destinations:** Whether you're seeking inspiration or planning your next adventure, our destination section is your gateway to a world of travel possibilities.

4. **Connect and Engage:** Interact with other travelers by commenting on their blogs, sharing your thoughts, and building a network of global explorers.



Happy Travels!

 Setup Guide


## Backend Setup

### Prerequisites
Make sure you have Node.js and MongoDB installed on your machine before proceeding.

### Clone the repository 
```bash
git clone "https://github.com/dharmi04/Travel-Blogging"
```

### 1. Navigate to the Backend Folder


```bash
cd Backend
```

### 2. Install Dependencies

Run the following command to install the necessary dependencies:

```bash
npm install
```

### 3. Configure MongoDB
Make sure your MongoDB instance is running. Update the database connection settings in the .env file:

```bash
MONGODB_URI=mongodb://localhost:5000/wanderlast
```

### 4. Start the Backend Server

Once the installation is complete, start the backend server:

```bash
npm run start
```

Your backend server should now be up and running at the specified port . Make sure there are no errors in the console.
Make sure to add your database (MongoDb) :)

## Frontend Setup

### 1. Navigate to the Frontend Folder

Open a new terminal or command prompt window and navigate to the 'Frontend' folder:

```bash
cd Frontend
```

### 2. Install Dependencies

Run the following command to install the frontend dependencies:

```bash
npm install
```
### 3. Configure API Endpoint
Update the API endpoint in the .env file to match your backend server:

```bash
REACT_APP_API_URL=http://localhost:5000
```
### 4. Start the Frontend Development Server

After the installation is complete, start the frontend development server:

```bash
npm run dev
```

This will launch the development server, and you should see information about the server and the application running in the console.

### 4. Access Wanderlast Chronicles

Open your web browser and go to `http://localhost:5173` (or the specified port if different). You should now see the Wanderlast Chronicles website up and running.


