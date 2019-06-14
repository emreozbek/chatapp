import {Injectable} from '@angular/core';
import {CustomObjectModel} from "../core/models/custom-object";
import {isString} from "util";

@Injectable({
  providedIn: 'root'
})
export class CustomFunctionService {
  resolver(source: any) {
    if (source instanceof Array) {
      return this.join(this.array(source));
    }
    if (source instanceof Object) {
      return JSON.stringify(this.object(source));
    }
    if (isString(source)) {
      return source;
    }
  }

  protected join(data: Array<any>) {
    data.map((row, index) => {
      if (row instanceof Array) {
        this.join(row);
      } else if (row instanceof Object) {
        data[index] = JSON.stringify(row);
      } else if (isString(row)) {
        return row;
      }
    });
    return data.join("\n");
  }

  protected array(data) {
    data.map(row => {
      if (row instanceof Array) {
        row = this.array(row);
      } else if (row instanceof Object) {
        row = this.object(row);
      } else if (isString(row)) {
        return row;
      }
    });
    return data;
  }

  protected object(data: CustomObjectModel) {
    let formatted = data.tmpl;
    for (let key in data.data) {
      formatted = formatted.replace(new RegExp(`{${key}}`, 'g'), data.data[key]);
    }
    data.formatted = formatted;
    return data;
  }
}
