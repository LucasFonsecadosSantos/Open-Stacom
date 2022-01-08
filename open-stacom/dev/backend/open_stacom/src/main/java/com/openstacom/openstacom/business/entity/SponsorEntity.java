package com.openstacom.openstacom.business.entity;

import com.openstacom.openstacom.business.entity.enumType.SponsorshipPlanType;
import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@ToString
public class SponsorEntity {

    private String id;

    private String name;

    private String picture;

    private String brief;

    private String website;

    private String email;

    private String telephone;

    private String locationCep;

    private String locationAddress;

    private String locationNumber;

    private String locationNeiborhood;

    private String locationCity;

    private String locationUF;

    private String locationCountry;

    private SponsorshipPlanType sponsorshipPlan;

}
