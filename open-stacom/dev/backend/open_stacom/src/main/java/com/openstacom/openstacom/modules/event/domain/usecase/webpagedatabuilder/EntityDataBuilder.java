package com.openstacom.openstacom.modules.event.domain.usecase.webpagedatabuilder;

import com.openstacom.openstacom.modules.template.domain.entities.ITemplateEntity;
import com.openstacom.openstacom.modules.template.domain.entities.templateobject.ITemplateObjectEntity;
import com.openstacom.openstacom.shared.entities.TemplateDataContent;
import com.openstacom.openstacom.shared.usecases.templateentityvalidator.templateentityvalidator.ITemplateObjectEntityValidator;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Setter
@Getter
public abstract class EntityDataBuilder {

    protected ITemplateObjectEntity templateObjectEntity;
    protected List<ITemplateEntity> content;
    protected ITemplateObjectEntityValidator entityValidator;

    public EntityDataBuilder(ITemplateObjectEntity templateObjectEntity, List<ITemplateEntity> content, ITemplateObjectEntityValidator validator) {

        this.templateObjectEntity = templateObjectEntity;
        this.content = content;
        this.entityValidator = validator;
    }

    public TemplateDataContent buildDataAndPopulateOnTemplateData() throws Exception {

        //this.entityValidator.validate(content);
        return populateContext();

    }

    private TemplateDataContent populateContext() throws Exception {

        TemplateDataContent webpageData = new TemplateDataContent();

        System.out.println(this.content.getClass());

        return webpageData;

    }
//    private List<TemplateDataContent> populateContext() throws Exception {
//
//        List<TemplateDataContent> dataContentList = new ArrayList<>();
//
//
//
//        return dataContent;
//    }

//    private Context populateContext(Context context) throws Exception {
//
//        Field[] classFields = this.templateObjectEntity.getClass().getDeclaredFields();
//        System.out.println(classFields.length);
//        for (Field field : classFields) {
//
//            String[] fieldValueArray;
//            String fieldValueString;
//            Object fieldValue = field.getType().getConstructor().newInstance();
//            if (fieldValue instanceof String[]) {
//                fieldValue = (String[]) fieldValue;
//            } else if (fieldValue instanceof String) {
//                fieldValue = (String) fieldValue;
//            } else if (fieldValue instanceof TemplateObjectRouteConfigEntity) {
//                continue;
//            }
//            String accessorMethod = "get" + StringUtils.capitalize(field.getName());
//            for (Method method : this.templateObjectEntity.getClass().getDeclaredMethods()) {
//                if (method.getName().equals(accessorMethod)) {
//                    context.setVariable(field.getName(), method.invoke(fieldValue, null));
//                }
//            }
//
////            System.out.println(field.getName());
////            Object fieldValue = field.getType().getConstructor().newInstance();
////            System.out.println("field.get(fieldValue)");
////            System.out.println(field.get(fieldValue));
////            context.setVariable(field.getName(), field.get(fieldValue));
//            //break;
//
//        }
//        System.out.println(context.getVariableNames());
//        return context;
//    }

}
