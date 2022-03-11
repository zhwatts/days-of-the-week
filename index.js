/** @format */

function isDateFuture(date) {
	if (date.setHours(0, 0, 0, 0) <= new Date().setHours(0, 0, 0, 0)) {
		return false;
	}

	return true;
}

function isValueDate(date) {
	let result = false;

	switch (true) {
		case date instanceof Date:
		case !!Date.parse(date):
			result = true;
		default:
			break;
	}

	return result;
}

function renderDateObject(dateValue) {
	let _formattedDate;

	switch (true) {
		case dateValue instanceof Date:
			_formattedDate = dateValue;
			break;
		case !!Date.parse(dateValue):
			const dateArray = dateValue.split("-");
			dateArray[1] -= 1; // Date() expects month to be zero indexed
			_formattedDate = new Date(...dateArray); // if 'YYYY-MM-DD' string is passed instead of multi parts, Date() will parse string with GMT timezone offset by default
			break;
		default:
			_formattedDate = new Date();
	}

	return _formattedDate.setHours(0, 0, 0, 0);
}

module.exports = function (firstDate, secondDate = new Date()) {
	let DATE_ONE = new Date();
	let DATE_TWO = new Date();
	let ORDERED_DATES = [];
	let DATE_ARRAY = [];

	if (isValueDate(firstDate)) {
		DATE_ONE = new Date(renderDateObject(firstDate));
	}

	if (isValueDate(secondDate)) {
		DATE_TWO = new Date(renderDateObject(secondDate));
	}

	ORDERED_DATES = [DATE_ONE, DATE_TWO].sort(function (a, b) {
		return a - b;
	});

	let cursor = new Date(ORDERED_DATES[0]);

	while (cursor <= ORDERED_DATES[1]) {
		DATE_ARRAY.push(new Date(cursor));

		cursor.setDate(cursor.getDate() + 1);
	}

	return DATE_ARRAY;
};
