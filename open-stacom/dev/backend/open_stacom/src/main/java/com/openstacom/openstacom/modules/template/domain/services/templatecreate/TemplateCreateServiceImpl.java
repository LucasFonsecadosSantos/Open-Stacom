package com.openstacom.openstacom.modules.template.domain.services.templatecreate;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;
import com.openstacom.openstacom.modules.template.domain.entities.TemplateEntity;
import com.openstacom.openstacom.shared.services.resourcecreate.IResourceCreateService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;

@AllArgsConstructor
public class TemplateCreateServiceImpl implements  ITemplateCreateService {

    @Autowired
    private IResourceCreateService resourceCreateService;

    @Override
    public TemplateEntity create(TemplateEntity templateDTO) throws Exception {

        ObjectMapper mapper = new ObjectMapper();
        mapper.configure(SerializationFeature.INDENT_OUTPUT, true);
        mapper.writeValue(resourceCreateService.createAtPath(this.buildPath(templateDTO)), templateDTO);
        return templateDTO;

    }

    private String buildPath(TemplateEntity templateDTO) {

        return "classpath:template/definition/${templateDTO.getID()}";

    }
}
