import { useContext } from "react";
import { ModalFormContext } from "../context/ModalFormContext";

export const useModalFormContext = () => useContext(ModalFormContext);
