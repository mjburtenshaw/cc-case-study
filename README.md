## cc-case-study

An app that validates a credit card number using the Luhn checksum algorithm.

## Table of Contents

- [Usage](#usage)
  - [Requirements](#requirements)
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

## Technologies

### API

The API is a TypeScript application built on [the Node.js runtime](https://nodejs.org/docs/latest/api/), using [tsx](https://github.com/privatenumber/tsx) to compile TypeScript on the fly in a way that supports ES modules that *just works*, and uses the [Express.js](https://expressjs.com) server framework.

Here are some additional technologies used:

- [cors](https://github.com/expressjs/cors) to easily manage cross-origin resource sharing.
- [dotenv](https://github.com/motdotla/dotenv) to easily manage environment variables in development.
- [http-status-codes](https://github.com/prettymuchbryce/http-status-codes#readme) for semantic use of HTTP standards.

### Client

The client is served using [Vite](https://vitejs.dev), a blazing fast front end dev tool that uses the Rollup bundler to serve native ESM modules in the browser. Vite is configured here to serve TypeScript files in the [React](https://react.dev) framework.
