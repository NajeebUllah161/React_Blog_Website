import API from '../../utils/api';

export const login = (email, pass) => {
    return (dispatch) => {
        API.login(email, pass, result => {
            console.log("Result?", result.data);
            dispatch({
                type: 'LOGIN',
                payload: {
                    email: email,
                    token: result.data.id,
                    userId: result.data.userId
                }
            });

            API.getUser(result.data.userId, result.data.id, result2 => {
                dispatch({
                    type: 'AFTER_LOGIN',
                    payload: result2.data
                })
            })

        });
    }
}

export const register = (name, email, pass) => {
    return dispatch => {
        API.register(name, email, pass, result => {
            if (result.status === 200) {
                dispatch(login(email, pass));
            }
            else {
                if (result) {
                    dispatch({
                        type: 'SHOW_ERROR',
                        payload: "There was an error. Do you already have an account?"
                    });
                }
            }
        });
    }
    /* {
        type: 'REGISTER',
         payload: { email, pass }
    }*/
}