<!-- @format -->

# [Days of the week 👏🏻 👏🏻](https://www.youtube.com/watch?v=oKqAblcwFOA)

Provide 2 ISO dates ('YYYY-MM-DD' or date Objects) and recieve back an array of date objects, representing each day in between.
<br>
<br>

## What does it do?

Pure **JavaScript** function for collecting all dates in a duration span.

Simply povide any two ISO 8601 formatted date string, or javascript Date class objects. days-of-the-week will determine which date is earliest and return an array of Date objects for each day within the duration.
<br>
<br>
Although times parts are accepted in the date input parameters, they are not considered during rendering, and are not required. All outputted Date objects will be set to midnight.

second property defaults to `new Date()` if no value is provided
<br>
<br>

## Examples

<hr/>

<br/>
<br/>

```
const days = require('days-of-the-week');

const arrayOfDays = days(new Date(), '2022-03-20 07:52:45')
console.log(arrayOfDays)
```

will output

```
[
  2022-03-10T05:00:00.000Z,
  2022-03-11T05:00:00.000Z,
  2022-03-12T05:00:00.000Z,
  2022-03-13T05:00:00.000Z,
  2022-03-14T04:00:00.000Z,
  2022-03-15T04:00:00.000Z,
  2022-03-16T04:00:00.000Z,
  2022-03-17T04:00:00.000Z,
  2022-03-18T04:00:00.000Z,
  2022-03-19T04:00:00.000Z,
  2022-03-20T04:00:00.000Z
]
```

<br/>
<br/>

<hr/>

<br/>
<br/>

```
const days = require('days-of-the-week');

// date executed was 2022-03-10 09:16 EST
const arrayOfDays = days('2022-04-16 09:15:45')
console.log(arrayOfDays)
```

will output

```
[
  2022-03-10T05:00:00.000Z, 2022-03-11T05:00:00.000Z,
  2022-03-12T05:00:00.000Z, 2022-03-13T05:00:00.000Z,
  2022-03-14T04:00:00.000Z, 2022-03-15T04:00:00.000Z,
  2022-03-16T04:00:00.000Z, 2022-03-17T04:00:00.000Z,
  2022-03-18T04:00:00.000Z, 2022-03-19T04:00:00.000Z,
  2022-03-20T04:00:00.000Z, 2022-03-21T04:00:00.000Z,
  2022-03-22T04:00:00.000Z, 2022-03-23T04:00:00.000Z,
  2022-03-24T04:00:00.000Z, 2022-03-25T04:00:00.000Z,
  2022-03-26T04:00:00.000Z, 2022-03-27T04:00:00.000Z,
  2022-03-28T04:00:00.000Z, 2022-03-29T04:00:00.000Z,
  2022-03-30T04:00:00.000Z, 2022-03-31T04:00:00.000Z,
  2022-04-01T04:00:00.000Z, 2022-04-02T04:00:00.000Z,
  2022-04-03T04:00:00.000Z, 2022-04-04T04:00:00.000Z,
  2022-04-05T04:00:00.000Z, 2022-04-06T04:00:00.000Z,
  2022-04-07T04:00:00.000Z, 2022-04-08T04:00:00.000Z,
  2022-04-09T04:00:00.000Z, 2022-04-10T04:00:00.000Z,
  2022-04-11T04:00:00.000Z, 2022-04-12T04:00:00.000Z,
  2022-04-13T04:00:00.000Z, 2022-04-14T04:00:00.000Z,
  2022-04-15T04:00:00.000Z, 2022-04-16T04:00:00.000Z
]
```
