package com.openstacom.openstacom.modules.template.domain.entities.templateobject;

import com.openstacom.openstacom.modules.template.domain.entities.CommitteeEntity;
import lombok.*;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class CommitteeTemplateObjectEntity {

    private TemplateObjectRouteConfigEntity configRoute;

    private TemplateObjectFieldEntity id;

    private TemplateObjectFieldEntity name;

    private TemplateObjectFieldEntity members;

    private TemplateObjectFieldEntity picture;

    private TemplateObjectFieldEntity brief;

    private TemplateObjectFieldEntity telephone;

    private TemplateObjectFieldEntity email;

    private List<CommitteeEntity> content;

}
