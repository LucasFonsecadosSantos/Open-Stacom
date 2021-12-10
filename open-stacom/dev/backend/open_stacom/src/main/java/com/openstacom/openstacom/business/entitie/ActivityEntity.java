package com.openstacom.openstacom.business.entitie;

import com.openstacom.openstacom.business.entitie.enumType.ActivityType;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ActivityEntity {

    private String id;

    private ActivityType type;

    private String title;

    private String brief;

    private String poweredBy;

    private PersonEntity responsible;

    private String description;

    private String picture;

    private String targetPublic;

    private String location;

    private String price;

    private PricePlanEntity pricePlan;

}
