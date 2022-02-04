package com.openstacom.openstacom.modules.template.domain.dtos;

import lombok.*;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class IScheduleTemplateObjectDTO {

    private ITemplateObjectRouteConfigDTO configRoute;

    private ITemplateObjectFieldDTO id;

    private ITemplateObjectFieldDTO activity;

    private ITemplateObjectFieldDTO startTime;

    private ITemplateObjectFieldDTO endTime;

    private ITemplateObjectFieldDTO date;

    private List<IPricePlanDTO> content;

}
