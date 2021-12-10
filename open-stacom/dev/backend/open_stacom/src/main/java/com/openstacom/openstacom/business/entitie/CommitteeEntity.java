package com.openstacom.openstacom.business.entitie;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
public class CommitteeEntity {

    private String id;

    private String name;

    private PersonEntity[] members;

    private String picture;

    private String brief;

    private String telephone;

    private String email;

}
