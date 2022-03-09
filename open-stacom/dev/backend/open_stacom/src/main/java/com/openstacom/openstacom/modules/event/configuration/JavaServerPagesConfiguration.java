package com.openstacom.openstacom.modules.event.configuration;

import com.openstacom.openstacom.modules.event.domain.services.eventgeneration.EventGenerationServiceImpl;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;
import org.springframework.web.servlet.ViewResolver;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.view.InternalResourceViewResolver;

@Configuration
@ComponentScan(basePackageClasses = EventGenerationServiceImpl.class)
public class JavaServerPagesConfiguration implements WebMvcConfigurer {

    @Bean
    @Primary
    public ViewResolver jspViewResolver() {
        InternalResourceViewResolver bean = new InternalResourceViewResolver();
        bean.setPrefix("/WEB-INF/views/");
        bean.setSuffix(".jsp");
        return bean;
    }


}
