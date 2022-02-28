package com.openstacom.openstacom.modules.event.domain.services.eventgeneration;

import com.openstacom.openstacom.modules.event.domain.entities.EventEntity;
import com.openstacom.openstacom.modules.template.domain.entities.TemplateEntity;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.thymeleaf.context.Context;
import org.thymeleaf.spring5.ISpringTemplateEngine;

import java.io.File;
import java.util.Locale;

@AllArgsConstructor
public class EventGenerationServiceImpl implements IEventGenerationService {

    @Autowired
    private ISpringTemplateEngine templateEngine;

    @Override
    public EventEntity generates(EventEntity eventEntity) throws Exception {

        final Context context = new Context(new Locale("pt-br"));
        context.setVariable("name", eventEntity.getName());
//        ctx.setVariable("subscriptionDate", new Date());
//        ctx.setVariable("hobbies", Arrays.asList("Cinema", "Sports", "Music"));
//        ctx.setVariable("imageResourceName", imageResourceName); // so that we can reference it from HTML
        String path = "classpath:resources/template" + eventEntity.getTemplate().getPath() +"/index.html";
        File file = new File(path);
        final String htmlContent = this.templateEngine.process(path, context);
        return null;
    }

}
