import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class SlideDataService {

  constructor() { }
  getMyName(){
    return "Mira";
  }
}
