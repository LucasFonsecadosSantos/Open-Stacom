package com.openstacom.openstacom.business.entitie;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
public class PricePlanEntity {

    private String id;

    private String name;

    private String value;

    private String description;

}
