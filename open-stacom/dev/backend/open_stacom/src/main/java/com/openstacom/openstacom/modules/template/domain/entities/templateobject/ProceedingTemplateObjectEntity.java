package com.openstacom.openstacom.modules.template.domain.entities.templateobject;

import com.openstacom.openstacom.modules.template.domain.entities.ProceedingEntity;
import com.openstacom.openstacom.modules.template.domain.entities.templateobject.TemplateObjectFieldEntity;
import com.openstacom.openstacom.modules.template.domain.entities.templateobject.TemplateObjectRouteConfigEntity;
import lombok.*;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class ProceedingTemplateObjectEntity {

    private TemplateObjectRouteConfigEntity configRoute;

    private TemplateObjectFieldEntity id;

    private TemplateObjectFieldEntity code;

    private TemplateObjectFieldEntity author;

    private TemplateObjectFieldEntity title;

    private TemplateObjectFieldEntity specialty;

    private TemplateObjectFieldEntity file;

    private List<ProceedingEntity> content;

}
