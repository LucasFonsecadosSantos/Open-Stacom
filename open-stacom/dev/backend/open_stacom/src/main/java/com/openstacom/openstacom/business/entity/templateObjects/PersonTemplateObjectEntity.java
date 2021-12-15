package com.openstacom.openstacom.business.entity.templateObjects;

import com.openstacom.openstacom.business.entity.PersonEntity;
import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@ToString
public class PersonTemplateObjectEntity implements TemplateObject {

    private FieldObjectEntity id;

    private ConfigRouteTemplateObject configRoute;

    private FieldObjectEntity name;

    private FieldObjectEntity avatar;

    private FieldObjectEntity job;

    private FieldObjectEntity academicFormation;

    private FieldObjectEntity institution;

    private FieldObjectEntity locationCep;

    private FieldObjectEntity locationNumber;

    private FieldObjectEntity locationAddress;

    private FieldObjectEntity locationNeiborhood;

    private FieldObjectEntity locationCity;

    private FieldObjectEntity locationUF;

    private FieldObjectEntity locationCountry;

    private PersonEntity[] content;

}
