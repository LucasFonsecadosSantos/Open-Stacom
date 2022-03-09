package com.openstacom.openstacom.modules.event.configuration;

import com.openstacom.openstacom.modules.event.domain.services.eventgeneration.EventGenerationServiceImpl;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;
import org.springframework.web.servlet.view.groovy.GroovyMarkupConfigurer;
import org.springframework.web.servlet.view.groovy.GroovyMarkupViewResolver;

@Configuration
@ComponentScan(basePackageClasses = EventGenerationServiceImpl.class)
public class GroovyConfiguration {

    @Bean
    public GroovyMarkupConfigurer groovyMarkupConfigurer() {
        GroovyMarkupConfigurer configurer = new GroovyMarkupConfigurer();
        configurer.setResourceLoaderPath("/WEB-INF/views/");
        return configurer;
    }

    @Bean
    @Primary
    public GroovyMarkupViewResolver thymeleafViewResolver() {
        GroovyMarkupViewResolver viewResolver = new GroovyMarkupViewResolver();
        viewResolver.setSuffix(".tpl");
        return viewResolver;
    }

}
