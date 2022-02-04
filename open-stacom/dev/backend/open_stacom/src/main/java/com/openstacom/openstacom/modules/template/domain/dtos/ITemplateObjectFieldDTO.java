package com.openstacom.openstacom.modules.template.domain.dtos;

import lombok.*;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class ITemplateObjectFieldDTO {

    @NotBlank
    private boolean required;

    @NotBlank
    private int maxlength;

    @NotBlank
    private int minlength;

}
