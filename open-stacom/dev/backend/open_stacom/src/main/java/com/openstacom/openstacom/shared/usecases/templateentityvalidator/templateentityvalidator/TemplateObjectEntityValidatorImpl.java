package com.openstacom.openstacom.shared.usecases.templateentityvalidator.templateentityvalidator;

import ch.qos.logback.core.pattern.parser.FormattingNode;
import com.openstacom.openstacom.modules.template.domain.entities.ITemplateEntity;

import java.util.List;

public class TemplateObjectEntityValidatorImpl implements ITemplateObjectEntityValidator {

    private Class targetEntity;

    public TemplateObjectEntityValidatorImpl(Class targetEntity) {
        this.targetEntity = targetEntity;
    }

    @Override
    public void validate(List<ITemplateEntity> content) throws Exception {

        //content.forEach(obj -> { System.out.println(obj.getClass().getDeclaredFields().length);});
        content.forEach(obj -> {

            System.out.println(obj);
        });
//        ITemplateObjectEntity entity = (ITemplateObjectEntity) this.targetEntity.getConstructor().newInstance();
//        Field[] fields = entity.getClass().getDeclaredFields();
//        for(Field field : fields) {
//            System.out.print(field);
//        }

    }

}
