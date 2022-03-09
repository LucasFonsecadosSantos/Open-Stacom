package com.openstacom.openstacom.modules.event.domain.services.eventvalidator;

import com.openstacom.openstacom.modules.template.domain.entities.templateobject.EventEntity;
import org.springframework.stereotype.Service;

@Service
public interface IEventValidatorService {

    void validate(EventEntity eventDTO) throws Exception;

}
