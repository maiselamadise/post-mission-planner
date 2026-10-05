# Post-Mission Planner API

CSE 341 final project. Week 5: CRUD for `spiritualGoals` and `careerGoals`, plus Swagger docs at `/api-docs`.

## Run locally
1. `npm install`
2. Copy `.env.example` to `.env` and set `MONGODB_URI`
3. `npm run dev` then open http://localhost:3000/api-docs

## Deploy on Render
- New Web Service from this GitHub repo
- Build command: `npm install` | Start command: `npm start`
- Environment variable: `MONGODB_URI`
- In Atlas > Network Access, allow `0.0.0.0/0` so Render can connect
- Docs: `https://<your-service>.onrender.com/api-docs`

## Status codes
GET 200 · POST 201 · PUT 204 · DELETE 200 · bad input/id 400 · missing record 404 · server error 500
