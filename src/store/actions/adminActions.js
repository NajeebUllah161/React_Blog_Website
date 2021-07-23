import API from '../../utils/api';


export const getUsers = (token) => {
    return dispatch => {
        API.getUsers(token, response => {
            dispatch({
                type: 'GOT_USERS',
                payload: response.data
            });
        });
    }
}

export const getPosts = (token) => {
    return dispatch => {
        API.getPosts(token, response => {
            dispatch({
                type: 'GOT_POSTS',
                payload: response.data
            });
        });
    }
}

export const addPost = (post, token) => {
    return dispatch => {
        API.addPost(post, token, response => {
            dispatch({
                type: 'POST_ADDED',
                payload: response.data
            })
        })
    }
}


export const getSinglePost = (id, token) => {
    return dispatch => {
        API.getSinglePost(id, token, response => {
            dispatch({
                type: 'GOT_SINGLE_POST',
                payload: response.data
            })
        })
    }
}

export const uploadImage = (data, token, postId, userId) => {
    return dispatch => {
        API.uploadImage(data, token, postId, userId, response => {
            dispatch({
                type: 'UPLOADED_IMAGE',
                payload: response.data
            });
        });
    }
}

export const updatePost = (post, token) => {
    return dispatch => {
        API.updatePost(post, token, response => {
            dispatch({
                type: 'UPDATED_POST',
                payload: response.data
            })
        })
    }
}