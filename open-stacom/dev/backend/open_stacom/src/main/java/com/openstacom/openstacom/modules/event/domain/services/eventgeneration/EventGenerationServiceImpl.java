package com.openstacom.openstacom.modules.event.domain.services.eventgeneration;

import com.openstacom.openstacom.modules.event.domain.entities.EventEntity;
import com.openstacom.openstacom.modules.template.domain.entities.TemplateEntity;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.thymeleaf.TemplateEngine;
import org.thymeleaf.context.Context;
import org.thymeleaf.spring5.ISpringTemplateEngine;
import org.thymeleaf.spring5.SpringTemplateEngine;
import org.thymeleaf.templatemode.TemplateMode;
import org.thymeleaf.templateresolver.ClassLoaderTemplateResolver;
import org.thymeleaf.templateresolver.StringTemplateResolver;

import java.io.File;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Locale;

@AllArgsConstructor
public class EventGenerationServiceImpl implements IEventGenerationService {


    @Override
    public EventEntity generates(EventEntity eventEntity) throws Exception {

        SpringTemplateEngine templateEngine = new SpringTemplateEngine();
        ClassLoaderTemplateResolver templateResolver = new ClassLoaderTemplateResolver();
        templateResolver.setPrefix("template/template01/");
        templateResolver.setCacheable(false);
        templateResolver.setSuffix(".html");
        templateResolver.setTemplateMode("HTML");
        templateResolver.setForceTemplateMode(true);
        templateEngine.setTemplateResolver(templateResolver);

        Context ctx = new Context();
        ctx.setLocale(new Locale("pt-BR"));

        SimpleDateFormat dateFormat = new SimpleDateFormat("dd MMMM yyyy");
        Calendar cal = Calendar.getInstance();

        ctx.setVariable("todayDate", dateFormat.format(cal.getTime()));
        ctx.setVariable("name", "Manoj");
        final String result = templateEngine.process("index", ctx);
        System.out.println("result:" + result);
        return null;
    }

//    @Override
//    public EventEntity generates(EventEntity eventEntity) throws Exception {
//
//        final Context context = new Context(new Locale("pt-br"));
//        context.setVariable("name", eventEntity.getName());
//        StringTemplateResolver resolver = new StringTemplateResolver();
//        resolver.setTemplateMode(TemplateMode.HTML);
//        TemplateEngine engine = new TemplateEngine();
//        engine.setTemplateResolver(resolver);
////        ctx.setVariable("subscriptionDate", new Date());
////        ctx.setVariable("imageResourceName", imageResourceName); // so that we can reference it from HTML
//        String path = "classpath:resources/template" + eventEntity.getTemplate().getPath() +"/index.html";
//        File file = new File(path);
//        final String htmlContent = engine.process(path, context);
//        System.out.print(htmlContent);
//        return null;
//    }

}
