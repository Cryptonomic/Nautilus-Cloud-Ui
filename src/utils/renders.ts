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

export const displayQueryRateTime = (timestamp: string, withDate: boolean = false) => {
	const date = new Date(timestamp).toLocaleTimeString([], {
		year: '2-digit',
		month: '2-digit',
		day: '2-digit',
		hour: '2-digit',
		minute: '2-digit',
	});

	return withDate ? date : date.split(', ')[1];
}

export const displayAmount = (
	amount: number,
	withZero: boolean = false,
): string => {
	if (!withZero && amount === 0) {
		return '';
	}
	return amount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};
