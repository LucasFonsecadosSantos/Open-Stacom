package com.openstacom.openstacom.modules.event.application.rest.controllers;

import com.openstacom.openstacom.modules.event.domain.dtos.IEventDTO;
import com.openstacom.openstacom.modules.event.domain.services.eventgeneration.IEventGenerationService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/api/event")
@Validated
@AllArgsConstructor
public class EventController {

    @Autowired
    private IEventGenerationService createService;

    @CrossOrigin(origins = "${client.frontend_address}")
    @PostMapping("/generate")
    public ResponseEntity<IEventDTO> generate(@Valid @RequestBody IEventDTO eventDTO) {

        try {

            IEventDTO eventDTOResponse = createService.generates(eventDTO);
            return ResponseEntity.ok(eventDTOResponse);

        } catch (Exception e) {

            return ResponseEntity.internalServerError().build();

        }

    }

}
