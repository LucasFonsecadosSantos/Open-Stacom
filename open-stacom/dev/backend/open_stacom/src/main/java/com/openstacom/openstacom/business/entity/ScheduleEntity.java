package com.openstacom.openstacom.business.entity;

import lombok.*;

import java.util.Date;

@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
@ToString
public class ScheduleEntity {

    private String id;

    private Date date;

    private String startTime;

    private String endTime;

    private ActivityEntity activity;

}
