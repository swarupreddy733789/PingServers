const express = require('express');
const cron = require('node-cron');
const axios = require('axios');

const server = express();

server.get("/status", (req, res) => {
    return res.status(200).json({
        message: "hello from server"
    });
});

cron.schedule('*/50 * * * * *', async () => {
    try {
        const response = axios.get('https://eureka-server-latest-8g6s.onrender.com');
        console.log("first");
    }
    catch(error) {
        console.log('ping failed: ', error.message);
    }
});

const PORT = process.env.PORT || 1000;

server.listen(PORT, () => {
    console.log("server stated.");
})