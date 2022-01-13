package com.openstacom.openstacom.modules.event.infrastructure;

import com.openstacom.openstacom.OpenStacomApplication;
import com.openstacom.openstacom.modules.event.application.rest.controllers.EventController;
import com.openstacom.openstacom.modules.event.domain.services.eventgeneration.IEventGenerationService;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

@Configuration
@ComponentScan(basePackageClasses = OpenStacomApplication.class)
public class EventModuleBeanConfiguration {

    @Bean
    EventController eventController(final IEventGenerationService iEventGenerationService) {
        return new EventController(iEventGenerationService);
    }

}
