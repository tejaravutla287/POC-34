const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
    res.send('<h1>POC 34: Docker App Deployed Successfully to Azure Web App!</h1>');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
