package com.openstacom.openstacom.modules.template.domain.entities.templateobject;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class EventTemplateObjectEntity {

    private TemplateObjectRouteConfigEntity configRoute;

    private TemplateObjectFieldEntity id;

    private TemplateObjectFieldEntity name;

    private TemplateObjectFieldEntity edition;

    private TemplateObjectFieldEntity eventType;

    private TemplateObjectFieldEntity poweredByInstitution;

    private TemplateObjectFieldEntity poweredByDepartment;

    private TemplateObjectFieldEntity subject;

    private TemplateObjectFieldEntity targetPublic;

    private TemplateObjectFieldEntity logo;

    private TemplateObjectFieldEntity brief;

    private TemplateObjectFieldEntity description;

    private TemplateObjectFieldEntity telephoneName;

    private TemplateObjectFieldEntity telephoneNumber;

    private TemplateObjectFieldEntity days;

    private TemplateObjectFieldEntity website;

    private TemplateObjectFieldEntity email;

    private TemplateObjectFieldEntity socialNetworkFacebook;

    private TemplateObjectFieldEntity socialNetworkTwitter;

    private TemplateObjectFieldEntity socialNetworkGithub;

    private TemplateObjectFieldEntity socialNetworkSpotify;

    private TemplateObjectFieldEntity socialNetworkLinkedin;

    private TemplateObjectFieldEntity socialNetworkWhatsapp;

    private TemplateObjectFieldEntity socialNetworkBehance;

    private TemplateObjectFieldEntity socialNetworkYoutubeChannel;

    private TemplateObjectFieldEntity locationCep;

    private TemplateObjectFieldEntity locationAddress;

    private TemplateObjectFieldEntity locationNumber;

    private TemplateObjectFieldEntity locationNeiborhood;

    private TemplateObjectFieldEntity locationCity;

    private TemplateObjectFieldEntity locationUF;

    private TemplateObjectFieldEntity locationCountry;

    private TemplateObjectFieldEntity locationLatLong;

}
