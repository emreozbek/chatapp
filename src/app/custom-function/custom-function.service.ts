import {Injectable} from '@angular/core';
import {CustomObjectModel} from "../core/models/custom-object";
import {isString} from "util";

@Injectable({
  providedIn: 'root'
})
export class CustomFunctionService {
  constructor() {
  }

  resolver(source: any) {
    if (source instanceof Array) {
      return this.arrayResolver(source);
    }
    if (source instanceof Object) {
      return this.objectResolver(source);
    }
    if (isString(source)) {
      return source;
    }
  }

  protected arrayResolver(data) {
    data.map(row => {
      if (row instanceof Array) {
        row = this.arrayResolver(row);
      } else if (row instanceof Object) {
        row = this.objectResolver(row);
      }
    });
    return data;
  }

  protected objectResolver(data: CustomObjectModel) {
    let formatted = data.tmpl;
    for (let key in data.data) {
      formatted = formatted.replace(new RegExp(`{${key}}`, 'g'), data.data[key]);
    }
    data.formatted = formatted;
    return data;
  }
}
