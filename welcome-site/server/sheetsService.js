import { google } from "googleapis";

let sheetsClient = null;

function getClient() {
  if (sheetsClient) return sheetsClient;

  const {
    GOOGLE_SERVICE_ACCOUNT_EMAIL,
    GOOGLE_PRIVATE_KEY,
    GOOGLE_SHEETS_SPREADSHEET_ID,
  } = process.env;

  if (!GOOGLE_SERVICE_ACCOUNT_EMAIL || !GOOGLE_PRIVATE_KEY || !GOOGLE_SHEETS_SPREADSHEET_ID) {
    return null;
  }

  const auth = new google.auth.JWT(
    GOOGLE_SERVICE_ACCOUNT_EMAIL,
    null,
    GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
    ["https://www.googleapis.com/auth/spreadsheets"]
  );

  sheetsClient = google.sheets({ version: "v4", auth });
  return sheetsClient;
}

export async function appendToSheet(rowData) {
  try {
    const client = getClient();

    if (!client) {
      return {
        success: false,
        error: "Google Sheets not configured. Set environment variables.",
      };
    }

    await client.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEETS_SPREADSHEET_ID,
      range: "Sheet1",
      valueInputOption: "RAW",
      insertDataOption: "INSERT_ROWS",
      requestBody: {
        values: [rowData],
      },
    });

    return { success: true };
  } catch (err) {
    return { success: false, error: err.message };
  }
}
