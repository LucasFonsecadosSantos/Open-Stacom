package com.openstacom.openstacom.modules.event.infrastructure;

import com.openstacom.openstacom.OpenStacomApplication;
import com.openstacom.openstacom.modules.event.application.rest.controllers.EventController;
import com.openstacom.openstacom.modules.event.domain.services.eventgeneration.EventGenerationServiceImpl;
import com.openstacom.openstacom.modules.event.domain.services.eventgeneration.IEventGenerationService;
import com.openstacom.openstacom.modules.event.domain.services.eventvalidator.EventValidatorServiceImpl;
import com.openstacom.openstacom.modules.event.domain.services.eventvalidator.IEventValidatorService;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;
import org.thymeleaf.ITemplateEngine;
import org.thymeleaf.TemplateEngine;
import org.thymeleaf.spring5.ISpringTemplateEngine;
import org.thymeleaf.spring5.SpringTemplateEngine;
import org.thymeleaf.templatemode.TemplateMode;
import org.thymeleaf.templateresolver.ClassLoaderTemplateResolver;
import org.thymeleaf.templateresolver.ITemplateResolver;
import org.thymeleaf.templateresolver.StringTemplateResolver;

import java.util.Collections;

@Configuration
@ComponentScan(basePackageClasses = OpenStacomApplication.class)
public class EventModuleBeanConfiguration {

    @Bean
    IEventValidatorService eventValidatorService() {
        return new EventValidatorServiceImpl();
    }

    @Bean
    @Primary
    IEventGenerationService eventGenerationService() {
        return new EventGenerationServiceImpl();
    }

    @Bean
    EventController eventController(final IEventGenerationService iEventGenerationService, final IEventValidatorService iEventValidatorService) {
        return new EventController(iEventGenerationService, iEventValidatorService);
    }

}
