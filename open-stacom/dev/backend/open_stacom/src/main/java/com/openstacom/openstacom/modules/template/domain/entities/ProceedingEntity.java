package com.openstacom.openstacom.modules.template.domain.entities;

import lombok.*;

import javax.validation.constraints.NotBlank;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class ProceedingEntity {

    @NotBlank
    private String id;

    @NotBlank
    private String title;

    @NotBlank
    private String file;

    @NotBlank
    private String specialty;

    @NotBlank
    private String author;

    @NotBlank
    private String code;

}
