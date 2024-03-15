const app = require("./app");
const port = process.env.PORT || 3000

app.listen(port, (err) => {
    if (err) {
        return (err)
    }
    console.log(`Server has been started on ${port} port`)
});