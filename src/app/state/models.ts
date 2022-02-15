import { BehaviorSubject } from "rxjs";
import { IHospital } from "../Components/models";

export interface State {
  actions: {
    setOrigin: (origin: Object) => void;

  }
  state: BehaviorSubject<initialState>
}


export interface initialState {
  hospitalList: IHospital[]
}
