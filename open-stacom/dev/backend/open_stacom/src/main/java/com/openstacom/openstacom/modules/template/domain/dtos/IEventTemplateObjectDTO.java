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

    private ITemplateObjectFieldDTO poweredByDepartament;

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

    private ITemplateObjectFieldDTO socialNetworksFacebook;

    private ITemplateObjectFieldDTO socialNetworksTwitter;

    private ITemplateObjectFieldDTO socialNetworksGithub;

    private ITemplateObjectFieldDTO socialNetworksSpotify;

    private ITemplateObjectFieldDTO socialNetworksLinkedin;

    private ITemplateObjectFieldDTO socialNetworksWhatsapp;

    private ITemplateObjectFieldDTO socialNetworksBehance;

    private ITemplateObjectFieldDTO socialNetworksYoutubeChannel;

    private ITemplateObjectFieldDTO locationCep;

    private ITemplateObjectFieldDTO locationAddress;

    private ITemplateObjectFieldDTO locationNumber;

    private ITemplateObjectFieldDTO locationNeiborhood;

    private ITemplateObjectFieldDTO locationCity;

    private ITemplateObjectFieldDTO locationUF;

    private ITemplateObjectFieldDTO locationCountry;

    private ITemplateObjectFieldDTO locationLatLong;

}
