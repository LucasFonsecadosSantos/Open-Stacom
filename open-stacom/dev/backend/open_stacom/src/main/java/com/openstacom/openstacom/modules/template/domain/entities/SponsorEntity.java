package com.openstacom.openstacom.modules.template.domain.entities;

import lombok.*;

import javax.validation.constraints.NotBlank;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class SponsorEntity implements ITemplateEntity {

    @NotBlank
    private String id;

    @NotBlank
    private String name;

    @NotBlank
    private String picture;

    @NotBlank
    private String brief;

    @NotBlank
    private String website;

    @NotBlank
    private String email;

    @NotBlank
    private String telephone;

    @NotBlank
    private String locationCep;

    @NotBlank
    private String locationAddress;

    @NotBlank
    private String locationNumber;

    @NotBlank
    private String locationNeiborhood;

    @NotBlank
    private String locationCity;

    @NotBlank
    private String locationUF;

    @NotBlank
    private String locationCountry;

    @NotBlank
    private String sponsorshipPlan;

}
