## cc-case-study

An app that validates a credit card number using the Luhn checksum algorithm.

## Table of Contents

- [Usage](#usage)
  - [Requirements](#requirements)
  - [UI Library Explorer](#ui-library-explorer)
- [Design](#Design)
  - [API](#api)
  - [Client](#client)
- [Technologies](#technologies)
  - [API](#api)
  - [Client](#client)

## Usage

### Requirements

- [Node Iron LTS](https://nodejs.org/en)

---

1. Clone this repository to your machine.
2. Start the API: `cd api && npm i && npm run dev`
3. Start the client: `cd client && npm i && npm run dev`

> ⛔️ You will encounter a splat page if you attempt to go anywhere in the client outside the index route.

> 😎 Dark mode is available if you set a property `theme` to `dark` in localStorage. A refresh is required.

### UI Library Explorer

Run `cd client && npm i && npm run storybook`

## Design

In general, for a monolith like this I would install a tool like turborepo for easy workspace management, but that proved to be too much a chore for something this small in scope.

Separation of concerns is the guiding star of the file tree design.

### API

The server code is separate from the index file, in the case we need to start an manage differing API's, such as in test environments.

For the most part, all third-party software is treated properly as a vendor. This is apparent in the way I organized `server-middlewares` and `services`. Things like auth and body validation would go under a non-existent directory called `api-middlewares` if it was applicable for this project.

I used a proxy pattern to construct the credit card service. It is overkill for the actual scope of this project, but I wanted to illustrate how I would design interactions with cloud vendor software.

The API design is one with versioning front of mind, this allows us to maintain retrocompatability with clients and innovate on APIs without disturbing them.

### Client

The client source code is divvied up like so:

- contexts: For managing state. This is about as brainy as the client gets.
- hooks: Helpers for keeping state handlers centralized and DRY.
- pages: Entire views. Pages compose view templates and infuse them with context data.
- services: If we need to talk to something outside the client, this is where that code goes.
- templates: Semantic components whose purpose is to layout UI elements.
- utils: General purpose code that doesn't manage state and isn't tied to a particular page.
- ui: The goodies. More on this below.

#### UI

Ideally, I organize UI as a separate project that's imported by clients, so they can be reused for a consistent UX accross a company's offerings, but publishing such a package is overkill for the exercise.

At the top level, you have **themes** and **modules**. Themes encapsulate the brand style guide and impart them to **elements**, the atomic units of the UI library. A module is a prepackaged group of elements tailored for a specific layout.

Each element is split with the most basic code as close to raw HTML as we get. The base component is then wrapped by styled components, as you may need to support different styling paradigms depending on the client.

Mocks and stories exist to support [the UI Library Explorer](#ui-library-explorer).

## Technologies

### API

The API is a TypeScript application built on [the Node.js runtime](https://nodejs.org/docs/latest/api/), using [tsx](https://github.com/privatenumber/tsx) to compile TypeScript on the fly in a way that supports ES modules that *just works*, and uses the [Express.js](https://expressjs.com) server framework.

Here are some additional technologies used:

- [cors](https://github.com/expressjs/cors) to easily manage cross-origin resource sharing.
- [dotenv](https://github.com/motdotla/dotenv) to easily manage environment variables in development.
- [http-status-codes](https://github.com/prettymuchbryce/http-status-codes#readme) for semantic use of HTTP standards.

### Client

The client is served using [Vite](https://vitejs.dev), a blazing fast front end dev tool that uses the Rollup bundler to serve native ESM modules in the browser. Vite is configured here to serve TypeScript files in the [React](https://react.dev) framework.

I use [Material UI](https://mui.com/material-ui/) as my UI and style framework. [Storybook.js](https://storybook.js.org) is used for testing UI elements. I like using Chromatic for a UI review process, but that was not necessary to implement here.
