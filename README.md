# Todo Project

This project was created with [React](https://react.dev/) and [Python](https://www.python.org/)

## How to run the project

I used Docker for containerization so you need to run:

### `docker-compose up --build`

After Docker build you can go to [frontend part](http://localhost:3000)

and [backend part](http://localhost:8000)

If you can open both pages, that means the app works correctly!!!

## There are some tests for frontend

To test the React app you need to go to /frontend directory and run:

### `npm test`

### !!!Tests run automatically when you build the app with Docker

## Work Summary

The work on this project took 3 hours.

### Backend

For the backend part, I used **Python** and **FastAPI**. I aimed to write strictly typed code to avoid potential bugs. I decided not to use a database since this is a test project and the 3-hour limit made that unnecessary.

### Frontend

As mentioned earlier, the frontend is built with **React** and **TypeScript**. For API requests, I used **Axios**, and for testing — **Jest** with the standard **React Testing Library**.

I tried to keep the project as simple as possible. I didn’t use Context or Redux for state management, since that would have been overkill for such a small app.

I focused on writing isolated and typed components. The main component is `Todo.tsx`; all other components are its children and don’t contain business logic. All logic resides inside the `Todo` component, which keeps the code compact and avoids spreading logic across multiple components. This also follows **SOLID** and **OOP** principles.

All network requests are placed in the `/api` directory to keep the code compact and easy to scale. Similarly, all types are defined in the `/types` directory, which makes it easy to add or modify types, and keeps the components themselves clean and maintainable.
