This is a [Reactjs](https://reactjs.org//) project [tailwindcss](https://tailwindcss.com/) with [`vitejs`](https://vitejs.dev/).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:5173](http://localhost:5173) with your browser to see the result.

The user able to speicy the name of the city, or the station she want to start her journey, along with the day and time and the list of journeys show with all availabe modes of transportation.

Created an AutoComplete reusable component to suggest Station/ stop / address calling [Locations API routes](https://v5.db.transport.rest/locations?poi=true&addresses=true&query=A) and using in Search Form.

After form submit, search result will show at [/jouryney] route.

## Technologies Stack

Using [Vite](https://vitejs.dev/guide/) to create the TypeScript React application

- Vite pre-bundles these dependencies using esbuild, which is 10-100x faster than JavaScript-based bundlers. Pre-bundling ensures that each     dependency maps to only one HTTP request, avoiding HTTP overhead and network congestion. As dependencies do not change, they can also be cached and we can skip pre-bundling

Using [Redux Toolkit](https://redux-toolkit.js.org/) to managing and centralizing application state

- Redux Toolkit makes it easier to write good Redux applications and speeds up development, by baking in our recommended best practices, providing good default behaviors, catching mistakes, and allowing you to write simpler code. 

Using [Tailwind CSS](https://tailwindcss.com/) with PostCSS as your preprocessor

- Your builds will be faster
- No quirks or workarounds

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

You can configure the integraiton file, [.circleci/config.yml](https://circleci.com/docs/configuration-reference/)

## Disclaimer

This project is for Lendis's Software Engineer Assignment only. All photos using in this project are downloaded form [Pexels](https://www.pexels.com/license/) and used for free.


