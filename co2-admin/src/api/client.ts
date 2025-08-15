// src/api/client.ts
const apiBase = import.meta.env.VITE_API_BASE;

export async function testCalculation() {
  const res = await fetch(`${apiBase}/calculations/test`);
  if (!res.ok) {
    throw new Error(`Ошибка API: ${res.status}`);
  }
  return res.json();
}