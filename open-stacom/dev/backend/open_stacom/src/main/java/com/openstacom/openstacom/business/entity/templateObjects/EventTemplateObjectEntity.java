package com.openstacom.openstacom.business.entity.templateObjects;

import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@ToString
public class EventTemplateObjectEntity implements TemplateObject {

    private FieldObjectEntity id;

    private ConfigRouteTemplateObject configRoute;

    private FieldObjectEntity name;

    private FieldObjectEntity edition;

    private FieldObjectEntity eventType;

    private FieldObjectEntity poweredByInstitution;

    private FieldObjectEntity poweredByDepartament;

    private FieldObjectEntity subject;

    private FieldObjectEntity targetPublic;

    private FieldObjectEntity logo;

    private FieldObjectEntity brief;

    private FieldObjectEntity description;

    private FieldObjectEntity telephoneName;

    private FieldObjectEntity telephoneNumber;

    private FieldObjectEntity days;

    private FieldObjectEntity website;

    private FieldObjectEntity email;

    private FieldObjectEntity socialNetworksFacebook;

    private FieldObjectEntity socialNetworksTwitter;

    private FieldObjectEntity socialNetworksGithub;

    private FieldObjectEntity socialNetworksSpotify;

    private FieldObjectEntity socialNetworksLinkedin;

    private FieldObjectEntity socialNetworksWhatsapp;

    private FieldObjectEntity socialNetworksBehance;

    private FieldObjectEntity socialNetworksYoutubeChannel;

    private FieldObjectEntity locationCep;

    private FieldObjectEntity locationAddress;

    private FieldObjectEntity locationNumber;

    private FieldObjectEntity locationNeiborhood;

    private FieldObjectEntity locationCity;

    private FieldObjectEntity locationUF;

    private FieldObjectEntity locationCountry;

    private FieldObjectEntity locationLatLong;

}
