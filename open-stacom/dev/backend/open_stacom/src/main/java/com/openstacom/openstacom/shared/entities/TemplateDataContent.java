package com.openstacom.openstacom.shared.entities;

import lombok.*;

import java.util.Map;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
public class TemplateDataContent {

    private Map<String, Object> data;

}
