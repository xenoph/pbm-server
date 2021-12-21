import { insertOne, findOne, find } from '../resolvers';

const PlayerModule = {
    typeDefs: `
        type Player inherits Document {
            name: String!
        } 

        extend type Query {
            findOnePlayer(_id: ID!): Player
            findPlayers(): Find<Player>
        }

        extend type Mutation {
            insertOnePlayer(name: String): Player
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

export default PlayerModule;
