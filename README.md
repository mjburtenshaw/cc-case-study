## cc-case-study

An app that validates a credit card number using the Luhn checksum algorithm.

## Table of Contents

- [Usage](#usage)
  - [Requirements](#requirements)
- [Design](#Design)
  - [API](#api)
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

## Design

In general, for a monolith like this I would install a tool like turborepo for easy workspace management, but that proved to be too much a chore for something this small in scope.

### API

Separation of concerns is the guiding star of the API file tree design.

The server code is separate from the index file, in the case we need to start an manage differing API's, such as in test environments.

For the most part, all third-party software is treated properly as a vendor. This is apparent in the way I organized `server-middlewares` and `services`. Things like auth and body validation would go under a non-existent directory called `api-middlewares` if it was applicable for this project.

I used a proxy pattern to construct the credit card service. It is overkill for the actual scope of this project, but I wanted to illustrate how I would design interactions with cloud vendor software.

The API design is one with versioning front of mind, this allows us to maintain retrocompatability with clients and innovate on APIs without disturbing them.

## Technologies

### API

The API is a TypeScript application built on [the Node.js runtime](https://nodejs.org/docs/latest/api/), using [tsx](https://github.com/privatenumber/tsx) to compile TypeScript on the fly in a way that supports ES modules that *just works*, and uses the [Express.js](https://expressjs.com) server framework.

Here are some additional technologies used:

- [cors](https://github.com/expressjs/cors) to easily manage cross-origin resource sharing.
- [dotenv](https://github.com/motdotla/dotenv) to easily manage environment variables in development.
- [http-status-codes](https://github.com/prettymuchbryce/http-status-codes#readme) for semantic use of HTTP standards.

### Client

The client is served using [Vite](https://vitejs.dev), a blazing fast front end dev tool that uses the Rollup bundler to serve native ESM modules in the browser. Vite is configured here to serve TypeScript files in the [React](https://react.dev) framework.
