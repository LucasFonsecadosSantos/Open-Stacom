package com.openstacom.openstacom.modules.event.configuration;

import com.openstacom.openstacom.modules.event.domain.services.eventgeneration.EventGenerationServiceImpl;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;
import org.thymeleaf.spring5.SpringTemplateEngine;
import org.thymeleaf.templateresolver.ClassLoaderTemplateResolver;

@Configuration
@ComponentScan(basePackageClasses = EventGenerationServiceImpl.class)
public class ThymeleafTemplateEngineConfiguration {

    @Bean
    public SpringTemplateEngine thymeleafTemplateEngine(final ClassLoaderTemplateResolver templateResolver) {

        SpringTemplateEngine templateEngine = new SpringTemplateEngine();
        templateEngine.setTemplateResolver(templateResolver);

        return templateEngine;
    }

    @Bean
    @Primary
    public ClassLoaderTemplateResolver thymeleafClassLoaderResolver() {

        ClassLoaderTemplateResolver templateResolver = new ClassLoaderTemplateResolver();
        templateResolver.setPrefix("template/");
        templateResolver.setCacheable(false);
        templateResolver.setSuffix(".html");
        templateResolver.setTemplateMode("HTML");
        templateResolver.setForceTemplateMode(true);

        return templateResolver;
    }

}
