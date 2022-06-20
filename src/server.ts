import cors from "cors";
import express from "express";

import routes from "./routes";

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errosMessage = err.message || "Something went wrong";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errosMessage,
    stack: err.stack,
  });
});

app.listen(5000, () =>
  console.log("Server is running at http://localhost:5000")
);
