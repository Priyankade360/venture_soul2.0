import axios from "axios";


const rootUrl = 'https://server.venturesoul.net/api/v1/';

// const rootUrl = 'http://localhost:3190/api/v1/';




const settingsURL = rootUrl + 'settings';
const newsURL = rootUrl + 'news';
const insightURL = rootUrl + 'insight';
const teamURL = rootUrl + 'teams';
const leadershipURL = rootUrl + 'leadership';





async function getSettings() {
  return await axios.get(settingsURL);
}


async function fetchnews(limit, offset) {
  return await axios.get(newsURL + '?limit=' + limit + '&offset=' + offset);
}

async function fetchinsights(limit, offset) {
  return await axios.get(insightURL + '?limit=' + limit + '&offset=' + offset);
}
async function fetchTeam() {
  return await axios.get(teamURL );
}
async function fetchLeadership() {
  return await axios.get(leadershipURL );
}





export const service = {

  getSettings,
  fetchnews,
  fetchinsights,

  fetchTeam, fetchLeadership,


}


