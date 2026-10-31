9# User Profile App (Dockerized Full-Stack Project)

This is a **Dockerized full-stack application** that demonstrates how to containerize and orchestrate a simple **frontend, backend, and MongoDB database** using **Docker & Docker Compose**.  

The project is designed to showcase **DevOps skills** such as containerization, image management, and deployment workflow, rather than frontend/backend complexity.  

---

## 📌 Project Structure

project-root/
├── backend/
│ ├── Dockerfile # Backend Dockerfile
│ ├── package.json # Node.js dependencies
│ └── server.js # Express backend
├── frontend/
│ ├── Dockerfile # Frontend Dockerfile
│ ├── index.html # UI
│ └── script.js # Client-side JS
├── docker-compose.yml # Compose file to run multi-container app
├── data.json # Sample data (if required)
└── README.md # Project documentation

## 🚀 Features
- **Frontend**: A simple static web UI served via **Nginx**.  
- **Backend**: Node.js + Express server exposing APIs.  
- **Database**: MongoDB as persistent storage.  
- **Dockerized**: Each component runs inside a container.  
- **Orchestrated**: Managed via `docker-compose`.  

---

## 🛠️ Prerequisites
Make sure you have installed:
- [Docker](https://docs.docker.com/get-docker/)  
- [Docker Compose](https://docs.docker.com/compose/)  
- [Git](https://git-scm.com/)  

---

## 📦 Docker Images
All images are available on **Docker Hub** under my namespace:



---

## ⚡ Setup & Run

1. **Clone the Repository**
```bash
   git clone https://github.com/anandkumarsah/user-profile-app.git
   cd user-profile-app
   ```

2. **Start Services with Docker Compose**

```bash
   docker-compose up -d
```
   This will spin up:
   -frontend (Nginx server) on port 8080
   -backend (Node.js API) on port 5000
   -mongo database on port 27017

3.**Access Application**
  -Frontend → http://localhost:8080
  -Backend API → http://localhost:5000

4.**Stop Containers**
```bash
   docker-compose down
```
## 🛡️ Why this project?
This project is not just a web app — it’s built to demonstrate DevOps expertise:

 -Containerization of frontend, backend, and database.
 -Image publishing to Docker Hub.
 -Multi-container orchestration using docker-compose.
 -A reproducible workflow for deploying apps.

## 📂 Future Enhancements

-CI/CD pipeline integration (GitHub Actions).
-Kubernetes deployment.
-Logging & monitoring with ELK stack.

## 👨‍💻 Author
**Anand Kumar Sah**
- 🌐 [LinkedIn](https://www.linkedin.com/in/anandkrsah)
- 🐙 [GitHub](https://github.com/anandkumarsah)  
- 🐳 [Docker Hub](https://hub.docker.com/u/anandkumarsah)
  
⭐ If you found this project useful, don’t forget to star the repo!
