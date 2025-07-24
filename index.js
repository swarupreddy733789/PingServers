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
        const response1 = axios.get('https://eureka-server-latest-8g6s.onrender.com');
        const response2 = axios.get('https://pingservers-ylt0.onrender.com/status');
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