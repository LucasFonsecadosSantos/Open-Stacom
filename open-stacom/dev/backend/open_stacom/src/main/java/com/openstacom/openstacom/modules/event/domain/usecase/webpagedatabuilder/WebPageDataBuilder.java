package com.openstacom.openstacom.modules.event.domain.usecase.webpagedatabuilder;
import com.openstacom.openstacom.modules.template.domain.entities.TemplateEntity;
import com.openstacom.openstacom.shared.entities.TemplateDataContent;

import java.util.List;

public class WebPageDataBuilder {

    private List<EntityDataBuilder> entitiesDataBuilderList;

    public WebPageDataBuilder(TemplateEntity templateEntity) throws Exception {

        this.entitiesDataBuilderList = EntityDataBuilderFactory.getBuilderInstances(templateEntity);

    }

    public TemplateDataContent getPageContent() throws Exception {

        TemplateDataContent pageContent = new TemplateDataContent();

        for (EntityDataBuilder builder : this.entitiesDataBuilderList) {
            pageContent = builder.buildDataAndPopulateOnTemplateData();
        }
        return pageContent;

    }

}
