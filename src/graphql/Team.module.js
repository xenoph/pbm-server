import { insertOne, findOne, find } from '../resolvers';

const TeamModule = {
    typeDefs: `
        type Team inherits Document {
            name: String!
        } 

        extend type Query {
            findOneTeam(_id: ID!): Team
            findTeams(): Find<Team>
        }

        extend type Mutation {
            insertOneTeam(name: String): Team
        }
    `,
    resolvers: {
        Query: {
            findOneTeam: findOne('Teams'),
            findTeams: find('Teams'),
        },
        Mutation: {
            insertOneTeam: insertOne('Teams'),
        },
    },
};

export default TeamModule;
