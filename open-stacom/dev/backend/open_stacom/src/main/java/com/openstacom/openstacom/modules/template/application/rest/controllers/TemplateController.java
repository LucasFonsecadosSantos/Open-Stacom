package com.openstacom.openstacom.modules.template.application.rest.controllers;

import com.openstacom.openstacom.modules.template.domain.dtos.ITemplateDTO;
import com.openstacom.openstacom.modules.template.domain.services.templatecreate.ITemplateCreateService;
import com.openstacom.openstacom.modules.template.domain.services.templatecreate.TemplateCreateServiceImpl;
import com.openstacom.openstacom.modules.template.domain.services.templateload.ITemplateLoaderService;
import com.openstacom.openstacom.modules.template.domain.services.templateload.TemplateLoaderServiceImpl;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/template")
@AllArgsConstructor
public class TemplateController {

    @Autowired
    private final ITemplateLoaderService loaderService;

    @Autowired
    private final ITemplateCreateService createService;

    public TemplateController(TemplateLoaderServiceImpl loaderService, TemplateCreateServiceImpl createService) {
        this.loaderService = loaderService;
        this.createService = createService;
    }

    //@CrossOrigin(origins = "${client.frontend_address}")
    @GetMapping("")
    public ResponseEntity<List<ITemplateDTO>> all() {

        try {

            List<ITemplateDTO> fetchedTemplateDTO = loaderService.load("classpath:template/definition/");
            return ResponseEntity.ok(fetchedTemplateDTO);

        } catch (Exception e) {

            return ResponseEntity.internalServerError().build();
        }

    }

    @CrossOrigin(origins = "${client.frontend_address}")
    @PostMapping("/create")
    public ResponseEntity<ITemplateDTO> create(@Validated @RequestBody ITemplateDTO templateDTO) {

        try {

            ITemplateDTO responseDTO = createService.create(templateDTO);
            return ResponseEntity.ok(responseDTO);

        } catch (Exception e) {

            return ResponseEntity.internalServerError().build();

        }

    }

}
