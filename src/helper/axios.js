import axios from "axios";

const instance = axios.create({
    baseURL: `https://api.themoviedb.org/3/`,
    // headers: {
    //     accept: 'application/json',
    //     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZDg2NWU0MjdiZmRmOWQ4YmY1OTVlYmI0Y2FmZWFkYiIsIm5iZiI6MTcyMTcxMjQzNi42MzM5OTIsInN1YiI6IjY2OWRlOGYyM2YzY2MzM2I5ODQ3YTJhNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-m2ELD6LF3Hn7-dGncBCe86fWdzz4dsk_GNu_t6i6vs'
    //   }

})

export default instance;