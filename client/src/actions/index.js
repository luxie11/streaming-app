import {SIGN_IN, SIGN_OUT, CREATE_STREAM, DELETE_STREAM, EDIT_STREAM, FETCH_STREAM, FETCH_STREAMS} from './types';
import streams from '../apis/streams';
import history from '../history'

export const signIn = (id) =>{
    return {
        type: SIGN_IN,
        payload: id
    }
}

export const signOut = () =>{
    return {
        type: SIGN_OUT
    }
}

export const createStream = (formValues) =>{
    return async (dispatch, getState) =>{
        const { userId } = getState().auth;
        const result = await streams.post('/streams', {...formValues, userId });
        dispatch({
            type: CREATE_STREAM,
            payload:result.data
        });
        history.push('/');
    }
}

export const fetchStreams = () =>{
    return async dispatch =>{
        const result = await streams.get('/streams');
        dispatch({
            type:FETCH_STREAMS,
            payload: result.data
        });
    }
}

export const fetchStream = (id)=>{
    return async dispatch => {
        const result = await streams.get(`/streams/${id}`);
        dispatch({
            type: FETCH_STREAM,
            payload: result.data
        });
    }
}

export const editStream = (id, formValues) =>{
    return async dispatch =>{
        const result = await streams.patch(`/streams/${id}`,formValues);
        dispatch({
            type: EDIT_STREAM,
            payload: result.data
        });
        history.push('/');
    }
}

export const deleteStream = (id) =>{
    return async dispatch =>{
        await streams.delete(`/streams/${id}`);
        dispatch({
            type: DELETE_STREAM,
            payload: id
        })
        history.push('/');
    }
}