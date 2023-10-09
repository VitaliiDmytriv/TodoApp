import { createContext, ReactNode, useReducer } from "react";
import { SideBarType } from "../type";

type State = {
    isActive: boolean;
    isLeftBar: boolean;
    isRigthBar: boolean;
};

const initialState: State = {
    isActive: false,
    isLeftBar: false,
    isRigthBar: false,
};

type Action = { type: "open"; side: SideBarType } | { type: "close" };

type SideBarsContextType = State & {
    dispatch: React.Dispatch<Action>;
};

type Props = {
    children: ReactNode;
};

export const SideBarsContext = createContext<SideBarsContextType>({
    ...initialState,
    dispatch: () => {},
});

function reducer(state: State, action: Action): State {
    switch (action.type) {
        case "open":
            if (action.side === "left") {
                return { ...state, isLeftBar: true, isActive: true };
            }
            return { ...state, isRigthBar: true, isActive: true };
        case "close":
            return { isLeftBar: false, isRigthBar: false, isActive: false };
        default:
            return state;
    }
}

export default function SideBarsProvider({ children }: Props) {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <SideBarsContext.Provider value={{ ...state, dispatch }}>
            {children}
        </SideBarsContext.Provider>
    );
}
