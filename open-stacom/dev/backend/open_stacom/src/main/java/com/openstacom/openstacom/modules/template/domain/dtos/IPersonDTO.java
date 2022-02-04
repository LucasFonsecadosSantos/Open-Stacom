package com.openstacom.openstacom.modules.template.domain.dtos;

import lombok.*;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class IPersonDTO {

    @NotBlank
    private String id;

    @NotBlank
    private String name;

    @NotBlank
    private String avatar;

    @NotBlank
    private String job;

    @NotBlank
    private String academicFormation;

    @NotBlank
    private String institution;

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
    @Size(max = 20, min = 3)
    private String socialNetworkFacebook;

    @NotBlank
    @Size(max = 20, min = 3)
    private String socialNetworkTwitter;

    @NotBlank
    @Size(max = 20, min = 3)
    private String socialNetworkGithub;

    @NotBlank
    @Size(max = 20, min = 3)
    private String socialNetworkWebsite;

    @NotBlank
    @Size(max = 20, min = 3)
    private String socialNetworkSpotify;

    @NotBlank
    @Size(max = 20, min = 3)
    private String socialNetworkLinkedin;

    @NotBlank
    @Size(max = 20, min = 3)
    private String socialNetworkWhatsapp;

    @NotBlank
    @Size(max = 20, min = 3)
    private String socialNetworkLattes;

    @NotBlank
    @Size(max = 20, min = 3)
    private String socialNetworkBehance;

    @NotBlank
    @Size(max = 20, min = 3)
    private String socialNetworkYoutubeChannel;

    @NotBlank
    @Email
    @Size(max = 20, min = 3)
    private String socialNetworkEmail;

    @NotBlank
    private ISocialNetworksDTO socialNetworks;
}
