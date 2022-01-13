package com.openstacom.openstacom.modules.template.domain.dtos;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class IActivityTemplateObjectDTO {

    private ITemplateObjectRouteConfigDTO configRoute;

    private ITemplateObjectFieldDTO id;

    private ITemplateObjectFieldDTO title;

    private ITemplateObjectFieldDTO brief;

    private ITemplateObjectFieldDTO poweredBy;

    private ITemplateObjectFieldDTO responsible;

    private ITemplateObjectFieldDTO description;

    private ITemplateObjectFieldDTO picture;

    private ITemplateObjectFieldDTO targetPublic;

    private ITemplateObjectFieldDTO location;

    private ITemplateObjectFieldDTO price;

    private ITemplateObjectFieldDTO pricePlan;


}
