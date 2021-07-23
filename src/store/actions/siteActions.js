import API from '../../utils/api';


export const getPosts = (skip) => {
    return dispatch => {
        API.getSitePosts(skip, response => {
            dispatch({
                type: 'GOT_SITE_POSTS',
                payload: response.data,
                skip: skip
            });
        });
    }
}

export const getPostCount = () => {
    return dispatch => {
        API.getPostCount(response => {
            dispatch({
                type: 'GOT_POST_COUNT',
                payload: response.data.count
            });
        });
    }
}

export const postComment = (comment, token) => {
    return dispatch => {
        API.postComment(comment, token, response => {
            if (response.status === 200) {
                API.getCommentById(response.data.id, token, response2 => {
                    dispatch({
                        type: 'ADDED_COMMENT',
                        payload: response2.data
                    })
                })
            }
        });
    }
}

export const getPostBySlug = (slug, token) => {
    return dispatch => {
        API.getPostBySlug(slug, token, response => {
            dispatch({
                type: 'SET_FULL_POST_DATA',
                payload: response.data
            });
        });
    }
}

export const setPostData = (post) => {
    return dispatch => {
        dispatch({
            type: 'SET_DEFAULT_POST_DATA',
            payload: post
        });
    }
}

