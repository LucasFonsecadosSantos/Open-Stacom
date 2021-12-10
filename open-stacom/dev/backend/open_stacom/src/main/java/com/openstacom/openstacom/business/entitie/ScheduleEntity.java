package com.openstacom.openstacom.business.entitie;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
public class ScheduleEntity {

    private String id;

    private Date date;

    private String startTime;

    private String endTime;

    private ActivityEntity activity;

}
