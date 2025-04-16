require("dotenv").config();
const app = require("./src/app");

const PORT = process.env.PORT || 5000;

app.listen(PORT, async () => {

    console.log(`Server running on port ${PORT}`);
});