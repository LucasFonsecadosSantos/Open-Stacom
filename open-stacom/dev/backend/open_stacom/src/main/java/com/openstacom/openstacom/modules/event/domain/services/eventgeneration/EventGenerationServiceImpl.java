package com.openstacom.openstacom.modules.event.domain.services.eventgeneration;

import com.openstacom.openstacom.modules.template.domain.entities.templateobject.EventEntity;
import com.openstacom.openstacom.modules.event.domain.usecase.webpagedatabuilder.WebPageDataBuilder;
import com.openstacom.openstacom.shared.entities.TemplateDataContent;
import de.neuland.jade4j.spring.template.SpringTemplateLoader;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.servlet.view.freemarker.FreeMarkerViewResolver;
import org.springframework.web.servlet.view.groovy.GroovyMarkupViewResolver;
import org.thymeleaf.context.Context;
import org.thymeleaf.spring5.SpringTemplateEngine;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Locale;

@AllArgsConstructor
public class EventGenerationServiceImpl implements IEventGenerationService {

    @Autowired
    private SpringTemplateEngine templateEngine;

    @Autowired
    private FreeMarkerViewResolver freeMarkerTemplateEngine;

    @Autowired
    private GroovyMarkupViewResolver groovyTemplateEngine;

    @Autowired
    private SpringTemplateLoader jade4jTemplateEngine;

    @Override
    public EventEntity generates(EventEntity eventEntity) throws Exception {

        Context context = new Context();
        WebPageDataBuilder dataBuilder = new WebPageDataBuilder(eventEntity.getTemplate());
        TemplateDataContent pageContent = dataBuilder.getPageContent();
        context.setLocale(new Locale("pt-BR"));

        SimpleDateFormat dateFormat = new SimpleDateFormat("dd MMMM yyyy");
        Calendar cal = Calendar.getInstance();

        context.setVariable("todayDate", dateFormat.format(cal.getTime()));
        context.setVariable("name", "Manoj");
        final String result = this.templateEngine.process(eventEntity.getTemplate().getPath() + "/index", context);
        System.out.println("result:" + result);
        return null;
    }

//    @Override
//    public EventEntity generates(EventEntity eventEntity) throws Exception {
//
//        Context context = new Context();
//        WebPageDataBuilder dataBuilder = new WebPageDataBuilder(eventEntity.getTemplate());
//        context = dataBuilder.populateWebPageContext(context);
//        context.setLocale(new Locale("pt-BR"));
//
//        SimpleDateFormat dateFormat = new SimpleDateFormat("dd MMMM yyyy");
//        Calendar cal = Calendar.getInstance();
//
//        context.setVariable("todayDate", dateFormat.format(cal.getTime()));
//        context.setVariable("name", "Manoj");
//        final String result = this.templateEngine.process(eventEntity.getTemplate().getPath() + "/index", context);
//        System.out.println("result:" + result);
//        return null;
//    }


}
