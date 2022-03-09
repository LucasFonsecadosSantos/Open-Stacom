package com.openstacom.openstacom.modules.event.domain.services.eventvalidator;

import com.openstacom.openstacom.modules.template.domain.entities.templateobject.EventEntity;
import org.springframework.util.ReflectionUtils;

import java.lang.reflect.Field;

public class EventValidatorServiceImpl implements IEventValidatorService {

    @Override
    public void validate(EventEntity eventEntity) throws Exception {

        validateEventTemplateObjectFields(eventEntity);

    }

    private void validateEventTemplateObjectFields(EventEntity eventEntity) throws Exception {
        
        if (eventEntity.getTemplate() != null) {
            ReflectionUtils.doWithFields(eventEntity.getClass(), field -> {
                try {
                    fieldValidation(field, eventEntity);
                } catch (Exception e) {
                    e.printStackTrace();
                }
            });
        } else {
            throw new Exception("Event not loaded.");
        }

    }

    private void fieldValidation(Field field, EventEntity eventEntity) throws Exception{

        if (field.get(eventEntity) == null) {
            throw new Exception();
        }

    }

}
