package com.openstacom.openstacom.rest;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/evento")
public class EventController {

    @PostMapping("/generate")
    public void find(@RequestBody(required = false) Object obj) {

        System.out.println(obj);

    }

}
