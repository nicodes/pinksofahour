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
/** Format date into 12 hour format */
export function formatTime(date: Date): string {
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? "PM" : "AM";

  const formattedHours = hours % 12 || 12; // the hour '0' should be '12'
  const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;

  return `${formattedHours}:${formattedMinutes} ${ampm}`;
}

/** Parse string date into { date, day, month, time? } */
export const getDateLabel = (dateInput: Date) => ({
  day: days[dateInput.getDay()],
  date: dateInput.getDate().toString(),
  month: months[dateInput.getMonth()],
  time: formatTime(dateInput),
});
