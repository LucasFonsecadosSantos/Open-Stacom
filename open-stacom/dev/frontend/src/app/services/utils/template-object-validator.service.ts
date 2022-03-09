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
              if (this._isFieldToValidate(templateField)) {
                this._checkTemplateProperty(templateModel[templateField], templateField, data[templateField]);
              }
            }
          );

  }

  private _isFieldToValidate(fieldName: string): boolean {
    return fieldName != 'content' && fieldName != 'configRoute' && fieldName != 'id' && fieldName != 'logo' && fieldName != 'avatar' && fieldName != 'picture';
  }

  private _checkTemplateProperty(templateField: FieldTemplate, fieldName: string, data: any): void {

    this._checkTemplateModelFieldConsistency(templateField);
    if(this._checkRequiredConsistency(templateField.required, fieldName, data)) {
      this._checkMaxLengthConsistency(templateField.maxlength, fieldName, data);
      this._checkMinLengthConsistency(templateField.minlength, fieldName, data);
    }

  }

  private _checkTemplateModelFieldConsistency(templateField: FieldTemplate): void {

    if(templateField.required === undefined) {
      throw 'Invalid template field object';
    }

  }

  private _checkRequiredConsistency(required: boolean,  fieldName: string, data: any): boolean {

    if(required === true) {
      if(data === undefined || data === null) {
        throw `The information ${fieldName} cannot be null.`;
      }
    }
    return false;

  }

  private _checkMaxLengthConsistency(maxlength: number, fieldName: string, data: any): void {

    if(maxlength !== undefined) {
      if(data.length > maxlength) {
        throw `The information ${fieldName} exceeds the character max length.`;
      }
    }

  }

  private _checkMinLengthConsistency(minlength: number, fieldName: string, data: any): void {

    if(minlength !== undefined) {
      if(data.length < minlength) {
        throw `The information ${fieldName} exceeds the character min length.`;
      }
    }

  }


}
