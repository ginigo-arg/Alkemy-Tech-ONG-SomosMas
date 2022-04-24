import { getOrganization } from '../../Services/OrganizationService';
import { LOGIN_AUTH_ME_ACTION } from '../auth/authActions';
import { LOADING_ON, LOADING_OFF } from '../global/globalAction';
import { GET_ABOUT, USABOUTUS_ERROR } from './types';

export const GET_ABOUT_FUNCTION = () => async (dispatch) => {
  dispatch(LOADING_ON());
  dispatch(LOGIN_AUTH_ME_ACTION());
  try {
    const organization = await getOrganization();
    dispatch({
      type: GET_ABOUT,
      payload: organization,
    });
    dispatch(LOADING_OFF());
  } catch (error) {
    dispatch({
      type: USABOUTUS_ERROR,
      payload: error.message,
    });
    dispatch(LOADING_OFF());
  }
};
