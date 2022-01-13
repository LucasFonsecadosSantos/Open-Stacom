package com.openstacom.openstacom.modules.event.domain.dtos;

import com.openstacom.openstacom.business.entity.PoweredByEntity;
import com.openstacom.openstacom.business.entity.SocialNetworkEntity;
import com.openstacom.openstacom.business.entity.TelephoneEntity;
import com.openstacom.openstacom.business.entity.TemplateEntity;
import lombok.*;

import javax.validation.constraints.Digits;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.util.Date;

@Getter
@Setter
@RequiredArgsConstructor
@AllArgsConstructor
@ToString
public class IEventDTO {

    @NotBlank
    @Size(max = 20, min = 5)
    private String id;

    @NotBlank
    @Size(max = 20, min = 5)
    private String name;

    @NotBlank
    @Size(max = 20, min = 1)
    private String edition;

    @NotBlank
    @Size(max = 20, min = 3)
    private String subject;

    @NotBlank
    @Size(max = 20, min = 3)
    private String eventType;

    @NotBlank
    @Size(max = 20, min = 3)
    private String targetPublic;

    @NotBlank
    @Size(max = 30, min = 3)
    private String logo;

    @NotBlank
    @Size(max = 200, min = 3)
    private String description;

    @NotBlank
    @Size(max = 150, min = 3)
    private String brief;

    @NotBlank
    @Size(max = 20, min = 3)
    private String website;

    @NotBlank
    @Size(max = 20, min = 3)
    @Email
    private String email;

    @NotBlank
    @Size(max = 20, min = 3)
    private TelephoneEntity[] telephone;

    @NotBlank
    @Size(max = 20, min = 3)
    private PoweredByEntity poweredBy;

    @NotBlank
    @Size(max = 20, min = 3)
    private Date[] days;

    @NotBlank
    @Size(max = 20, min = 3)
    private String locationCep;

    @NotBlank
    @Size(max = 20, min = 3)
    private String locationAddress;

    @NotBlank
    @Size(max = 20, min = 3)
    //@Digits(integer = 0, fraction = 0)
    private String locationNumber;

    @NotBlank
    @Size(max = 20, min = 3)
    private String locationNeiborhood;

    @NotBlank
    @Size(max = 20, min = 3)
    private String locationCity;

    @NotBlank
    @Size(max = 20, min = 3)
    private String locationUF;

    @NotBlank
    @Size(max = 20, min = 3)
    private String locationCountry;

    @NotBlank
    @Size(max = 20, min = 3)
    private SocialNetworkEntity socialNetworks;

    @NotBlank
    @Size(max = 20, min = 3)
    private TemplateEntity template;

}
