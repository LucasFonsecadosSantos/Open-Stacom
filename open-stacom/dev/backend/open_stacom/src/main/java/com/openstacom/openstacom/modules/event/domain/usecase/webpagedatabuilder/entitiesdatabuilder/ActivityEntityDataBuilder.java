package com.openstacom.openstacom.modules.event.domain.usecase.webpagedatabuilder.entitiesdatabuilder;

import com.openstacom.openstacom.modules.event.domain.usecase.webpagedatabuilder.EntityDataBuilder;
import com.openstacom.openstacom.modules.template.domain.entities.ITemplateEntity;
import com.openstacom.openstacom.modules.template.domain.entities.templateobject.ActivityTemplateObjectEntity;
import com.openstacom.openstacom.modules.template.domain.entities.templateobject.ITemplateObjectEntity;
import com.openstacom.openstacom.shared.usecases.templateentityvalidator.templateentityvalidator.TemplateObjectEntityValidatorImpl;

import java.util.List;

public class ActivityEntityDataBuilder extends EntityDataBuilder {

    public ActivityEntityDataBuilder(ITemplateObjectEntity activityEntityData, List<ITemplateEntity> content) {

        super(activityEntityData, content, new TemplateObjectEntityValidatorImpl(ActivityTemplateObjectEntity.class));
        //System.out.println(activityEntityData.getContent());
    }

}
