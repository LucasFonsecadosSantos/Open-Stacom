package com.openstacom.openstacom.modules.template.domain.dtos;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class IEventTemplateObjectDTO {

    private ITemplateObjectRouteConfigDTO configRoute;

    private ITemplateObjectFieldDTO id;

    private ITemplateObjectFieldDTO name;

    private ITemplateObjectFieldDTO edition;

    private ITemplateObjectFieldDTO eventType;

    private ITemplateObjectFieldDTO poweredByInstitution;

    private ITemplateObjectFieldDTO poweredByDepartment;

    private ITemplateObjectFieldDTO subject;

    private ITemplateObjectFieldDTO targetPublic;

    private ITemplateObjectFieldDTO logo;

    private ITemplateObjectFieldDTO brief;

    private ITemplateObjectFieldDTO description;

    private ITemplateObjectFieldDTO telephoneName;

    private ITemplateObjectFieldDTO telephoneNumber;

    private ITemplateObjectFieldDTO days;

    private ITemplateObjectFieldDTO website;

    private ITemplateObjectFieldDTO email;

    private ITemplateObjectFieldDTO socialNetworkFacebook;

    private ITemplateObjectFieldDTO socialNetworkTwitter;

    private ITemplateObjectFieldDTO socialNetworkGithub;

    private ITemplateObjectFieldDTO socialNetworkSpotify;

    private ITemplateObjectFieldDTO socialNetworkLinkedin;

    private ITemplateObjectFieldDTO socialNetworkWhatsapp;

    private ITemplateObjectFieldDTO socialNetworkBehance;

    private ITemplateObjectFieldDTO socialNetworkYoutubeChannel;

    private ITemplateObjectFieldDTO locationCep;

    private ITemplateObjectFieldDTO locationAddress;

    private ITemplateObjectFieldDTO locationNumber;

    private ITemplateObjectFieldDTO locationNeiborhood;

    private ITemplateObjectFieldDTO locationCity;

    private ITemplateObjectFieldDTO locationUF;

    private ITemplateObjectFieldDTO locationCountry;

    private ITemplateObjectFieldDTO locationLatLong;

}
