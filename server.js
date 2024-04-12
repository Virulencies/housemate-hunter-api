const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);
const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors()); // CORS for ALL origins, not just specific ones

app.set('port', process.env.PORT || 3001);

app.get('/api/v1/roommates', async (request, response) => {
    try {
        const roommates = await database('roommate').select();
        response.status(200).json(roommates);
    } catch(error) {
        console.error(error); // Logging
        response.status(500).json({error});
    }
});

app.get('/api/v1/roommates/:id', async (request, response) => {
    try {
        const roommates = await database('roommate').where('id', request.params.id).select();
        if(roommates.length){
            response.status(200).json(roommates);
        } else {
            response.status(404).json({
                error: `Could not find roommate with id ${request.params.id}`
            });
        }
    } catch (error) {
        console.error(error); // Log the error
        response.status(500).json({error});
    }
});

app.listen(app.get('port'), () => {
    console.log(`App is running on http://localhost:${app.get('port')}.`);
});
