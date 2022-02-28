package com.openstacom.openstacom.modules.template.domain.entities.templateobject;

import lombok.*;

import javax.validation.constraints.NotBlank;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class TemplateObjectFieldEntity {

    @NotBlank
    private boolean required;

    @NotBlank
    private int maxlength;

    @NotBlank
    private int minlength;

}
