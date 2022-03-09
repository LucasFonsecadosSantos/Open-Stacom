package com.openstacom.openstacom.modules.template.domain.entities;

import com.openstacom.openstacom.modules.template.domain.entities.templateobject.TemplateObjectEntity;
import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class TemplateEntity implements ITemplateEntity {

//    @NotBlank
//    @Size(max = 20, min = 5)
    private String id;

//    @NotBlank
//    @Size(max = 20, min = 5)
    private String name;

//    @NotBlank
//    @Size(max = 20, min = 5)
    private String author;

//    @NotBlank
//    @Size(max = 20, min = 5)
    private String path;

//    @NotBlank
//    @Size(max = 20, min = 5)
    private String description;

//    @NotBlank
//    @Size(max = 20, min = 5)
    private String avatar;

//    @NotBlank
//    @Size(max = 20, min = 5)
    private String mockup;

    private String engine;

    //@NotBlank
    private String[] sections;

    private TemplateObjectEntity objects;

}
