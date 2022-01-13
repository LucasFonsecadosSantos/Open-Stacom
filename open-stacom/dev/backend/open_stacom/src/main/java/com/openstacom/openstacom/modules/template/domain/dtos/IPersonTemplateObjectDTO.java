package com.openstacom.openstacom.modules.template.domain.dtos;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class IPersonTemplateObjectDTO {

    private ITemplateObjectRouteConfigDTO routeConfig;

    private ITemplateObjectFieldDTO id;

    private ITemplateObjectFieldDTO name;

    private ITemplateObjectFieldDTO avatar;

    private ITemplateObjectFieldDTO job;

    private ITemplateObjectFieldDTO academicFormation;

    private ITemplateObjectFieldDTO institution;

    private ITemplateObjectFieldDTO locationNeiborhood;

    private ITemplateObjectFieldDTO locationNumber;

    private ITemplateObjectFieldDTO locationAddress;

    private ITemplateObjectFieldDTO locationCity;

    private ITemplateObjectFieldDTO locationUF;

    private ITemplateObjectFieldDTO locationCountry;

    private ITemplateObjectFieldDTO locationCep;

}
