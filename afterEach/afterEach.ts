import axios from 'axios';


export const deleteLauncher = (launcherId: string) =>
  axios.delete(`${config.apiURL}/${launcherId}`, {
    headers: {
      Accept: 'application/json'
    },
  });
