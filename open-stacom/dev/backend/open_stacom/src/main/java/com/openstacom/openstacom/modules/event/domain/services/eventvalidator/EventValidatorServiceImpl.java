package com.openstacom.openstacom.modules.event.domain.services.eventvalidator;

import com.openstacom.openstacom.modules.event.domain.entities.EventEntity;
import org.springframework.util.ReflectionUtils;

import java.lang.reflect.Field;

public class EventValidatorServiceImpl implements IEventValidatorService {

    @Override
    public void validate(EventEntity eventDTO) throws Exception {

        validateEventTemplateObjectFields(eventDTO);

    }

    private void validateEventTemplateObjectFields(EventEntity eventDTO) throws Exception {
        
        if (eventDTO.getTemplate() != null) {
            ReflectionUtils.doWithFields(eventDTO.getClass(), field -> {
                try {
                    fieldValidation(field, eventDTO);
                } catch (Exception e) {
                    e.printStackTrace();
                }
            });
        } else {
            throw new Exception("Event not loaded.");
        }

    }

    private void fieldValidation(Field field, EventEntity dto) throws Exception{

        if (field.get(dto) == null) {
            throw new Exception();
        }

    }

}
