package com.iqmsoft.sse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.mvc.method.annotation.StreamingResponseBody;

import java.nio.charset.Charset;
import java.util.concurrent.TimeUnit;

@Controller
@RequestMapping("/test")
public class StreamingController {
  private static Logger log = LoggerFactory.getLogger(StreamingController.class);

  @RequestMapping(value = "/streaming-response-body", method = RequestMethod.GET)
  public StreamingResponseBody handle() {
    return outputStream -> {
      for (int value = 0; value < 1000; value++) {
        try {
          outputStream.write(String.format("%s ", value).getBytes(Charset.forName("UTF-8")));
          outputStream.flush();
          log.warn("wrote: {}", value);
          TimeUnit.MILLISECONDS.sleep(1);
        } catch (Exception e) {
          log.warn("streaming exception occurs for: {}", value);
        }
      }
    };
  }
}
