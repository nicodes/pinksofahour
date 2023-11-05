/** Gets public json from gdrive file id */
export async function readJsonFileFromDrive() {
  const fileUrl = `https://drive.google.com/uc?id=${
    import.meta.env.GOOGLE_DRIVE_ID
  }&export=download`;
  const fileResponse = await fetch(fileUrl);
  const json = await fileResponse.json();
  console.log(json);
  return json;
}
