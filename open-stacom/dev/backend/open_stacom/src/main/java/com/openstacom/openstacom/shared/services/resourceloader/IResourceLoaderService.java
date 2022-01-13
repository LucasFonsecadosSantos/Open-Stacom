package com.openstacom.openstacom.shared.services.resourceloader;

import org.springframework.stereotype.Service;

import java.io.File;
import java.util.List;

@Service
public interface IResourceLoaderService {

    List<File> loadFilesAtPath(String path) throws Exception;

    File loadFileAtPath(String path) throws Exception;

}
