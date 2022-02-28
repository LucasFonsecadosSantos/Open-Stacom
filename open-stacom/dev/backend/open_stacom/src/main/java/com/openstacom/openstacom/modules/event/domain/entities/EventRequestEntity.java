package com.openstacom.openstacom.modules.event.domain.entities;

import lombok.*;

import javax.validation.constraints.NotBlank;

@NoArgsConstructor
@AllArgsConstructor
@ToString
@Getter
@Setter
public class EventRequestEntity {

    private EventEntity event;

    @NotBlank
    private String token;

}
