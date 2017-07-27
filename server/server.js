const express = require('express');
const path = require('path');

const publicPaht = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
const app = express();

app.use(express.static(publicPaht));

app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});

