export async function GET({}) {
    let username = "deniznobody";
    let api_key = "cdf135c833971d694c742d2384c1bbd3";

    const res = await fetch(`https://ws.audioscrobbler.com/2.0/?method=user.getRecentTracks&user=${username}&api_key=${api_key}&format=json&nowplaying=true&limit=15`);

    const response = await res.json()
    const tracks = response.recenttracks;

    const t = JSON.stringify(tracks, 0 ,3)
    
    return new Response(t)
}


