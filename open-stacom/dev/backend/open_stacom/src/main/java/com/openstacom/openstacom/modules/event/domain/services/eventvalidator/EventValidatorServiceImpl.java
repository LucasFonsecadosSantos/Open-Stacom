package com.openstacom.openstacom.modules.event.domain.services.eventvalidator;

import com.openstacom.openstacom.modules.event.domain.dtos.IEventDTO;

public class EventValidatorServiceImpl implements IEventValidatorService {

    @Override
    public void validate(IEventDTO eventDTO) throws Exception {

        validateEventTemplateObjectFields(eventDTO);

    }

    private void validateEventTemplateObjectFields(IEventDTO eventDTO) {
        
        if (eventDTO.getTemplate() != null) {

        }

    }

}
