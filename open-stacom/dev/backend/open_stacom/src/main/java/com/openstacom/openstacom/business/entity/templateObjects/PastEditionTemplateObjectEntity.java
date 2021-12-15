package com.openstacom.openstacom.business.entity.templateObjects;

import com.openstacom.openstacom.business.entity.PastEditionEntity;
import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
@ToString
public class PastEditionTemplateObjectEntity implements TemplateObject {

    private FieldObjectEntity id;

    private ConfigRouteTemplateObject configRoute;

    private FieldObjectEntity name;

    private FieldObjectEntity logo;

    private FieldObjectEntity link;

    private FieldObjectEntity date;

    private PastEditionEntity[] content;

}
