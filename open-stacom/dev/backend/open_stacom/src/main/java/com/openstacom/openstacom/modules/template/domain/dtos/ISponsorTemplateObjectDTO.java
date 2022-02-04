package com.openstacom.openstacom.modules.template.domain.dtos;

import lombok.*;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class ISponsorTemplateObjectDTO {

    private ITemplateObjectRouteConfigDTO configRoute;

    private ITemplateObjectFieldDTO id;

    private ITemplateObjectFieldDTO name;

    private ITemplateObjectFieldDTO website;

    private ITemplateObjectFieldDTO email;

    private ITemplateObjectFieldDTO telephone;

    private ITemplateObjectFieldDTO locationCity;

    private ITemplateObjectFieldDTO locationCep;

    private ITemplateObjectFieldDTO locationUF;

    private ITemplateObjectFieldDTO locationCountry;

    private ITemplateObjectFieldDTO locationAddress;

    private ITemplateObjectFieldDTO locationNumber;

    private ITemplateObjectFieldDTO locationNeiborhood;

    private ITemplateObjectFieldDTO brief;

    private ITemplateObjectFieldDTO picture;

    private ITemplateObjectFieldDTO sponsorshipPlan;

    private List<ISponsorDTO> content;

}
