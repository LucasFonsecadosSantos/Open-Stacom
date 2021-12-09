package com.openstacom.openstacom.business.entities;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
@RequiredArgsConstructor
public class EventEntity {

    private String id;

    private String name;

    private String edition;

    private String subject;

    private String eventType;

    private String targetPublic;

    private String logo;

    private String description;

    private String brief;

    private String website;

    private String email;

    private TelephoneEntity[] telephone;

    private PoweredByEntity[] poweredBy;

    private Date[] days;

    private LocationEntity location;

    private SocialNetworkEntity socialNetworks;

    private TemplateEntity template;

}
