package io.vertx.ext.web.api;

import io.vertx.core.json.JsonObject;
import io.vertx.core.json.JsonArray;
import java.time.Instant;
import java.time.format.DateTimeFormatter;

/**
 * Converter for {@link io.vertx.ext.web.api.OperationRequest}.
 * NOTE: This class has been automatically generated from the {@link io.vertx.ext.web.api.OperationRequest} original class using Vert.x codegen.
 */
 class OperationRequestConverter {

   static void fromJson(Iterable<java.util.Map.Entry<String, Object>> json, OperationRequest obj) {
    for (java.util.Map.Entry<String, Object> member : json) {
      switch (member.getKey()) {
        case "params":
          if (member.getValue() instanceof JsonObject) {
            obj.setParams(((JsonObject)member.getValue()).copy());
          }
          break;
      }
    }
  }

   static void toJson(OperationRequest obj, JsonObject json) {
    toJson(obj, json.getMap());
  }

   static void toJson(OperationRequest obj, java.util.Map<String, Object> json) {
    if (obj.getParams() != null) {
      json.put("params", obj.getParams());
    }
  }
}
