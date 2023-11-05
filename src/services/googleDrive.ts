/** Gets public json from gdrive file id */
export async function getJson() {
  try {
    const fileUrl = `https://drive.google.com/uc?id=${
      import.meta.env.GOOGLE_DRIVE_ID
    }&export=download`;
    const res = await fetch(fileUrl);
    const json = await res.json();
    return json;
  } catch (e) {
    console.error(e);
    return {};
  }
}
