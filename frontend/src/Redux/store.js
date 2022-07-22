import { combineReducers, legacy_createStore } from "redux";

import {dataReducer} from "./Data/Reducer"



export const store = legacy_createStore(dataReducer)