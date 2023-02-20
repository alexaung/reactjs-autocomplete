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

The user is able to specify the name of the city, or the station she wants to start her journey on, along with the day and time in the Search Form at home page and the search results of journeys with all available modes of transportation will shown at the journey page.

## Reusable Components

### AutoComplete Componet

- Autocomplete provides a superior user experience to your app’s visitors. It also helps to avoid redundant spelling errors while searching.

- Autocomplete is essencially a text input that offers suggestions that user can pick from and to of Station /stop /address.

- Used RxJS debounce operator to 300 milliseconds delay calls to the search method. And to ensure a minimum input 3 letter length with rxjs filter. This can be easily changed in the AutoCompete component.

## API routes

[Locations API route](https://v5.db.transport.rest/locations?poi=true&addresses=true&query=A) 

[Journeys API rotue](https://v5.db.transport.rest/journeys?from=8011160&to=8002549&departure=1670313600)

## Technologies Stack

[Vite](https://vitejs.dev/guide/) is a next-generation, front-end tool that focuses on speed and performace.

- A development server that provides rich feature enhancements over native ES moudles: fast Hot Moudle Replacement (HMR), pre-bundling, support for typescript, jsx, and dynamic import.

- A build command that bundles your code with Rollup, pre-configured to output optimized static assets for production.

- Vite pre-bundles these dependencies using esbuild, which is 10-100x faster than JavaScript-based bundlers. Pre-bundling ensures that each     dependency maps to only one HTTP request, avoiding HTTP overhead and network congestion. As dependencies do not change, they can also be cached and we can skip pre-bundling

[Redux Toolkit](https://redux-toolkit.js.org/) to managing and centralizing application state

- Redux Toolkit makes it easier to write good Redux applications and speeds up development, by baking in our recommended best practices, providing good default behaviors, catching mistakes, and allowing you to write simpler code. 

[Tailwind CSS](https://tailwindcss.com/) with PostCSS as your preprocessor

- Tailwind CSS makes it quicker to write and maintain the code of your application. By using this utility-first framework, you don't have to write custom CSS to style your application. Instead, you can use utility classes to control the padding, margin, color, font, shadow, and more of your application.

## Deploy on Firebase Hosting

- Create a new project with the name at [Firebase Hosting](https://console.firebase.google.com/). Okay, now that we have the project created.
- In the Firebase dashboard click on Hosting and follow the on screen instruction.
- Go to project root folder
- npm install -g firebase-tools
- firebase login
- firebase init
- Hosting: Configure files for Firebase Hosting and (optionally) set up Guithub Action deploys
- Use an existing project and choose your projectId that you created at above. 
- Now you build and deploy on firebase 

## CI/CD

[CircleCI](https://circleci.com/) integrates seamlessly with [Bitbucket](https://alexaung@bitbucket.org/alexaung/lendis.git) to make your development workflow more efficient. 

You can configure the integration file, [.circleci/config.yml](https://circleci.com/docs/configuration-reference/) in the project root folder. 

Everytime you commit, CircleCI automatically builds the project and deploy the latest version to Firebase Hosting.

## Disclaimer

This project is for Lendis's Software Engineer Assignment only. All photos used in this project are downloaded form [Pexels](https://www.pexels.com/license/) and used for free.


