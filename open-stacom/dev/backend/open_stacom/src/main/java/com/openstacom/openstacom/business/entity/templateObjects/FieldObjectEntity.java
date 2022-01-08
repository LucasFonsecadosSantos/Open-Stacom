package com.openstacom.openstacom.business.entity.templateObjects;

import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class FieldObjectEntity {

    private Integer maxlength;

    private Integer minlength;

    private Boolean required;

}
