import axios from 'axios';

export const FETCH_MESSAGES_SUCCESS = 'FETCH_RECIPES_SUCCESS';
export const CREATE_MESSAGE_SUCCESS = 'CREATE_RECIPE_SUCCESS';

export const fetchMessagesSuccess = messages => ({type: FETCH_MESSAGES_SUCCESS, messages});
export const createMessageSuccess =  () => ({type: CREATE_MESSAGE_SUCCESS});

export const fetchMessages= () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('http://localhost:8000/messages');
      dispatch(fetchMessagesSuccess(response.data));
    } catch (e) {
      console.error(e)
    }
  }
};
export const createMessage = (message)=> {
  return async (dispatch) => {
    try {
      console.log(message);
      await axios.post('http://localhost:8000/messages', message);
      dispatch(createMessageSuccess())
    } catch (e) {
      console.error(e)
    }

  }
};