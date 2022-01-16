package com.openstacom.openstacom.modules.event.domain.dtos;

import lombok.*;

import javax.validation.constraints.NotBlank;

@NoArgsConstructor
@AllArgsConstructor
@ToString
@Getter
@Setter
public class IEventRequestDTO {

    private IEventDTO event;

    @NotBlank
    private String token;

}
