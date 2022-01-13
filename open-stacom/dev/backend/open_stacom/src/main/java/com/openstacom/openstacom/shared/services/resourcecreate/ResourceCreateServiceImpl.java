package com.openstacom.openstacom.shared.services.resourcecreate;

import java.io.File;

public class ResourceCreateServiceImpl implements IResourceCreateService {

    @Override
    public File createAtPath(String path) {

        return new File(path);

    }

}
