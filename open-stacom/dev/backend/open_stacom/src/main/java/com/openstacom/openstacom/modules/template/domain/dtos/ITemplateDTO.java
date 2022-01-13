package com.openstacom.openstacom.modules.template.domain.dtos;

import lombok.*;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class ITemplateDTO {

    @NotBlank
    @Size(max = 20, min = 5)
    private String id;

    @NotBlank
    @Size(max = 20, min = 5)
    private String name;

    @NotBlank
    @Size(max = 20, min = 5)
    private String author;

    @NotBlank
    @Size(max = 20, min = 5)
    private String path;

    @NotBlank
    @Size(max = 20, min = 5)
    private String description;

    @NotBlank
    @Size(max = 20, min = 5)
    private String avatar;

    @NotBlank
    @Size(max = 20, min = 5)
    private String mockup;

    @NotBlank
    private String[] sections;

    private ITemplateObjectDTO objects;

}
