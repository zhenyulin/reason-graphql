let typeDefs = Query.typeDef ++ Mutation.typeDef ++ Author.typeDef ++ Post.typeDef;

let resolvers = {
	"Query": Query.resolvers,
	"Mutation": Mutation.resolvers,
	"Author": Author.resolvers,
	"Post": Post.resolvers
};

let schema = GraphQLTools.makeExecutableSchema({"typeDefs": typeDefs, "resolvers": resolvers});