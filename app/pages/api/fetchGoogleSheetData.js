// pages/api/fetchGoogleSheetsData.js
import { getGoogleSheetData } from '../../lib/googleSheets';

// pages/api/fetchGoogleSheetsData.js
export default async function handler(req, res) {
    try {
      const data = await fetchGoogleSheetsData(); // Your function to fetch data from Google Sheets
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching data' });
    }
  }
  
