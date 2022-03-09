package com.openstacom.openstacom.modules.template.domain.entities.templateobject;

import com.openstacom.openstacom.modules.template.domain.entities.PricePlanEntity;
import lombok.*;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class ScheduleTemplateObjectEntity implements ITemplateObjectEntity {

    private TemplateObjectRouteConfigEntity configRoute;

    private TemplateObjectFieldEntity id;

    private TemplateObjectFieldEntity activity;

    private TemplateObjectFieldEntity startTime;

    private TemplateObjectFieldEntity endTime;

    private TemplateObjectFieldEntity date;

    private List<PricePlanEntity> content;

}
