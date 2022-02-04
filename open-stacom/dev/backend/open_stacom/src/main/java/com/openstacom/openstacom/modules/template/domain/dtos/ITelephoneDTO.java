package com.openstacom.openstacom.modules.template.domain.dtos;

import lombok.*;

import javax.validation.constraints.NotBlank;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class ITelephoneDTO {

    @NotBlank
    private String name;

    @NotBlank
    private String number;

}
