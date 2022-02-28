package com.openstacom.openstacom.modules.template.domain.entities.templateobject;

import com.openstacom.openstacom.modules.template.domain.entities.PricePlanEntity;
import com.openstacom.openstacom.modules.template.domain.entities.templateobject.TemplateObjectFieldEntity;
import com.openstacom.openstacom.modules.template.domain.entities.templateobject.TemplateObjectRouteConfigEntity;
import lombok.*;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class PricePlanTemplateObjectEntity {

    private TemplateObjectRouteConfigEntity configRoute;

    private TemplateObjectFieldEntity id;

    private TemplateObjectFieldEntity name;

    private TemplateObjectFieldEntity description;

    private TemplateObjectFieldEntity value;

    private List<PricePlanEntity> content;

}
