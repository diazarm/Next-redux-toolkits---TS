import {useDispatch, TypedUseSelectorHook, useSelector} from "react-redux";
import { AppDispatch, RootState } from "./store";

export const useAppDispatch = () => useDispatch<AppDispatch>()
//exporto useAppDispatch para que cuando lo use sepa que tiene el tipo de dato del store

export const useAppSelector : TypedUseSelectorHook<RootState> = useSelector;
//cuando quieras un selector de estado usa app selector
