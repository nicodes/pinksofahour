interface JsonFile {
  [key: string]: any;
}

export async function readJsonFileFromDrive(fileId: string): Promise<JsonFile> {
  const fileUrl = `https://drive.google.com/uc?id=${fileId}&export=download`;
  const fileResponse = await fetch(fileUrl);
  return fileResponse.json();
}
