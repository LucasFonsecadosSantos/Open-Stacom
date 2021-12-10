package com.openstacom.openstacom.business.entitie.templateObjects;

import com.openstacom.openstacom.business.entitie.ProceedingEntity;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
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
