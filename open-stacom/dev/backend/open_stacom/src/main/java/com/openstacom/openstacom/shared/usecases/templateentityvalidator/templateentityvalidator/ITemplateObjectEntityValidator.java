package com.openstacom.openstacom.shared.usecases.templateentityvalidator.templateentityvalidator;

import com.openstacom.openstacom.modules.template.domain.entities.ITemplateEntity;

import java.util.List;

public interface ITemplateObjectEntityValidator {

    void validate(List<ITemplateEntity> content) throws Exception;

}
