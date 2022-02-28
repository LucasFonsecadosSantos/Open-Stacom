package com.openstacom.openstacom.modules.template.domain.entities;

import lombok.*;

import javax.validation.constraints.NotBlank;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class TelephoneEntity {

    @NotBlank
    private String name;

    @NotBlank
    private String number;

}
