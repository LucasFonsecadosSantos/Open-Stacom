package com.openstacom.openstacom.business.entitie;

import com.openstacom.openstacom.business.entitie.enumType.SponsorshipPlanType;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
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
