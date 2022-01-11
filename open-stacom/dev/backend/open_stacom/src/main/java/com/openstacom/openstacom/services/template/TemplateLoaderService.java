package com.openstacom.openstacom.services;

import org.apache.tomcat.util.http.fileupload.IOUtils;

import java.io.IOException;
import java.io.InputStream;

public class TemplateLoaderService {

    public static String load(String path, Class aClazz) throws IOException {

        try (InputStream stream = aClazz.getClassLoader().getResourceAsStream(path)) {
            if (stream == null) {
                throw new IOException("Stream is null");
            }
            return IOUtils.toString(stream, Charset.defaultCharset());
        }
        
    }

}
