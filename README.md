# Housemate Hunter API

This API can keep track of all the people looking for roommates in San Francisco and Denver. This repo is meant to be paired with the [Housemate Hunter](https://github.com/pareesakd1118/housemate-hunter) frontend.

## Set Up Instructions

Clone down the repo and cd into the repo's directory.

```bash
# Install library dependencies, run:
npm install

# Start the server to use the endpoints, run:
node server.js
```

## Endpoint Documentation

**Base URL:** http://localhost:3001/api/v1

| **VERB** | **URL** | **REQUEST BODY** | **SAMPLE RESPONSE** |
| -------- | ------- | ---------------- | ------------------- |
| GET all roommates| /roommates | None | `[ { id: <Number>, name: <String>, isSmoker: <Boolean>, hasPet: <Boolean>, important: <Text>, age: <Number>, maxBudget: <Number>, city: <String>, bio: <Text>, image: <String>}, ... ] }` |
| GET single roommate | /roommates/:id | None | `{ id: <Number>, name: <String>, isSmoker: <Boolean>, hasPet: <Boolean>, important: <Text>, age: <Number>, maxBudget: <Number>, city: <String>, bio: <Text>, image: <String>}` |


**Note:** The POST request needs a header of `Content-Type: application/json`.
