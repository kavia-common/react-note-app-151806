export interface IAsyncReducer {
    loading: boolean;
    success: boolean;
    error: boolean;
}

export enum AsyncReducerActionTypes {
    loading = 'async/LOADING',
    success = 'async/SUCCESS',
    error = 'async/ERROR',
}

interface IAsyncReducerAction {
    type: AsyncReducerActionTypes;
    payload?: any;
}

function asyncReducer(state: IAsyncReducer, action: IAsyncReducerAction) {
    switch (action.type) {
        case AsyncReducerActionTypes.loading:
            return {...state, loading: true, error: false};
        case AsyncReducerActionTypes.success:
            return {...state, loading: false, success: true};
        case AsyncReducerActionTypes.error:
            return {...state, loading: false, error: true};
        default:
            return state;
    }
}

export default asyncReducer;
