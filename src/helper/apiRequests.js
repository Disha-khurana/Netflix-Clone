const API_KEY = `bd865e427bfdf9d8bf595ebb4cafeadb`;
export const IMG_URL = `https://image.tmdb.org/t/p/original`;

export const requests = {
    getDataByNetwork: (networkId) => { return `discover/tv?api_key=${API_KEY}&language=en-US&page=1&with_networks=${networkId}`},
    getCollections: (platform,endpoint) =>`${platform}/${endpoint}?api_key=${API_KEY}&language=en-US&page=1`,
    getVideoDetails: (platform,id) => `${platform}/${id}?api_key=${API_KEY}&append_to_response=videos,credits,similar,recommendations`,
    getGenresList: (platform) => `genre/${platform}/list?api_key=${API_KEY}`,
    getDataByGenre: (platform,genreid)=> {return `discover/${platform}?api_key=${API_KEY}&language=en-US&with_genres=${genreid}`},
    getBySearch:(platform,query)=> `search/${platform}?api_key=${API_KEY}&query=${query}`
}

export const platformType = {
    tv:"tv",
    movie: "movie"
}

export const endpoints = {
    popular: "popular",
    topRated: "top_rated",
    upcoming: "upcoming",
    nowPlaying: "now_playing",
    airingToday: "airing_today",
    onTheAir: "on_the_air"
}

