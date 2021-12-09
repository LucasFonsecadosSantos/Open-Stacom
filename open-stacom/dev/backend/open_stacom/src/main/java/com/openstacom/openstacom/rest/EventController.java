package com.openstacom.openstacom.rest;

import com.google.gson.Gson;
import org.springframework.web.bind.annotation.*;

import java.io.FileWriter;
import java.io.IOException;

@RestController
@RequestMapping("/api/evento")
public class EventController {

    @GetMapping("/generate")
    public void find(@RequestBody(required = false) Object obj) {

        System.out.println(obj);

    }

}
