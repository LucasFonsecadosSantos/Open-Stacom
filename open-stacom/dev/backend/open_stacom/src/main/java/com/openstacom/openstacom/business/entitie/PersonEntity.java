package com.openstacom.openstacom.business.entitie;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
public class PersonEntity {

    private String id;

    private String name;

    private String avatar;

    private String job;

    private String brief;

    private String academicFormation;

    private String institution;

    private String locationCep;

    private String locationAddress;

    private String locationNumber;

    private String locationNeiborhood;

    private String locationCity;

    private String locationUF;

    private String locationCountry;

    private SocialNetworkEntity socialNetowkrs;

}
