export default async function fetchData(url) {
  try {
    const res = await fetch(url);
    const data = await res.json();
    if (res.ok) return data;
    else throw new Error("Failed to fetch");
  } catch (error) {
    return error.message;
  }
}
