package com.openstacom.openstacom.modules.template.domain.entities;

import lombok.*;

import javax.validation.constraints.NotBlank;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class ActivityEntity {

    @NotBlank
    private String id;

    @NotBlank
    private String type;

    @NotBlank
    private String title;

    @NotBlank
    private String brief;

    @NotBlank
    private String poweredBy;

    @NotBlank
    private String responsible;

    @NotBlank
    private String description;

    @NotBlank
    private String picture;

    @NotBlank
    private String targetPublic;

    @NotBlank
    private String location;

    @NotBlank
    private String price;

    @NotBlank
    private String pricePlan;

}
