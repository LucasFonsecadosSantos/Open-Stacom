package com.openstacom.openstacom.business.entity;

import lombok.*;

import java.util.Date;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@ToString
public class PastEditionEntity {

    private String id;

    private String name;

    private String logo;

    private Date date;

    private String link;

}
