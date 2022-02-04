package com.openstacom.openstacom.modules.app.application.rest.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/application")
public class AppController {

    @CrossOrigin(origins = "${client.frontend_address}")
    @GetMapping("/version")
    public ResponseEntity getVersion() {
        return null;
    }

    @CrossOrigin(origins = "${client.frontend_address}")
    @GetMapping("/contribute")
    public ResponseEntity howToContribute() {
        return null;
    }

}
