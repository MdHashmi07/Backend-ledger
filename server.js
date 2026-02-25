require("dotenv").config();
const app = require("./src/app.js");
const connectToDB = require("./src/config/database.js");

const PORT =  7000;

connectToDB()
.then(() => {
    console.log("Database connected Successfully");
    app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
    });
}).catch((err) => {
    console.log("Error conneting to Database!!!", err);
    process.exit(1);
});

