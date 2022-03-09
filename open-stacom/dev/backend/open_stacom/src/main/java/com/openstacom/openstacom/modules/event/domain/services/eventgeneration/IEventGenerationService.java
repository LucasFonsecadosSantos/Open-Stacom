package com.openstacom.openstacom.modules.event.domain.services.eventgeneration;

import com.openstacom.openstacom.modules.template.domain.entities.templateobject.EventEntity;
import org.springframework.stereotype.Service;

@Service
public interface IEventGenerationService {

    EventEntity generates(EventEntity eventDTO) throws Exception;

}
