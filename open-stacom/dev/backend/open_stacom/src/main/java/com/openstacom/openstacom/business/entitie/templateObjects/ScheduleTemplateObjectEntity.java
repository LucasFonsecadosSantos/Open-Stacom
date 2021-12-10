package com.openstacom.openstacom.business.entitie.templateObjects;

import com.openstacom.openstacom.business.entitie.ActivityEntity;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
public class ScheduleTemplateObjectEntity {

    private ConfigRouteTemplateObject configRoute;

    private FieldObjectEntity activity;

    private FieldObjectEntity startTime;

    private FieldObjectEntity endTime;

    private FieldObjectEntity date;

    private ActivityEntity[] content;

}
