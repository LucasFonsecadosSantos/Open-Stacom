package com.openstacom.openstacom.modules.template.domain.dtos;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class ICommitteeTemplateObjectDTO {

    private ITemplateObjectRouteConfigDTO configRoute;

    private ITemplateObjectFieldDTO id;

    private ITemplateObjectFieldDTO name;

    private ITemplateObjectFieldDTO members;

    private ITemplateObjectFieldDTO picture;

    private ITemplateObjectFieldDTO brief;

    private ITemplateObjectFieldDTO telephone;

    private ITemplateObjectFieldDTO email;

}
