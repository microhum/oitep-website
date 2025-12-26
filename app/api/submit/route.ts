import { NextRequest, NextResponse } from 'next/server';
import { google } from 'googleapis';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json();

    // Google Sheets setup
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });

    const spreadsheetId = process.env.GOOGLE_SHEET_ID;

    if (!spreadsheetId) {
      throw new Error('GOOGLE_SHEET_ID environment variable is not set');
    }

    // Prepare the data for Google Sheets
    const rowData = [
      new Date().toISOString(), // Timestamp
      formData.fullName || '',
      formData.email || '',
      formData.phone || '',
      formData.ageGroup || '',
      formData.occupation || '',
      formData.dailySaltIntake || '',
      (formData.mainSaltSources || []).join('; ') || '',
      formData.eatingOutFrequency || '',
      formData.processedFoodFrequency || '',
      formData.healthConditions || '',
      formData.sodiumRestriction || '',
      formData.weightGoal || '',
      formData.saltReductionGoal || '',
      (formData.tastePreferences || []).join('; ') || '',
      formData.cookingFrequency || '',
      formData.familySize || '',
      formData.budgetRange || '',
      formData.dataCollectionConsent ? 'Yes' : 'No',
      formData.personalizedTipsConsent ? 'Yes' : 'No',
      formData.termsAgreement ? 'Yes' : 'No',
      formData.privacyPolicy ? 'Yes' : 'No',
    ];

    // Append the data to the sheet
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: 'Sheet1!A:Z', // Adjust range as needed
      valueInputOption: 'RAW',
      requestBody: {
        values: [rowData],
      },
    });

    return NextResponse.json({ success: true, message: 'Data submitted successfully' });
  } catch (error) {
    console.error('Error submitting to Google Sheets:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to submit data' },
      { status: 500 }
    );
  }
}
