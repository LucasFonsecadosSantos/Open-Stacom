package com.openstacom.openstacom.business.entity.templateObjects;

import com.openstacom.openstacom.business.entity.PricePlanEntity;
import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@ToString
public class PricePlanTemplateObjectEntity implements TemplateObject {

    private FieldObjectEntity id;

    private ConfigRouteTemplateObject configRoute;

    private FieldObjectEntity name;

    private FieldObjectEntity description;

    private FieldObjectEntity value;

    private PricePlanEntity[] content;

}
