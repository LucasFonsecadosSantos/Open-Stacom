package com.openstacom.openstacom.shared.services.resourceloader;

import org.springframework.util.ResourceUtils;

import java.io.File;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class ResourceLoaderServiceImpl implements IResourceLoaderService {

    @Override
    public List<File> loadFilesAtPath(String path) throws Exception {

        File file = ResourceUtils.getFile(path);

        if (file.isDirectory()) {
            return Arrays.asList(file.listFiles());
        } else {
            new ArrayList<File>(List.of(file));
        }
        return null;

    }

    @Override
    public File loadFileAtPath(String path) throws Exception {

        File file = ResourceUtils.getFile(path);
        return (!file.isDirectory()) ? file : null;

    }

}
