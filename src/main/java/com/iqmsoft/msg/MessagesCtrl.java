package com.iqmsoft.msg;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

import com.iqmsoft.msg.dto.Request;
import com.iqmsoft.msg.dto.Response;

@Controller
public class MessagesCtrl {
  @MessageMapping("/chat")
  @SendTo("/topic/message")
  public Response sendMessage(Request request) {
    return Response.of(request.transform());
  }
}
