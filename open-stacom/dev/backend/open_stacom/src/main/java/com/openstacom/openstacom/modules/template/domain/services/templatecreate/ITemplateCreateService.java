package com.openstacom.openstacom.modules.template.domain.services.templatecreate;

import com.openstacom.openstacom.modules.template.domain.dtos.ITemplateDTO;
import org.springframework.stereotype.Service;

@Service
public interface ITemplateCreateService {

    ITemplateDTO create(ITemplateDTO templateDTO) throws Exception;

}
