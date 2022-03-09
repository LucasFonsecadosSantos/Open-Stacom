package com.openstacom.openstacom.modules.event.domain.usecase.webpagedatabuilder.entitiesdatabuilder;

import com.openstacom.openstacom.modules.event.domain.usecase.webpagedatabuilder.EntityDataBuilder;
import com.openstacom.openstacom.modules.template.domain.entities.ITemplateEntity;
import com.openstacom.openstacom.modules.template.domain.entities.templateobject.EventTemplateObjectEntity;
import com.openstacom.openstacom.modules.template.domain.entities.templateobject.ITemplateObjectEntity;
import com.openstacom.openstacom.shared.usecases.templateentityvalidator.templateentityvalidator.TemplateObjectEntityValidatorImpl;

import java.util.ArrayList;

public class EventEntityDataBuilder extends EntityDataBuilder {

    public EventEntityDataBuilder(ITemplateObjectEntity eventEntityData, ITemplateEntity content) {

        super(eventEntityData, new ArrayList<>(){{add(content);}}, new TemplateObjectEntityValidatorImpl(EventTemplateObjectEntity.class));

    }

}
