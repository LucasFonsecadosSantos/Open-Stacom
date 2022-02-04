package com.openstacom.openstacom.modules.template.domain.dtos;

import lombok.*;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class IProceedingTemplateObjectDTO {

    private ITemplateObjectRouteConfigDTO configRoute;

    private ITemplateObjectFieldDTO id;

    private ITemplateObjectFieldDTO code;

    private ITemplateObjectFieldDTO author;

    private ITemplateObjectFieldDTO title;

    private ITemplateObjectFieldDTO specialty;

    private ITemplateObjectFieldDTO file;

    private List<IProceedingDTO> content;

}
