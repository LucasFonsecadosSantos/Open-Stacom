package com.openstacom.openstacom.modules.template.domain.entities.templateobject;

import com.openstacom.openstacom.modules.template.domain.entities.PastEditionEntity;
import lombok.*;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class PastEditionTemplateObjectEntity implements ITemplateObjectEntity {

    private TemplateObjectRouteConfigEntity configRoute;

    private TemplateObjectFieldEntity id;

    private TemplateObjectFieldEntity name;

    private TemplateObjectFieldEntity logo;

    private TemplateObjectFieldEntity link;

    private TemplateObjectFieldEntity date;

    private List<PastEditionEntity> content;


}
