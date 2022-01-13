package com.openstacom.openstacom.shared.services.resourcecreate;

import org.springframework.stereotype.Service;

import java.io.File;

@Service
public interface IResourceCreateService {

    File createAtPath(String path) throws Exception;

}
