import { google } from "googleapis";

/** Get list of calendar events */
export async function getEvents() {
  const calendar = google.calendar({
    version: "v3",
    auth: import.meta.env.GOOGLE_API_KEY,
  });

  const response = await calendar.events.list({
    calendarId: import.meta.env.GOOGLE_CALENDAR_ID,
    timeMin: new Date().toISOString(),
    singleEvents: true,
    orderBy: "startTime",
    maxResults: 20,
  });

  return response.data.items;
}
