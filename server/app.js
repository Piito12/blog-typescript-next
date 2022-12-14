import express from "express";

const app = express();

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Hello new Docker!!");
});


app.get("*", (req, res) => {
    res.send("Hello new Docker!!");
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});