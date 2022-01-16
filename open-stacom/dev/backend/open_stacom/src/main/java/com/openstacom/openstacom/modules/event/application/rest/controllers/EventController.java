package com.openstacom.openstacom.modules.event.application.rest.controllers;

import com.openstacom.openstacom.modules.event.domain.dtos.IEventDTO;
import com.openstacom.openstacom.modules.event.domain.dtos.IEventRequestDTO;
import com.openstacom.openstacom.modules.event.domain.services.eventgeneration.IEventGenerationService;
import com.openstacom.openstacom.modules.event.domain.services.eventvalidator.IEventValidatorService;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/api/event")
@Validated
@AllArgsConstructor
@NoArgsConstructor
public class EventController {

    @Autowired
    private IEventGenerationService createService;

    @Autowired
    private IEventValidatorService validatorService;

    @CrossOrigin(origins = "${client.frontend_address}")
    @PostMapping("/generate")
    public ResponseEntity<IEventDTO> generate(@Valid @RequestBody IEventDTO eventDTO) {

        try {

            IEventDTO eventDTOResponse = createService.generates(eventDTO);
            return ResponseEntity.ok(eventDTOResponse);

        } catch(Exception e) {

            return ResponseEntity.internalServerError().build();

        }

    }

    //@CrossOrigin(origins = "${client.frontend_address")
    @PostMapping("/upload")
    public ResponseEntity<IEventDTO> loadUploadedEvent(@RequestBody IEventRequestDTO eventDTO) {

        try {

            //this.validatorService.validate(eventDTO);
            //return ResponseEntity.ok(eventDTO);
            return null;

        } catch(Exception e) {

            return ResponseEntity.internalServerError().build();

        }

    }

}
