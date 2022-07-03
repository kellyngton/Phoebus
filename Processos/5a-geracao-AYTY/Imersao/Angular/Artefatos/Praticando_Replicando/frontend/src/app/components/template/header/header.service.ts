import { HearderData } from './hearder-data.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  /**
   * comunicação entre components 
   * @constructor
   */
  private _hearderData= new BehaviorSubject<HearderData>({
    title: "Início",
    icon: "home",
    routerUrl: ""
  })

  constructor() {}

  get headerData() : HearderData{
    return this._hearderData.value;
  }
  set headerData(headerData: HearderData){
     this._hearderData.next(headerData);
  }
}
