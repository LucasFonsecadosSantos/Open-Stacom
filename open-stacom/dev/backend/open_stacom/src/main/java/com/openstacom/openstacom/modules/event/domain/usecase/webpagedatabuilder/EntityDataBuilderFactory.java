package com.openstacom.openstacom.modules.event.domain.usecase.webpagedatabuilder;

import com.openstacom.openstacom.modules.template.domain.entities.templateobject.EventEntity;
import com.openstacom.openstacom.modules.event.domain.usecase.webpagedatabuilder.entitiesdatabuilder.ActivityEntityDataBuilder;
import com.openstacom.openstacom.modules.event.domain.usecase.webpagedatabuilder.entitiesdatabuilder.EventEntityDataBuilder;
import com.openstacom.openstacom.modules.template.domain.entities.ITemplateEntity;
import com.openstacom.openstacom.modules.template.domain.entities.TemplateEntity;
import com.openstacom.openstacom.modules.template.domain.entities.templateobject.ITemplateObjectEntity;

import java.util.ArrayList;
import java.util.List;

public class EntityDataBuilderFactory {

    private static final Class[] entitiesClass = {
            EventEntityDataBuilder.class,
            ActivityEntityDataBuilder.class,

    };

    public static List<EntityDataBuilder> getBuilderInstances(TemplateEntity templateEntity) throws Exception {

        List<EntityDataBuilder> buildersList = new ArrayList<EntityDataBuilder>();

        EntityDataBuilder dataBuilder;

        dataBuilder = initEntityDataBuilderFromSingleContent(
                EventEntityDataBuilder.class, templateEntity.getObjects().getEvent(), templateEntity.getObjects().getEvent().getContent()
        );

        if(dataBuilder != null) {
            buildersList.add(dataBuilder);
        }

        dataBuilder = initEntityDataBuilder(
                ActivityEntityDataBuilder.class, templateEntity.getObjects().getActivity(), templateEntity.getObjects().getActivity().getContent()
        );

        if(dataBuilder != null) {
            buildersList.add(dataBuilder);
        }

        return buildersList;

    }

    private static EntityDataBuilder initEntityDataBuilder(Class entityDataBuilderClass, ITemplateObjectEntity
            templateObjectEntity, List<ITemplateEntity> content) throws Exception {

        if(templateObjectEntity != null) {
            return (EntityDataBuilder) entityDataBuilderClass.getConstructor(ITemplateObjectEntity.class, List.class)
                                                                .newInstance(templateObjectEntity, content);
        } else {
            return null;
        }

    }

    private static EntityDataBuilder initEntityDataBuilderFromSingleContent(Class entityDataBuilderClass, ITemplateObjectEntity
            templateObjectEntity, ITemplateEntity content) throws Exception {

        if(templateObjectEntity != null) {
            return (EntityDataBuilder) entityDataBuilderClass.getConstructor(ITemplateObjectEntity.class, EventEntity.class)
                    .newInstance(templateObjectEntity, content);
        } else {
            return null;
        }

    }

}
