import {
    TypedUseSelectorHook,
    useSelector,
    useDispatch,
} from 'react-redux';
import {bindActionCreators} from "redux";
import ActionCreators from "src/client/providers/state/actions"
import { RootState } from "src/client/providers/state/reducer";


export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators(ActionCreators, dispatch);
}