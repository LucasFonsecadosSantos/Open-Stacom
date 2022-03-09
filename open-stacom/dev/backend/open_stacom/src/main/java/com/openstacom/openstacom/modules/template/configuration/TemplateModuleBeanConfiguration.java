package com.openstacom.openstacom.modules.template.configuration;

import com.openstacom.openstacom.OpenStacomApplication;
import com.openstacom.openstacom.modules.template.application.rest.controllers.TemplateController;
import com.openstacom.openstacom.modules.template.domain.services.templatecreate.ITemplateCreateService;
import com.openstacom.openstacom.modules.template.domain.services.templatecreate.TemplateCreateServiceImpl;
import com.openstacom.openstacom.modules.template.domain.services.templateload.ITemplateLoaderService;
import com.openstacom.openstacom.modules.template.domain.services.templateload.TemplateLoaderServiceImpl;
import com.openstacom.openstacom.shared.services.resourcecreate.IResourceCreateService;
import com.openstacom.openstacom.shared.services.resourceloader.IResourceLoaderService;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

@Configuration
@ComponentScan(basePackageClasses = OpenStacomApplication.class)
public class TemplateModuleBeanConfiguration {

    @Bean
    ITemplateLoaderService templateLoaderService(final IResourceLoaderService iResourceLoaderService) {
        return new TemplateLoaderServiceImpl(iResourceLoaderService);
    }

    @Bean
    ITemplateCreateService templateCreateService(final IResourceCreateService iResourceCreateService) {
        return new TemplateCreateServiceImpl(iResourceCreateService);
    }

    @Bean
    TemplateController templateController(final ITemplateLoaderService iTemplateLoaderService, final ITemplateCreateService iTemplateCreateService) {
        return new TemplateController(iTemplateLoaderService, iTemplateCreateService);
    }

}
