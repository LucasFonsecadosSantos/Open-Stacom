package com.openstacom.openstacom.modules.event.domain.services.eventgeneration;

import com.openstacom.openstacom.modules.event.domain.entities.EventEntity;
import com.openstacom.openstacom.modules.template.domain.entities.TemplateEntity;
import org.springframework.stereotype.Service;

@Service
public interface IEventGenerationService {

    EventEntity generates(EventEntity eventDTO) throws Exception;

}
