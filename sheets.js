import { google } from "googleapis";

export async function getDogsList() {
  try {
    const auth = await google.auth.getClient({
      scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
    });

    const sheets = google.sheets({ version: "v4", auth });
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.SHEET_ID,
      range: "Sheet1", // sheet name
    });

    const rows = response.data.values;

    console.log(rows)
    // if (rows.length) {
    //   return rows.map((row) => ({
    //     title: row[2],
    //     subtitle: row[3],
    //     code: row[4],
    //     browser: row[5],
    //     short_name: row[17],
    //     emojipedia_slug: row[18],
    //     descriptions: row[19],
    //   }));
    // }
  } catch (err) {
    console.log(err);
  }
  return [];
}
