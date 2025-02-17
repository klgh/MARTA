const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
const PORT = 3000;

app.use(cors());

app.get("/marta-trains", async (req, res) => {
    try {
        const response = await axios.get("https://developerservices.itsmarta.com:18096/itsmarta/railrealtimearrivals/developerservices/traindata?apiKey=1d0e48eb-eda5-49c0-bd3f-176887325c8b");
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch MARTA train data" });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});


