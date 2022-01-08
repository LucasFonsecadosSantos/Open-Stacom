package com.openstacom.openstacom.business.entity;

import com.openstacom.openstacom.business.entity.enumType.ActivityType;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
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
