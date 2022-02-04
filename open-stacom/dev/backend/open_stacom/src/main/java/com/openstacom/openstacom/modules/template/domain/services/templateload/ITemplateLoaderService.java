package com.openstacom.openstacom.modules.template.domain.services.templateload;

import com.openstacom.openstacom.modules.template.domain.dtos.ITemplateDTO;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface ITemplateLoaderService {

    List<ITemplateDTO> load(String path) throws Exception;

}
