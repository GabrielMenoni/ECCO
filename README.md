# ECCO
A website designed for users to offer and hire basic maintenance and cleaning services.

The website was developed as a trainee project for our entry into the junior enterprise 'Cati Jr.', located at the Federal University of São Carlos in São Carlos, Brazil.

!!! The project was not completed due to the need to conclude the trainee period, some parts are not finished and don't represent the final product

Project figma: https://www.figma.com/design/F5bZSFNEkdl4ck008wi50A/UI-Design?node-id=47-14&m=dev

## Frontend

The frontend was fully developed using React and TypeScript, with styled components for each screen, featuring fully responsive layouts for desktop. It includes route management, global styles, access control, and integrations throughout the entire application.

## Backend

In the Backend, an API structure was used to mediate database information with the Frontend part. For this to work, we used the Fastify framework to create and direct routes, as well as the use of the Prisma ORM to describe database relationships. And all of this was used with TypeScript, which was extremely important for data typing.


# How to run the frontend
1. Navigate to ECCO\frontend
2. Install all dependencies using 'npm i'
3. run 'npm run dev'
4. Site will run on localhost:5173 by default

# How to run the backend
To install the project, simply clone the repository and in the backend directory use the npm install command.

# Running locally

- Running with a local database in a container

    docker compose up -d api-solid-pg -> Will run the database in a Docker container.

    docker compose stop db-dev --> Ends the execution of the container with Docker.

- Running the application

    npm dev -> Runs the application.

- Running the application with the database

    It is necessary to create a .env file in the src directory and add the information based on the .env.example file

# Accessing the application
After the correct configuration of the .env file, in which it is necessary that the parameter related to the database must be correctly filled in. Access the URL
http://localhost:3000/users

![image](https://github.com/user-attachments/assets/2dc3847d-65e7-41d9-9798-72839e3625b4)
