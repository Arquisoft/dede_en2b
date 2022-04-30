package com.dede_en2b.restapispringboot;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.context.event.EventListener;
import org.springframework.core.env.ConfigurableEnvironment;
import org.springframework.core.env.MapPropertySource;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

@Slf4j
@Component
public class AppContextEventListener {

    @Value("${spring.datasource.url}")
    private String urlConnection;


    @EventListener
    public void handleContextRefreshed(ContextRefreshedEvent event) {
        printActiveProperties();
    }

    private void printActiveProperties() {

        System.out.println("************************* ACTIVE APP PROPERTIES ******************************");

        System.out.println("spring.datasource.url=" + urlConnection);


        System.out.println("******************************************************************************");
    }
}
