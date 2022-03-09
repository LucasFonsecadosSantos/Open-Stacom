package com.openstacom.openstacom.modules.event.configuration;

import com.openstacom.openstacom.modules.event.domain.services.eventgeneration.EventGenerationServiceImpl;
import de.neuland.jade4j.JadeConfiguration;
import de.neuland.jade4j.spring.template.SpringTemplateLoader;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;

@Configuration
@ComponentScan(basePackageClasses = EventGenerationServiceImpl.class)
public class JadeTemplateConfiguration {

    @Bean
    @Primary
    public SpringTemplateLoader templateLoader() {
        SpringTemplateLoader templateLoader = new SpringTemplateLoader();
        templateLoader.setBasePath("/WEB-INF/views/");
        templateLoader.setSuffix(".jade");
        return templateLoader;
    }

    @Bean
    public JadeConfiguration jadeConfiguration() {
        JadeConfiguration configuration = new JadeConfiguration();
        configuration.setCaching(false);
        configuration.setTemplateLoader(templateLoader());
        return configuration;
    }

}
