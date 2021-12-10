package com.openstacom.openstacom.business.entitie.templateObjects;

import com.openstacom.openstacom.business.entitie.SponsorEntity;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
public class SponsorTemplateObjectEntity {

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
