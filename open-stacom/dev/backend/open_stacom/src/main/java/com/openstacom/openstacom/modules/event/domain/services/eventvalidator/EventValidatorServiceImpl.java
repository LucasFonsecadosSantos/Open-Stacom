package com.openstacom.openstacom.modules.event.domain.services.eventvalidator;

import com.openstacom.openstacom.modules.event.domain.dtos.IEventDTO;
import org.springframework.util.ReflectionUtils;

import java.lang.reflect.Field;

public class EventValidatorServiceImpl implements IEventValidatorService {

    @Override
    public void validate(IEventDTO eventDTO) throws Exception {

        validateEventTemplateObjectFields(eventDTO);

    }

    private void validateEventTemplateObjectFields(IEventDTO eventDTO) throws Exception {
        
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

    private void fieldValidation(Field field, IEventDTO dto) throws Exception{

        if (field.get(dto) == null) {
            throw new Exception();
        }

    }

}
