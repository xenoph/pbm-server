import setupMongodbClient from "server/config/mongodb";

export default async function getStaticContext() {
	const mongodb = await setupMongodbClient();

	return {
		...mongodb,
	};
}
