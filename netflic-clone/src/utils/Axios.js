import axios from "axios";

const instance= axios.create({baseURL:"https://api.themoviedb.org/3",});//this base URL for all movies  on TMDB
export default instance;