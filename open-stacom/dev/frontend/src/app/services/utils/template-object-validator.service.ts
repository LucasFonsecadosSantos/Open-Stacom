import { Injectable } from '@angular/core';
import { FieldTemplate, Person, PersonTemplate } from 'src/app/models';

@Injectable({
  providedIn: 'root'
})
export class TemplateObjectValidatorService {

  constructor() { }

  public validate(templateModel, data: any): void {
        
    Object.keys(templateModel)
          .forEach(
            templateField => {
              console.log(templateField);
              console.log(templateModel);
              if (templateField != 'content' && templateField != 'configRoute' && templateField != 'id') {
                this._checkTemplateProperty(templateModel[templateField], data[templateField]);
              }
            }
          );

  }

  private _checkTemplateProperty(templateField: FieldTemplate, data: any): void {

    this._checkTemplateModelFieldConsistency(templateField);
    if(this._checkRequiredConsistency(templateField.required, data)) {
      this._checkMaxLengthConsistency(templateField.maxlength, data);
      this._checkMinLengthConsistency(templateField.minlength, data);
    }
    
  }

  private _checkTemplateModelFieldConsistency(templateField: FieldTemplate): void {

    if(templateField.required === undefined) {
      throw 'Invalid template field object';
    }

  }

  private _checkRequiredConsistency(required: boolean, data: any): boolean {

    if(required === true) {
      if(data === undefined || data === null) {
        throw `The information ${data} cannot be null.`;
      }
    }
    return false;

  }

  private _checkMaxLengthConsistency(maxlength: number, data: any): void {
    
    if(maxlength !== undefined) {
      if(data.length > maxlength) {
        throw `The information ${data} exceeds the character max length.`;
      }
    }

  }

  private _checkMinLengthConsistency(minlength: number, data: any): void {

    if(minlength !== undefined) {
      if(data.length < minlength) {
        throw `The information ${data} exceeds the character min length.`;
      }
    }

  }


}
