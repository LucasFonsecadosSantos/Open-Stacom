package com.openstacom.openstacom.modules.template.domain.entities.templateobject;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class TemplateObjectEntity implements ITemplateObjectEntity {

    private ProceedingTemplateObjectEntity proceeding;

    private SponsorTemplateObjectEntity sponsor;

    private ScheduleTemplateObjectEntity schedule;

    private CommitteeTemplateObjectEntity committee;

    private ActivityTemplateObjectEntity activity;

    private PricePlanTemplateObjectEntity pricePlan;

    private PastEditionTemplateObjectEntity pastEdition;

    private EventTemplateObjectEntity event;

    private PersonTemplateObjectEntity person;

    private PhotoGalleryTemplateObjectEntity photoGallery;

    private VideoGalleryTemplateObjectEntity videoGallery;

}
