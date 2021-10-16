const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("App Started")
});


const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`)
})