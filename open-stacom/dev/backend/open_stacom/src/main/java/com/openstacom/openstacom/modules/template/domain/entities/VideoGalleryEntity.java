package com.openstacom.openstacom.modules.template.domain.entities;

import lombok.*;

import javax.validation.constraints.NotBlank;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class VideoGalleryEntity {

    @NotBlank
    private String id;

    @NotBlank
    private String title;

    @NotBlank
    private String legend;

    @NotBlank
    private String file;

}
