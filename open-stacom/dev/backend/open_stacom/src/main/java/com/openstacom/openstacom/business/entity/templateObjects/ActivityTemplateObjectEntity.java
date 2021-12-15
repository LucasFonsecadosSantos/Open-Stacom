package com.openstacom.openstacom.business.entity.templateObjects;

import com.openstacom.openstacom.business.entity.ActivityEntity;
import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
@ToString
public class ActivityTemplateObjectEntity implements TemplateObject {

    private FieldObjectEntity id;

    private ConfigRouteTemplateObject configRoute;

    private FieldObjectEntity title;

    private FieldObjectEntity brief;

    private FieldObjectEntity poweredBy;

    private FieldObjectEntity responsible;

    private FieldObjectEntity description;

    private FieldObjectEntity picture;

    private FieldObjectEntity targetPublic;

    private FieldObjectEntity location;

    private FieldObjectEntity price;

    private FieldObjectEntity pricePlan;

    private ActivityEntity[] content;

}
