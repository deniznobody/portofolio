export const load = async ({ fetch }: any) => {
    const r = await fetch('/api/last15');
    const tracks = await r.json()
    return tracks;
};