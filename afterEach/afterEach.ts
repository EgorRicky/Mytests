import axios from 'axios';

import config from '../config';

export const deleteLauncher = (launcherId: string) =>
  axios.delete(`${config.apiURL}/launcher_project/${launcherId}`, {
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${config.token}`,
    },
  });
