package com.openstacom.openstacom.business.entitie;

import com.openstacom.openstacom.business.entitie.templateObjects.TemplateObject;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
public class TemplateEntity {

    private String id;

    private String name;

    private String author;

    private String description;

    private String avatar;

    private String mockup;

    private String[] sections;

    private TemplateObject[] objetcs;

}
