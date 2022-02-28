package com.openstacom.openstacom.modules.template.domain.services.templateload;

import com.openstacom.openstacom.modules.template.domain.entities.TemplateEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface ITemplateLoaderService {

    List<TemplateEntity> load(String path) throws Exception;

}
