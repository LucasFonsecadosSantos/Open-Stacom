package com.openstacom.openstacom.business.entity;

import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
@ToString
public class CommitteeEntity {

    private String id;

    private String name;

    private PersonEntity[] members;

    private String picture;

    private String brief;

    private String telephone;

    private String email;

}
