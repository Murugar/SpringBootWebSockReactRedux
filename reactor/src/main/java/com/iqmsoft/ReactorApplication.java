package com.iqmsoft;

import lombok.SneakyThrows;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Import;

import com.iqmsoft.cgf.ReactorCfg;
import com.iqmsoft.pingpong.Publisher;
import com.iqmsoft.pingpong.Receiver;

import reactor.bus.EventBus;

import java.util.concurrent.TimeUnit;

import static reactor.bus.selector.Selectors.$;

@Slf4j
@SpringBootApplication
@Import(ReactorCfg.class)
public class ReactorApplication {

  @SneakyThrows
  public static void main(String[] args) {
    new Thread(() -> SpringApplication.run(ReactorApplication.class, args)).start();
    TimeUnit.SECONDS.sleep(10);
    System.exit(0);
  }

  @Bean
  public CommandLineRunner runner(EventBus eventBus, Receiver receiver, Publisher publisher) {
    return args -> {
      eventBus.on($("models"), receiver);
      publisher.publishModel(10);
    };
  }
}
