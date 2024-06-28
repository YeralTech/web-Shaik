const API_KEY = 'TU_CLAVE_API_AQUI';  // Reemplaza esto con tu clave API real
const SHEET_ID = '1QlWzvabN2U9DhzAHuSxSs9bH3mzBYXiEE8b5N2mHceE';
const SHEET_NAME = 'Hoja 1';

export const appendDataToSheet = async (data) => {
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${SHEET_NAME}!A1:append?valueInputOption=RAW&key=${API_KEY}`;

  const body = {
    range: `${SHEET_NAME}!A1`,
    majorDimension: 'ROWS',
    values: [data],
  };

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    throw new Error('Error al agregar datos');
  }

  return response.json();
};
