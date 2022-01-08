package com.openstacom.openstacom.rest;
import com.openstacom.openstacom.business.entity.EventEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/event")
public class EventController {

    @CrossOrigin(origins = "${client.frontend_address}")
    @PostMapping("/generate")
    public EventEntity generate(@RequestBody(required = true) EventEntity obj) {

        return obj;

    }

}
