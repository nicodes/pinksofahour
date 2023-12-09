const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

/** Parse string date into { date, day, month, time? } */
export const getDateLabel = (date: Date) => ({
  day: days[date.getDay()],
  date: date.getDate().toString(),
  month: months[date.getMonth()],
  time: date.toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit",
  }),
});
