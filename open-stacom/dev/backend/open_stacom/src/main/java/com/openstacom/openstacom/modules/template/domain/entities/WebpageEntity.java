package com.openstacom.openstacom.modules.template.domain.entities;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class WebpageEntity implements ITemplateEntity {

    private String id;

    private String token;

    private String version;

    private TemplateEntity template;

}
