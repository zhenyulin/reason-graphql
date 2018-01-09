const express = require("express");
const bodyParser = require("body-parser");
const { graphqlExpress, graphiqlExpress } = require("apollo-server-express");

const { schema } = require("./lib/js/src/schema.bs.js");

const app = express();

const { PORT = 3000, UP_STAGE = "" } = process.env;

app.route('/')
	.get(graphiqlExpress({ endpointURL: `/${UP_STAGE}` }))
	.post(bodyParser.json(), graphqlExpress({ schema }));

app.listen(PORT);