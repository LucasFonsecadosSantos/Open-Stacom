package com.openstacom.openstacom.business.entity.templateObjects;

import com.openstacom.openstacom.business.entity.ProceedingEntity;
import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
@ToString
public class ProceedingTemplateObjectEntity implements TemplateObject {

    private ConfigRouteTemplateObject configRoute;

    private FieldObjectEntity id;

    private FieldObjectEntity code;

    private FieldObjectEntity author;

    private FieldObjectEntity title;

    private FieldObjectEntity specialty;

    private FieldObjectEntity file;

    private ProceedingEntity[] content;

}
