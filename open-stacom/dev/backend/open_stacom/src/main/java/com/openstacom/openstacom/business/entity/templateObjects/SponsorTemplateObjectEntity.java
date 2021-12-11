package com.openstacom.openstacom.business.entity.templateObjects;

import com.openstacom.openstacom.business.entity.SponsorEntity;
import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@ToString
public class SponsorTemplateObjectEntity implements TemplateObject {

    private ConfigRouteTemplateObject configRoute;

    private FieldObjectEntity id;

    private FieldObjectEntity name;

    private FieldObjectEntity website;

    private FieldObjectEntity email;

    private FieldObjectEntity telephone;

    private FieldObjectEntity loactionCity;

    private FieldObjectEntity locationCep;

    private FieldObjectEntity locationAddress;

    private FieldObjectEntity locationUF;

    private FieldObjectEntity locationCountry;

    private FieldObjectEntity locationNeiborhood;

    private FieldObjectEntity locationNumber;

    private FieldObjectEntity brief;

    private FieldObjectEntity picture;

    private FieldObjectEntity sponsorshipPlan;

    private SponsorEntity[] sponsor;

}
