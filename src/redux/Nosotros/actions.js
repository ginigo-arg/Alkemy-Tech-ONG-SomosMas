import { getOrganization, postOrganization } from '../../Services/OrganizationService';
import { LOADING_ON, LOADING_OFF } from '../global/globalAction';
import { GET_ABOUT, USABOUTUS_ERROR, USABOUTUS_UPDATE } from './types';

export const GET_ABOUT_FUNCTION = () => async (dispatch) => {
  dispatch(LOADING_ON());
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

export const POST_ABOUT_FUNCTION = (data) => async (dispatch) => {
  dispatch(LOADING_ON());
  try {
    const organization = await postOrganization(data);
    dispatch({
      type: USABOUTUS_UPDATE,
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
