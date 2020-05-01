import {buildSchema, printSchema} from 'graphql';

const sdlSchema = `
  type Author {
    firstName: String
    lastName: String
  }
  type Query {
    author(id: Int!): Author
  }
`;

const schema = buildSchema(sdlSchema);
console.log("### parsed schema", schema);

const schemaStr = printSchema(schema);
console.log("### schema string");
console.log(schemaStr);
