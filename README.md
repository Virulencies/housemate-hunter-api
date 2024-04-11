# Life List API

This API can keep track of all the people looking for roommates in San Francisco and Denver. This repo is meant to be paired with the [Housemate Hunter](https://github.com/pareesakd1118/housemate-hunter) frontend.

## Set Up Instructions

Clone down the repo and change into the repo's directory.

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
| GET (all roommates) | /roommates | None | `[{
        "id": 1,
        "name": "Isabella Daniels",
        "gender": "non-binary",
        "city": "San Francisco",
        "bio": "Hi, I'm Isabella, a healthcare hero providing compassionate care in the bustling city of San Francisco. Beyond the hospital walls, I'm exploring local farmers' markets or unwinding with a good book in hand. My workspace is an oasis of tranquility amidst the vibrant energy of the city, reflecting the peace and healing I strive to bring to my patients.",
        "important": "My foot is currently broken so it is important to me to find a place with an elevator.",
        "age": 28,
        "isSmoker": false,
        "hasPets": true,
        "maxBudget": 3450,
        "image": "https://images.unsplash.com/photo-1517462964-21fdcec3f25b?q=80&w=2640&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }, ... ] }` |
| GET (single roommate) | /roommates/:id | None | `{
        "id": 1,
        "name": "Isabella Daniels",
        "gender": "non-binary",
        "city": "San Francisco",
        "bio": "Hi, I'm Isabella, a healthcare hero providing compassionate care in the bustling city of San Francisco. Beyond the hospital walls, I'm exploring local farmers' markets or unwinding with a good book in hand. My workspace is an oasis of tranquility amidst the vibrant energy of the city, reflecting the peace and healing I strive to bring to my patients.",
        "important": "My foot is currently broken so it is important to me to find a place with an elevator.",
        "age": 28,
        "isSmoker": false,
        "hasPets": true,
        "maxBudget": 3450,
        "image": "https://images.unsplash.com/photo-1517462964-21fdcec3f25b?q=80&w=2640&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }` |

**Note:** The POST request needs a header of `Content-Type: application/json`.
