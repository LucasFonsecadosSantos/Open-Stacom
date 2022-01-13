package com.openstacom.openstacom.modules.template.domain.dtos;

import lombok.*;

import javax.validation.constraints.NotBlank;

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
    private String loactionCep;

    @NotBlank
    private String loactionAddress;

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
    private ISocialNetworksDTO socialNetworks;
}
