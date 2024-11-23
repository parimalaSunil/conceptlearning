// lib/googleSheets.js
import { google } from 'googleapis';

const getGoogleSheetData = async () => {
  const sheets = google.sheets({ version: 'v4' });

  // Set up authentication using API Key (simplified)
  const auth = new google.auth.GoogleAuth({
    keyFile: process.env.GOOGLE_SHEET_CREDENTIALS_PATH, // Use your downloaded credentials JSON
    scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
  });

  const client = await auth.getClient();

  // Google Sheet ID and range (adjust based on your sheet)
  const sheetId = process.env.GOOGLE_SHEET_ID;
  const range = 'ParentReviews!D4'; // Adjust this range according to your Google Sheet's structure

  const response = await sheets.spreadsheets.values.get({
    auth: client,
    spreadsheetId: sheetId,
    range: range,
  });

  return response.data.values; // Returns array of rows
};

export { getGoogleSheetData };
