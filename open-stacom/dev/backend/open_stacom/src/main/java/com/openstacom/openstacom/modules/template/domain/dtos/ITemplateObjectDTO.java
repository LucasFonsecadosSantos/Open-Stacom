package com.openstacom.openstacom.modules.template.domain.dtos;

import lombok.*;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class ITemplateObjectDTO {

    private IProceedingTemplateObjectDTO proceeding;

    private ISponsorTemplateObjectDTO sponsor;

    private IScheduleTemplateObjectDTO schedule;

    private ICommitteeTemplateObjectDTO committee;

    private  IActivityTemplateObjectDTO activity;

    private IPricePlanTemplateObjectDTO pricePlan;

    private IPastEditionTemplateObjectDTO pastEdition;

    private IEventTemplateObjectDTO event;

    private IPersonTemplateObjectDTO person;

    private IPhotoGalleryTemplateObjectDTO photoGallery;

    private IVideoGalleryTemplateObjectDTO videoGallery;

}
