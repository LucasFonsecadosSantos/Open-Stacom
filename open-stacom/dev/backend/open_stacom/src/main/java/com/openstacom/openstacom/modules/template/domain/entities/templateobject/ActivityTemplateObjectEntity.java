package com.openstacom.openstacom.modules.template.domain.entities.templateobject;

import com.openstacom.openstacom.modules.template.domain.entities.ActivityEntity;
import lombok.*;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class ActivityTemplateObjectEntity {

    private TemplateObjectRouteConfigEntity configRoute;

    private TemplateObjectFieldEntity id;

    private TemplateObjectFieldEntity type;

    private TemplateObjectFieldEntity title;

    private TemplateObjectFieldEntity brief;

    private TemplateObjectFieldEntity poweredBy;

    private TemplateObjectFieldEntity responsible;

    private TemplateObjectFieldEntity description;

    private TemplateObjectFieldEntity picture;

    private TemplateObjectFieldEntity targetPublic;

    private TemplateObjectFieldEntity location;

    private TemplateObjectFieldEntity price;

    private TemplateObjectFieldEntity pricePlan;

    private List<ActivityEntity> content;


}
