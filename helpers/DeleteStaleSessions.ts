import { PrismaClient } from "@prisma/client";

const SESSION_LIFETIME = 60 * 60 * 24 * 7; // in seconds, is a week
const prisma = new PrismaClient();

// Return a promise that removes all sessions older than SESSION_LIFETIME.
const deleteStaleSessions = async () => {
	const thresholdDate = new Date();
	thresholdDate.setSeconds(new Date().getSeconds() - SESSION_LIFETIME);
	return prisma.session.deleteMany({
		where: {
			creationTime: {
				lt: thresholdDate,
			},
		},
	});
};
export default deleteStaleSessions;
