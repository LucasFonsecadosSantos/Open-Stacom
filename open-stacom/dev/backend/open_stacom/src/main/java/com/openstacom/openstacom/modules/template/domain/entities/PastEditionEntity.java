package com.openstacom.openstacom.modules.template.domain.entities;

import lombok.*;

import javax.validation.constraints.NotBlank;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class PastEditionEntity {

    @NotBlank
    private String id;

    @NotBlank
    private String name;

    @NotBlank
    private String logo;

    @NotBlank
    private String date;

    @NotBlank
    private String link;

}
