import { REMOTE_URL } from '../../../shared/constants';
export const updateData = async () => {
  const url = REMOTE_URL + '/';

  fetch(url);
};
