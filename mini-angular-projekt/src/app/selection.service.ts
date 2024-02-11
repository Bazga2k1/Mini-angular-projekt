import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class SelectionService {
  selectedOptions: any = {};

  constructor() { }

  setSelectedOptions(options: any) {
    this.selectedOptions = { ...this.selectedOptions, ...options };
  }

  getSelectedOptions() {
    return this.selectedOptions;
  }

  // Car-specific
  getCarModel() {
    return this.selectedOptions.carModel;
  }

  getCarPrice() {
    return this.selectedOptions.carPrice;
  }

  getRimModel() {
    return this.selectedOptions.rimModel;
  }

  getRimPrice() {
    return this.selectedOptions.rimPrice;
  }

  getEngineModel() {
    return this.selectedOptions.engineModel;
  }

  getEnginePrice() {
    return this.selectedOptions.enginePrice;
  }

  getInteriorModel() {
    return this.selectedOptions.interiorModel;
  }

  getInteriorPrice() {
    return this.selectedOptions.interiorPrice;
  }

  getColorModel() {
    return this.selectedOptions.colorModel;
  }

  getColorPrice() {
    return this.selectedOptions.colorPrice;
  }

  getOrderNumber(){
    return this.selectedOptions.orderNo;
  }
}
