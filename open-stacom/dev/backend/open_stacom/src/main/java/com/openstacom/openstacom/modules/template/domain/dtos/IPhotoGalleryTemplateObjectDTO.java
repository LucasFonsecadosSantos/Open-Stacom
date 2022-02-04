package com.openstacom.openstacom.modules.template.domain.dtos;

import lombok.*;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class IPhotoGalleryTemplateObjectDTO {

    private ITemplateObjectRouteConfigDTO configRoute;

    private ITemplateObjectFieldDTO id;

    private ITemplateObjectFieldDTO title;

    private ITemplateObjectFieldDTO legend;

    private ITemplateObjectFieldDTO file;

    private List<IPhotoGalleryDTO> content;

}
