package com.openstacom.openstacom.modules.template.domain.entities.templateobject;

import com.openstacom.openstacom.modules.template.domain.entities.VideoGalleryEntity;
import lombok.*;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class VideoGalleryTemplateObjectEntity implements ITemplateObjectEntity {

    private TemplateObjectRouteConfigEntity configRoute;

    private TemplateObjectFieldEntity id;

    private TemplateObjectFieldEntity title;

    private TemplateObjectFieldEntity legend;

    private TemplateObjectFieldEntity file;

    private List<VideoGalleryEntity> content;

}
