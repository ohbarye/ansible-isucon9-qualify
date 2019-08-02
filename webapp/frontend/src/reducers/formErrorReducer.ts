import {LOGIN_FAIL} from "../actions/authenticationActions";
import { AnyAction } from "redux";
import {REGISTER_FAIL} from "../actions/registerAction";

export interface FormErrorState {
    errorMsg: string[],
}

const initialState: FormErrorState = {
    errorMsg: []
};

const formError = (state: FormErrorState = initialState, action: AnyAction): FormErrorState => {
    switch (action.type) {
        case LOGIN_FAIL:
        case REGISTER_FAIL: {
            return {
                ...action.payload,
            }
        }
        default:
            return initialState;
    }
};

export default formError;