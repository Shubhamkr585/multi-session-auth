import express from "express"
import "dotenv/config"

const PORT = process.env.PORT

const app = express()

app.get("/", (req: any, res:any) => {
    res.send("hello world")
})

// app.use()

app.listen(3000, () => {
    console.log("server is running on port 3000")
})