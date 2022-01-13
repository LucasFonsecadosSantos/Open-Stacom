package com.openstacom.openstacom.modules.template.domain.dtos;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class IPastEditionTemplateObjectDTO {

    private ITemplateObjectRouteConfigDTO configRoute;

    private ITemplateObjectFieldDTO id;

    private ITemplateObjectFieldDTO name;

    private ITemplateObjectFieldDTO logo;

    private ITemplateObjectFieldDTO link;

    private ITemplateObjectFieldDTO date;


}
