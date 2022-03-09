package com.openstacom.openstacom.modules.template.domain.entities;

import lombok.*;

import javax.validation.constraints.NotBlank;
import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class CommitteeEntity implements ITemplateEntity {

    @NotBlank
    private String id;

    @NotBlank
    private String name;

    @NotBlank
    private List<String> members;

    @NotBlank
    private String picture;

    @NotBlank
    private String brief;

    @NotBlank
    private String telephone;

    @NotBlank
    private String email;

}
