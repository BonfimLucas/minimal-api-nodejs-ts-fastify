# Formula One Minimal API

This project is a minimal API built with [Fastify](https://www.fastify.io/) that provides information about Formula 1 drivers and teams. It is designed to be lightweight, fast, and easy to extend.

## Table of Contents

- [Technologies Used](#technologies-used)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)

## Technologies Used

This project uses the following technologies:

- [Fastify](https://www.fastify.io/) - A fast web framework for Node.js.
- [TypeScript](https://www.typescriptlang.org/) - A superset of JavaScript that adds type safety.
- [CORS](https://www.npmjs.com/package/@fastify/cors) - Middleware to enable Cross-Origin Resource Sharing (CORS) for the API.
- [TSX](https://github.com/esbuild/tsx) - A runtime for executing TypeScript directly.
- [Tsup](https://github.com/egoist/tsup) - A TypeScript bundler that is optimized for fast performance.

## Features

- List all Formula 1 teams and their details.
- Get a list of all Formula 1 drivers.
- Retrieve information about a specific driver by their ID.

## Installation

To get started with this project, follow these steps:

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/formula-one-api.git
    cd formula-one-api
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

## Usage

To run the development server, use the following command:

```bash
npm run start:dev
```

The server will be running on [http://localhost:3333](http://localhost:3333).

For production builds, use:

```bash
npm run start:dist
```

## API Endpoints

### `GET /teams`

Returns a list of all Formula 1 teams with their details.

**Response Example:**

```json
[
  {
    "nome": "Mercedes",
    "país": "Alemanha",
    "fundação": 1954
  },
  {
    "nome": "Red Bull Racing",
    "país": "Áustria",
    "fundação": 2005
  },
  ...
]
```

### `GET /drivers`

Returns a list of all Formula 1 drivers with their details.

**Response Example:**

```json
[
  {
    "id": 1,
    "nome": "Lewis Hamilton",
    "nacionalidade": "Britânico",
    "time": "Mercedes"
  },
  {
    "id": 2,
    "nome": "Max Verstappen",
    "nacionalidade": "Neerlandês",
    "time": "Red Bull Racing"
  },
  ...
]
```

### `GET /drivers/:id`

Returns information about a specific driver based on their ID.

**Response Example:**

```json
{
  "driver": {
    "id": 1,
    "nome": "Lewis Hamilton",
    "nacionalidade": "Britânico",
    "time": "Mercedes"
  }
}
```

If the driver is not found, the response will be:

```json
{
  "message": "Driver not found!"
}
```
