<!-- @format -->

# [Days of the week 👏🏻 👏🏻](https://www.youtube.com/watch?v=oKqAblcwFOA)

Provide 2 ISO dates and recieve back an array of objects, representing each day in between.
<br>
<br>

## What does it do?

Simply povide any two ISO 8601 formatted date string, or javascript Date object. days-of-the-week will determine which date is earliest and return an array of Date objects for each day within the duration.
<br>
<br>
Although times are accepted as part of the 2 expected input parameters, they are not considered during rendering. All outputted Date objects will be set to midnight.

```
const { days } = require('days-of-the-week');

const arrayOfDays = days(new Date(), '2022-02-17 07:52:45')
```

will output

```
[
    Tue Feb 15 2022 00:00:00 GMT-0500 (Eastern Standard Time),
    Tue Feb 16 2022 00:00:00 GMT-0500 (Eastern Standard Time),
    Tue Feb 17 2022 00:00:00 GMT-0500 (Eastern Standard Time),
]
```
