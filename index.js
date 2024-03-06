// const express = require("express");
// const axios = require("axios");
// const http = require("http");
// const app = express();
// const PORT = process.env.PORT || 3000;

// app.set("view engine", "ejs");

// app.get("/", async (req, res) => {
//   try {
//     const response = await axios.get(
//       "https://apiv3.apifootball.com/?action=get_countries&APIkey=https://apiv3.apifootball.com/?action=get_countries&APIkey=abdacef9f0e555dd193628cd18f5da0c6d03a3c14141d49089f2f40d322bbbed"
//     );
//     const liveScores = response.data() {
//         return {
            
//         }
//     },
//     res.render("index", { liveScores });
//   } catch (error) {
//     console.error("Error fetching live scores:", error);
//     res.status(500).send("Error fetching live scores");
//   }
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
