const API_URL = import.meta.env.VITE_API_URL;

export async function getRandomNumber(max: number, min = 0): Promise<number> {
  try {
    const res = await fetch(`${API_URL}/random/int/${min}&${max}`,
      {
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'GET',
        referrerPolicy: 'strict-origin-when-cross-origin',
        mode: 'cors',
      }
    );

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const data = await res.json();
    return data["num"];
  } catch (error) {
    console.error('Failed to fetch random number:', error);
    throw error;
  }
}

export async function getRandomHexadecimal(length: number): Promise<string> {
  try {
    const res = await fetch(`${API_URL}/random/hexadecimal/${length}`,
      {
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'GET',
        referrerPolicy: 'strict-origin-when-cross-origin',
        mode: 'cors',
      }
    );

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}. Body: ${await res.text()}`);
    }

    const data = await res.json();
    return data["hex"];
  } catch (error) {
    console.error('Failed to fetch random hexadecimal:', error);
    throw error;
  }
}