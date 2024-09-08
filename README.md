# API Proxy Server

## Description

This project implements an API proxy server built with Express.js. It provides several key functionalities:

- **API Proxying**: Forwards requests to a specified API server while hiding the actual API details.
- **Rate Limiting**: Limits the number of requests from a client to prevent abuse and manage server load.
- **Caching**: Stores API responses temporarily to improve performance and reduce the number of API calls.

## Dependencies

- `express`: Web framework for Node.js.
- `dotenv`: Loads environment variables from a `.env` file.
- `cors`: Middleware to enable Cross-Origin Resource Sharing.
- `express-rate-limit`: Middleware to limit repeated requests.
- `axios`: Promise-based HTTP client for making requests.
- `url`: Node.js URL utilities for handling URL parsing and formatting.

## Project Setup

Ensure you have the necessary environment variables defined in a `.env` file:

- `PORT`: Port number for the server.
- `API_URL`: URL of the API to proxy.
- `API_KEY`: API key for authentication.
- `API_NAME`: The name of the API key parameter.

The server is configured to handle rate limiting, cache responses, and forward requests to the specified API server.

