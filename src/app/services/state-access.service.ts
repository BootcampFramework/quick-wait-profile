import { Injectable } from '@angular/core';
import { State } from '../state/models';

@Injectable({
  providedIn: 'root',
})
export class StateAccessService {
  async importSharedState(name: string): Promise<State> {
    // @ts-ignore
    const moduleShared = await window.System.import(name);
    return moduleShared;
    // this.state = moduleShared.state$;
  }
}
