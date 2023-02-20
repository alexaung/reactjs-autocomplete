## Lendis - Software Engineer Assignment

This Github repository contains an AutoComplete component developed using React, Redux Toolkit, TailwindCSS, and API call. The component allows users to easily search and find information related to the public transportation system in Germany. The v5.db.transport.rest API has been utilized to provide up-to-date information and improve the accuracy of the results. The AutoComplete component is highly customizable and can be easily integrated into any project or application. With its modern and efficient design, the component provides a seamless user experience and improves the overall functionality of any transportation-related web application.

This is a [`vitejs`](https://vitejs.dev/) + [Reactjs](https://reactjs.org//) [Typescript] project with [tailwindcss](https://tailwindcss.com/).

## Getting Started

First, install dependencies:

```bash
npm install
# or
yarn install
```

Second, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:5173](http://localhost:5173) with your browser to see the result.

On the homepage's Search Form, the user can input the name of the city or the station from which they wish to begin their journey, as well as the desired day and time. Upon submitting the form, the journey page will display all available modes of transportation and their corresponding schedules.

## Reusable Components

### AutoComplete Componet

- By implementing Autocomplete, your application can offer a more advanced and enjoyable user experience, while also reducing the likelihood of spelling errors during searches.

- Autocomplete is a text input feature that presents users with a range of suggested options to choose from when entering station, stop, or address information.

- To optimize the performance of the Autocomplete feature, the RxJS debounce operator was used to delay search method calls by 300 milliseconds. Additionally, an RxJS filter was implemented to ensure that a minimum of three letters are inputted. The Autocomplete component allows for easy modification of these settings.

## API routes

[Locations API route](https://v5.db.transport.rest/locations?poi=true&addresses=true&query=A) 

[Journeys API rotue](https://v5.db.transport.rest/journeys?from=8011160&to=8002549&departure=1670313600)

## Technologies Stack

- [Vite](https://vitejs.dev/guide/) is a front-end tool that prioritizes speed and performance. It includes a development server with advanced features such as fast Hot Module Replacement (HMR), pre-bundling, and support for TypeScript, JSX, and dynamic imports. It also includes a build command that uses Rollup to bundle code and output optimized static assets for production. Vite pre-bundles dependencies using esbuild, which is significantly faster than JavaScript-based bundlers. This optimizes HTTP requests and caching by mapping each dependency to only one HTTP request, reducing network congestion.

- [Redux Toolkit](https://redux-toolkit.js.org/) is utilized for centralized management of the application state. It streamlines the process of writing good Redux applications and accelerates development by incorporating recommended best practices, providing default behaviors, detecting mistakes, and enabling the creation of simpler code.

- [Tailwind CSS](https://tailwindcss.com/) , in combination with PostCSS as the preprocessor, simplifies the coding process and enhances maintainability. This utility-first framework eliminates the need to create custom CSS for styling an application, as it provides a set of utility classes to control padding, margin, color, font, shadows, and other properties of an application. This results in more efficient and faster application development.

## To deploy the project, follow these steps for Firebase Hosting:

- Create a new project with a desired name on Firebase Hosting.

- Once the project is created, navigate to the Firebase dashboard and click on Hosting. Follow the on-screen instructions.

- Go to the root folder of the project and install firebase-tools globally using npm.

- Login to Firebase using the command "firebase login".

- Initialize Firebase using the command "firebase init".

- In the Firebase initialization, select "Hosting" and configure files for Firebase Hosting. Optionally, set up GitHub Action deploys.

- Choose the existing project and select the projectId you created in the previous step.

- Now, build and deploy your project on Firebase Hosting.

## CI/CD

The integration of [CircleCI](https://circleci.com/) with [Bitbucket](https://github.com/alexaung/reactjs-autocomplete) facilitates a more efficient development workflow for the project.

To configure the integration, navigate to the project root folder and modify the integration file, [.circleci/config.yml](https://circleci.com/docs/configuration-reference/).

After every commit, CircleCI will automatically build the project and deploy the latest version to Firebase Hosting, streamlining the development process.

## Disclaimer

This project is for Lendis's Software Engineer Assignment only. All photos used in this project are downloaded form [Pexels](https://www.pexels.com/license/) and used for free.


