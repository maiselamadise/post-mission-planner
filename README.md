# Post-Mission Planner API

CSE 341 final project. Week 5: CRUD for `spiritualGoals` and `careerGoals`, plus Swagger docs at `/api-docs`.

## Run locally
1. `npm install`
2. Copy `.env.example` to `.env` and set `MONGODB_URI` (`.env` is git-ignored; never commit it)
3. `npm run dev` then open http://localhost:3000/api-docs

## Deploy on Render
- New Web Service from this GitHub repo
- Build command: `npm install` | Start command: `npm start`
- Environment variable: `MONGODB_URI`
- In Atlas > Network Access, allow `0.0.0.0/0` so Render can connect
- Docs: `https://<your-service>.onrender.com/api-docs`

## Status codes
GET 200 · POST 201 · PUT 204 · DELETE 200 · bad input/id 400 · missing record 404 · server error 500

## Testing in Swagger
- POST needs a `userId` (24-character hex string). The example value in the docs works, e.g. `665f1c2e8b3a4d0012345678`.
- PUT accepts any subset of fields; `userId` and `_id` cannot be changed, and an empty body returns 400.
- Quick error checks: GET `/spiritual-goals/abc` returns 400; a valid but unused id returns 404.
