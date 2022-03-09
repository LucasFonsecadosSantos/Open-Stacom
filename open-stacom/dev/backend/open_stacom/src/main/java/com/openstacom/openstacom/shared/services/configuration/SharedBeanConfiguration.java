package com.openstacom.openstacom.shared.services.configuration;

import com.openstacom.openstacom.OpenStacomApplication;
import com.openstacom.openstacom.shared.services.resourcecreate.IResourceCreateService;
import com.openstacom.openstacom.shared.services.resourcecreate.ResourceCreateServiceImpl;
import com.openstacom.openstacom.shared.services.resourceloader.IResourceLoaderService;
import com.openstacom.openstacom.shared.services.resourceloader.ResourceLoaderServiceImpl;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

@Configuration
@ComponentScan(basePackageClasses = OpenStacomApplication.class)
public class SharedBeanConfiguration {

    @Bean
    IResourceCreateService resourceCreateService() {
        return new ResourceCreateServiceImpl();
    }

    @Bean
    IResourceLoaderService resourceLoaderService() {
        return new ResourceLoaderServiceImpl();
    }

}
