package com.openstacom.openstacom.modules.event.domain.services.eventgeneration;

import com.openstacom.openstacom.modules.event.domain.dtos.IEventDTO;
import org.springframework.stereotype.Service;

@Service
public interface IEventGenerationService {

    IEventDTO generates(IEventDTO eventDTO) throws Exception;

}
