package com.openstacom.openstacom.modules.template.domain.services.templatecreate;

import com.openstacom.openstacom.modules.template.domain.entities.TemplateEntity;
import org.springframework.stereotype.Service;

@Service
public interface ITemplateCreateService {

    TemplateEntity create(TemplateEntity templateDTO) throws Exception;

}
