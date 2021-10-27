export class Template {

  id?:          string;
  name?:        string;
  path?:        string;
  author?:      string;
  description?: string;
  avatar?:      string;
  mockup?:      string;
  sections?:    [];
  objects?:     {
    person?: {
      name?: {

      },
      avatar?: {
        minlength?: number,
        maxlength?: number,
        required?: boolean,
      },
      job?: {
        minlength?: number,
        maxlength?: number,
        required?: boolean,
      },
      academicFormation?: {
        minlength?: number,
        maxlength?: number,
        required?: boolean,
      },
      institution?: {
        minlength?: number,
        maxlength?: number,
        required?: boolean,
      },
      locationCity?: {
        minlength?: number,
        maxlength?: number,
        required?: boolean,
      },
      locationState?: {
        minlength?: number,
        maxlength?: number,
        required?: boolean,
      },
      locationCountry?: {
        minlength?: number,
        maxlength?: number,
        required?: boolean,
      }
    }
  };

}
