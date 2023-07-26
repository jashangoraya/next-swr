
export default async function nextSSRApi() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users',
        { cache: 'no-store' })
    const data = await res.json();
    return data;
}