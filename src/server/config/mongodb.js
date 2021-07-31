import { MongoClient } from 'mongodb';
import * as uuid from 'uuid';

export default async function setupMongodbClient() {
	// TODO: Make this mockable
	const client = await MongoClient.connect(process.env.MONGODB_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	});
	const mongo = await client.db();

	return {
		mongo,
		uuid: uuid.v4,
		uuidValidate: uuid.validate,
		/**
		 * Add collections under here
		 */
		Todos: mongo.collection('Todos'),
	};
}
