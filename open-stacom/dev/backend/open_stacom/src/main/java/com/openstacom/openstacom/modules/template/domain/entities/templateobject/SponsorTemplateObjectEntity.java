package com.openstacom.openstacom.modules.template.domain.entities.templateobject;

import com.openstacom.openstacom.modules.template.domain.entities.SponsorEntity;
import com.openstacom.openstacom.modules.template.domain.entities.templateobject.TemplateObjectFieldEntity;
import com.openstacom.openstacom.modules.template.domain.entities.templateobject.TemplateObjectRouteConfigEntity;
import lombok.*;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class SponsorTemplateObjectEntity {

    private TemplateObjectRouteConfigEntity configRoute;

    private TemplateObjectFieldEntity id;

    private TemplateObjectFieldEntity name;

    private TemplateObjectFieldEntity website;

    private TemplateObjectFieldEntity email;

    private TemplateObjectFieldEntity telephone;

    private TemplateObjectFieldEntity locationCity;

    private TemplateObjectFieldEntity locationCep;

    private TemplateObjectFieldEntity locationUF;

    private TemplateObjectFieldEntity locationCountry;

    private TemplateObjectFieldEntity locationAddress;

    private TemplateObjectFieldEntity locationNumber;

    private TemplateObjectFieldEntity locationNeiborhood;

    private TemplateObjectFieldEntity brief;

    private TemplateObjectFieldEntity picture;

    private TemplateObjectFieldEntity sponsorshipPlan;

    private List<SponsorEntity> content;

}
