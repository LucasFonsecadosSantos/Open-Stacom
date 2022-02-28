package com.openstacom.openstacom.modules.template.domain.services.templateload;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.openstacom.openstacom.modules.template.domain.entities.TemplateEntity;
import com.openstacom.openstacom.shared.services.resourceloader.IResourceLoaderService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

@AllArgsConstructor
public class TemplateLoaderServiceImpl implements ITemplateLoaderService {

    @Autowired
    private IResourceLoaderService resourceLoaderService;

    @Override
    public List<TemplateEntity> load(String path) throws  Exception {

        List<File> fetchedFiles = resourceLoaderService.loadFilesAtPath(path);
        return getMappedObjectsFromJSONResources(fetchedFiles);

    }

    private List<TemplateEntity> getMappedObjectsFromJSONResources(List<File> fetchedFiles) throws Exception {

        ObjectMapper mapper = new ObjectMapper();
        List<TemplateEntity> buildedDTOs = new ArrayList<>();
        int fileAmount = fetchedFiles.size();

        for (int i=0; i < fileAmount; ++i) {
            buildedDTOs.add(mapper.readValue(fetchedFiles.get(i), TemplateEntity.class));
        }

        return buildedDTOs;
    }

}
