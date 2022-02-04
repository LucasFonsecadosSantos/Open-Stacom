package com.openstacom.openstacom.modules.template.domain.dtos;

import lombok.*;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class IPersonTemplateObjectDTO {

    private ITemplateObjectRouteConfigDTO configRoute;

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

    private ITemplateObjectFieldDTO socialNetworkFacebook;

    private ITemplateObjectFieldDTO socialNetworkWebsite;

    private ITemplateObjectFieldDTO socialNetworkTwitter;

    private ITemplateObjectFieldDTO socialNetworkGithub;

    private ITemplateObjectFieldDTO socialNetworkLinkedin;

    private ITemplateObjectFieldDTO socialNetworkSpotify;

    private ITemplateObjectFieldDTO socialNetworkLattes;

    private ITemplateObjectFieldDTO socialNetworkEmail;

    private ITemplateObjectFieldDTO socialNetworkWhatsapp;

    private ITemplateObjectFieldDTO socialNetworkBehance;

    private ITemplateObjectFieldDTO socialNetworkYoutubeChannel;

    private List<IPersonDTO> content;

}
