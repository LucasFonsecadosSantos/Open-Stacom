package com.openstacom.openstacom.modules.event.configuration;

import com.openstacom.openstacom.OpenStacomApplication;
import com.openstacom.openstacom.modules.event.application.rest.controllers.EventController;
import com.openstacom.openstacom.modules.event.domain.services.eventgeneration.EventGenerationServiceImpl;
import com.openstacom.openstacom.modules.event.domain.services.eventgeneration.IEventGenerationService;
import com.openstacom.openstacom.modules.event.domain.services.eventvalidator.EventValidatorServiceImpl;
import com.openstacom.openstacom.modules.event.domain.services.eventvalidator.IEventValidatorService;
import de.neuland.jade4j.spring.template.SpringTemplateLoader;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;
import org.springframework.web.servlet.view.freemarker.FreeMarkerViewResolver;
import org.springframework.web.servlet.view.groovy.GroovyMarkupViewResolver;
import org.thymeleaf.spring5.SpringTemplateEngine;

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

        return new EventGenerationServiceImpl(
                new SpringTemplateEngine(), new FreeMarkerViewResolver(),
                new GroovyMarkupViewResolver(), new SpringTemplateLoader()
                );
    }

    @Bean
    EventController eventController(final IEventGenerationService iEventGenerationService, final IEventValidatorService iEventValidatorService) {
        return new EventController(iEventGenerationService, iEventValidatorService);
    }

}
