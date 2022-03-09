package com.openstacom.openstacom.modules.template.domain.entities.templateobject;

import com.openstacom.openstacom.modules.template.domain.entities.PersonEntity;
import lombok.*;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class PersonTemplateObjectEntity implements ITemplateObjectEntity {

    private TemplateObjectRouteConfigEntity configRoute;

    private TemplateObjectFieldEntity id;

    private TemplateObjectFieldEntity name;

    private TemplateObjectFieldEntity avatar;

    private TemplateObjectFieldEntity job;

    private TemplateObjectFieldEntity academicFormation;

    private TemplateObjectFieldEntity institution;

    private TemplateObjectFieldEntity locationNeiborhood;

    private TemplateObjectFieldEntity locationNumber;

    private TemplateObjectFieldEntity locationAddress;

    private TemplateObjectFieldEntity locationCity;

    private TemplateObjectFieldEntity locationUF;

    private TemplateObjectFieldEntity locationCountry;

    private TemplateObjectFieldEntity locationCep;

    private TemplateObjectFieldEntity socialNetworkFacebook;

    private TemplateObjectFieldEntity socialNetworkWebsite;

    private TemplateObjectFieldEntity socialNetworkTwitter;

    private TemplateObjectFieldEntity socialNetworkGithub;

    private TemplateObjectFieldEntity socialNetworkLinkedin;

    private TemplateObjectFieldEntity socialNetworkSpotify;

    private TemplateObjectFieldEntity socialNetworkLattes;

    private TemplateObjectFieldEntity socialNetworkEmail;

    private TemplateObjectFieldEntity socialNetworkWhatsapp;

    private TemplateObjectFieldEntity socialNetworkBehance;

    private TemplateObjectFieldEntity socialNetworkYoutubeChannel;

    private List<PersonEntity> content;

}
