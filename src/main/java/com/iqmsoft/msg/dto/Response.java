package com.iqmsoft.msg.dto;

import lombok.Data;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;

import java.time.LocalDateTime;

@Data
@RequiredArgsConstructor(staticName = "of")
public class Response {
  @NonNull
  String data;
  LocalDateTime at = LocalDateTime.now();
}
