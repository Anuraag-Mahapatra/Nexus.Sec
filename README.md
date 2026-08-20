# NEXUS.SEC | Proactive Defense System

> **An AI-Engineered Full-Stack Cybersecurity Portal**

## The AI-Driven Development Protocol
This entire platform—from the React component architecture to the Node.js database routing—was conceptualized, built, and debugged entirely through collaborative artificial intelligence. 

Rather than writing code manually, this project was constructed using prompt-driven development:
* **Generative Architecture:** The MERN stack foundation, Express server logic, and React Router configurations were completely generated via iterative LLM prompting.
* **Algorithmic UI/UX:** The tactical aesthetic, responsive Tailwind CSS styling, dynamic SVG generation (including the logo), and complex mobile drill-down navigation were designed and implemented by AI.
* **Automated Diagnostics:** Backend bugs, including MongoDB connection refusals and Mongoose middleware asynchronous conflicts, were diagnosed and resolved by passing error logs back into the AI for live patching.

## System Overview
NEXUS.SEC is a high-performance web application designed for a simulated offensive security and vulnerability assessment firm. Built with a focus on penetration testing and red teaming operations, the application demonstrates a secure, full-stack environment where public users can view service offerings, while authenticated operators can access a protected command terminal.

**Core Tech Stack**
* **Frontend:** React.js, Vite, Tailwind CSS, React Router DOM
* **Backend:** Node.js, Express.js
* **Database:** MongoDB (Local/Atlas), Mongoose
* **Security:** JSON Web Tokens (JWT), `bcryptjs` password hashing

## Application Map
The network is divided into public-facing intelligence and secure clearance zones.

* **Public Interface:** Includes the `Home`, `Services`, and `Pricing` pages, featuring interactive UI elements and a dark, tactical design language.
* **Intelligence Archives:** Accessible via a mobile drill-down or desktop dropdown menu, housing detailed `Audit Reports` and `Pentest Reports`.
* **Clearance Gateways:** The `Register` and `SignIn` routes. These forms send HTTP POST requests to the backend, securely hashing passwords before storing them in the database.
* **Operator Terminal:** A protected `Dashboard` route. Upon successful authentication, the backend issues a JWT, dynamically updating the navigation bar with the operator's profile badge and granting access to the secure terminal.

## Deployment Protocol
To initialize the NEXUS.SEC environment on a local machine, you will need two active terminal instances.

### 1. Initialize the Backend
Ensure you have MongoDB Community Server installed and actively running on your local machine (`mongodb://127.0.0.1:27017/`).

Create a `.env` file inside the `/backend` directory:
```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/nexus_sec_db
JWT_SECRET=your_secure_random_string_here

cd backend
npm install
npm run dev
```
### 1. Initialize the Frontend

```
cd frontend
npm install
npm run dev
```
***Navigate to http://localhost:5173 in your browser to access the network interface.***