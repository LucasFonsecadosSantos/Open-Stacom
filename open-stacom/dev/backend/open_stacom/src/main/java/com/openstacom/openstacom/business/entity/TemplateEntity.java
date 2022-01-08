package com.openstacom.openstacom.business.entity;

import com.openstacom.openstacom.business.entity.templateObjects.TemplateObject;
import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@ToString
public class TemplateEntity {

    private String id;

    private String name;

    private String author;

    private String description;

    private String avatar;

    private String mockup;

    private String[] sections;

    private Object[] objetcs;

}
