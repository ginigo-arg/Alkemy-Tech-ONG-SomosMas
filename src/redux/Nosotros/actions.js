import { getOrganization } from '../../Services/OrganizationService';
import { LOADING_ON, LOADING_OFF } from '../global/globalAction';
import { GET_ABOUT, USABOUTUS_ERROR } from './types';

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

// const addText = () => ({
//   type: types.USABOUTUS_ADD,
// });

// const addTextOk = (text) => ({
//   type: types.USABOUTUS_UPDATE,
//   payload: text,
// });

// const addTextError = (error) => ({
//   type: types.USABOUTUS_ERROR,
//   payload: error,
// });
