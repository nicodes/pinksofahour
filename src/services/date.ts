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
export function getFormattedDate(dateInput?: string | null) {
  if (!dateInput) return;

  // Parse the input date
  const dateObj = new Date(dateInput);

  // Check if the date is invalid
  if (isNaN(dateObj.getTime())) throw new Error("Invalid date input");

  // Get the day, date, and month
  const day: string = days[dateObj.getDay()];
  const date: string = dateObj.getDate().toString();
  const month: string = months[dateObj.getMonth()];

  // Initialize the return object
  const dateInfo: { day: string; date: string; month: string; time?: string } =
    { day, date, month };

  // Check if the time was provided by comparing the length of the dateInput string.
  // This is a simple check and may not cover all edge cases.
  // A more robust solution would involve regex or date-time library.
  if (dateInput.includes("T") || dateInput.includes(" ")) {
    // Get hours and minutes, pad with zero if necessary
    const hours = dateObj.getHours().toString().padStart(2, "0");
    const minutes = dateObj.getMinutes().toString().padStart(2, "0");
    // Optionally, include seconds or further precision depending on your requirements
    // const seconds = dateObj.getSeconds().toString().padStart(2, '0');

    // Append time to the dateInfo object
    dateInfo.time = `${hours}:${minutes}`; // Include seconds if needed: `:${seconds}`
  }

  return dateInfo;
}
