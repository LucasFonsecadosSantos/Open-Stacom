package com.openstacom.openstacom.modules.event.domain.services.eventvalidator;

import com.openstacom.openstacom.modules.event.domain.dtos.IEventDTO;
import org.springframework.stereotype.Service;

@Service
public interface IEventValidatorService {

    void validate(IEventDTO eventDTO) throws Exception;

}
