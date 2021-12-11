package com.openstacom.openstacom.business.entity.templateObjects;

import com.openstacom.openstacom.business.entity.ActivityEntity;
import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@ToString
public class ScheduleTemplateObjectEntity implements TemplateObject {

    private ConfigRouteTemplateObject configRoute;

    private FieldObjectEntity activity;

    private FieldObjectEntity startTime;

    private FieldObjectEntity endTime;

    private FieldObjectEntity date;

    private ActivityEntity[] content;

}
