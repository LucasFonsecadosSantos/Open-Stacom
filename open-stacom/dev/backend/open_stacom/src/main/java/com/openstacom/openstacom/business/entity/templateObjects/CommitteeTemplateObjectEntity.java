package com.openstacom.openstacom.business.entity.templateObjects;

import com.openstacom.openstacom.business.entity.CommitteeEntity;
import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@ToString
public class CommitteeTemplateObjectEntity implements TemplateObject {

    private FieldObjectEntity id;

    private ConfigRouteTemplateObject configRoute;

    private FieldObjectEntity name;

    private FieldObjectEntity picture;

    private FieldObjectEntity brief;

    private FieldObjectEntity members;

    private FieldObjectEntity telephone;

    private FieldObjectEntity email;

    private CommitteeEntity[] content;


}
