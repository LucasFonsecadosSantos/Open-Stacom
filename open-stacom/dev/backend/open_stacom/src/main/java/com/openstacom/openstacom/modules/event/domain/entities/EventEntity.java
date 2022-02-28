package com.openstacom.openstacom.modules.event.domain.entities;
import com.openstacom.openstacom.modules.template.domain.entities.TelephoneEntity;
import com.openstacom.openstacom.modules.template.domain.entities.TemplateEntity;
import lombok.*;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.util.Date;
import java.util.List;

@Getter
@Setter
@RequiredArgsConstructor
@AllArgsConstructor
@ToString
public class EventEntity {

//    @NotBlank
//    @Size(max = 20, min = 5)
    private String id;

//    @NotBlank
//    @Size(max = 20, min = 5)
    private String name;

//    @NotBlank
//    @Size(max = 20, min = 1)
    private String edition;

//    @NotBlank
//    @Size(max = 20, min = 3)
    private String subject;

//    @NotBlank
//    @Size(max = 20, min = 3)
    private String eventType;

//    @NotBlank
//    @Size(max = 20, min = 3)
    private String targetPublic;

//    @NotBlank
//    @Size(max = 30, min = 3)
    private String logo;

//    @NotBlank
//    @Size(max = 200, min = 3)
    private String description;

//    @NotBlank
//    @Size(max = 150, min = 3)
    private String brief;

//    @NotBlank
//    @Size(max = 20, min = 3)
    private String website;

//    @NotBlank
//    @Size(max = 20, min = 3)
//    @Email
    private String email;

//    @NotBlank
//    @Size(max = 20, min = 3)
    private List<TelephoneEntity> telephone;

//    @NotBlank
//    @Size(max = 20, min = 3)
    private String poweredByInstitution;

//    @NotBlank
//    @Size(max = 20, min = 3)
    private String poweredByDepartament;

//    @NotBlank
//    @Size(max = 20, min = 3)
    private Date[] days;

//    @NotBlank
//    @Size(max = 20, min = 3)
    private String locationCep;

//    @NotBlank
//    @Size(max = 20, min = 3)
    private String locationAddress;

//    @NotBlank
//    @Size(max = 20, min = 3)
    //@Digits(integer = 0, fraction = 0)
    private String locationNumber;

//    @NotBlank
//    @Size(max = 20, min = 3)
    private String locationNeiborhood;

//    @NotBlank
//    @Size(max = 20, min = 3)
    private String locationCity;

//    @NotBlank
//    @Size(max = 20, min = 3)
    private String locationUF;

//    @NotBlank
//    @Size(max = 20, min = 3)
    private String locationCountry;

//    @NotBlank
//    @Size(max = 20, min = 3)
    private String socialNetworkFacebook;

//    @NotBlank
//    @Size(max = 20, min = 3)
    private String socialNetworkTwitter;

//    @NotBlank
//    @Size(max = 20, min = 3)
    private String socialNetworkGithub;

//    @NotBlank
//    @Size(max = 20, min = 3)
    private String socialNetworkSpotify;

//    @NotBlank
//    @Size(max = 20, min = 3)
    private String socialNetworkLinkedin;

//    @NotBlank
//    @Size(max = 20, min = 3)
    private String socialNetworkWhatsapp;

//    @NotBlank
//    @Size(max = 20, min = 3)
    private String socialNetworkBehance;

//    @NotBlank
//    @Size(max = 20, min = 3)
    private String socialNetworkYoutubeChannel;

//    @NotBlank
//    @Size(max = 20, min = 3)
    private TemplateEntity template;

}
