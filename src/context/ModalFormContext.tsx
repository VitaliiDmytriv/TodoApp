import { ReactNode, createContext, useReducer } from "react";

type State = {
    isActive: boolean;
    isAdd: boolean;
    isEdit: boolean;
    isDel: boolean;
    isCreateDir: boolean;
    isEditDir: boolean;
    isDelDir: boolean;
};

const initialState: State = {
    isActive: false,
    isAdd: false,
    isEdit: false,
    isDel: false,
    isCreateDir: false,
    isEditDir: false,
    isDelDir: false,
};

type Action =
    | {
          type: "close";
      }
    | {
          type: "addTask";
      }
    | {
          type: "editTask";
      }
    | {
          type: "deleteTask";
      }
    | {
          type: "createDirectory";
      }
    | {
          type: "editDirectory";
      }
    | {
          type: "deleteDirectory";
      };

type ModalFormContext = State & {
    dispatch: React.Dispatch<Action>;
};

export const ModalFormContext = createContext<ModalFormContext>({
    ...initialState,
    dispatch: () => {},
});

type Props = {
    children: ReactNode;
};

function reducer(state: State, action: Action): State {
    switch (action.type) {
        case "close":
            return { ...initialState };
        case "addTask":
            return { ...state, isActive: true, isAdd: true };
        case "editTask":
            return { ...state, isActive: true, isEdit: true };
        case "deleteTask":
            return { ...state, isActive: true, isDel: true };
        case "createDirectory":
            return { ...state, isActive: true, isCreateDir: true };
        case "editDirectory":
            return { ...state, isActive: true, isEditDir: true };
        case "deleteDirectory":
            return { ...state, isActive: true, isDelDir: true };
        default:
            return state;
    }
}

export default function ModalFormProvider({ children }: Props) {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <ModalFormContext.Provider value={{ ...state, dispatch }}>
            {children}
        </ModalFormContext.Provider>
    );
}
