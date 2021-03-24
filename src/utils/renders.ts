export const displayTimestamp = (
	timestamp: number | string,
	withTime: boolean = true,
) => {
	const date = new Date(timestamp).toLocaleTimeString([], {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
		hour: '2-digit',
		minute: '2-digit',
	});

	return withTime ? date : date.split(',')[0];
};
