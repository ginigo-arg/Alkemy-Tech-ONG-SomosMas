import { getOrganization } from '../../Services/OrganizationService';
import { GET_ABOUT, USABOUTUS_ERROR } from './types';

export const GET_ABOUT_FUNCTION = () => async (dispatch) => {
  try {
    const organization = await getOrganization();
    dispatch({
      type: GET_ABOUT,
      payload: organization,
    });
  } catch (error) {
    dispatch({
      type: USABOUTUS_ERROR,
      payload: error.message,

    });
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
