/** @format */

const validateDateStringFormat = (dateString) => {
	const dateArray = dateString.split("-");

	// GENERAL CHECKS
	if (dateArray.length !== 3) return new Error();
	if (dateArray.every((item) => isNaN(parseInt(item)))) return new Error();
	if (dateArray.every((item) => parseInt(item) <= 0)) return new Error();

	// YEAR
	if (dateArray[0].length < 4) return new Error();

	// MONTH
	if (dateArray[1].length !== 2 || dateArray[1] > 12) return new Error();
	dateArray[1] = dateArray[1] - 1; // Date.setMonth requires month to be zero indexed

	// DAY
	if (dateArray[2].length !== 2 || dateArray[2] > 31) return new Error();

	return dateArray.map((item) => parseInt(item));
};

module.exports = function (firstDate, secondDate = new Date()) {
	const DATE_ONE = new Date();
	const DATE_TWO = new Date();

	/** CHECK THAT PROVIDED ARGUMENTS CAN BE INITIALIZED AS DATE CLASS */
	if (!(firstDate instanceof Date))
		try {
			DATE_ONE.setFullYear(...validateDateStringFormat(firstDate));
		} catch (err) {
			return new Error("First date parameter is not ISO formatted");
		}

	if (!(secondDate instanceof Date))
		try {
			DATE_TWO.setFullYear(...validateDateStringFormat(secondDate));
		} catch (err) {
			return new Error("Second date parameter is not ISO formatted");
		}

	return [DATE_ONE, DATE_TWO];
};
