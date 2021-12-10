package com.openstacom.openstacom.business.entitie;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
public class PastEditionEntity {

    private String id;

    private String name;

    private String logo;

    private Date date;

    private String link;

}
