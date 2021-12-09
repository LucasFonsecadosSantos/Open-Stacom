package com.openstacom.openstacom.business.entities;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class LocationEntity {

    private String cep;

    private String address;

    private String number;

    private String neiborhood;

    private String city;

    private String uf;

    private String country;

    private String latLong;

}
