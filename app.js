const express = require("express");
const bodyParser = require("body-parser");
const { graphqlExpress, graphiqlExpress } = require("apollo-server-express");

const { schema } = require("./src/Schema.bs.js");

const app = express();

const { PORT = 3000, UP_STAGE = "" } = process.env;
const ENDPOINT_URL = `/`;

// The GraphQL endpoint
app.post(ENDPOINT_URL, bodyParser.json(), graphqlExpress({ schema }));

// GraphiQL, a visual editor for queries
app.get(
  ENDPOINT_URL,
  graphiqlExpress({ endpointURL: `${ENDPOINT_URL}${UP_STAGE}` })
);

app.listen(PORT);