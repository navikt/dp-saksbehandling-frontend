import { OTLPTraceExporter } from "@opentelemetry/exporter-trace-otlp-grpc";
import type { OTLPGRPCExporterConfigNode } from "@opentelemetry/otlp-grpc-exporter-base";
import { Resource } from "@opentelemetry/resources";
import { NodeSDK } from "@opentelemetry/sdk-node";
import { SimpleSpanProcessor } from "@opentelemetry/sdk-trace-node";
import { ATTR_SERVICE_NAME } from "@opentelemetry/semantic-conventions";

const otelConfig = {
  url: process.env.OTEL_EXPORTER_OTLP_ENDPOINT,
  headers: {
    "x-sf-service-name": "dp-saksbehandling-frontend",
  },
} as OTLPGRPCExporterConfigNode;

const sdk = new NodeSDK({
  resource: new Resource({
    [ATTR_SERVICE_NAME]: "dp-saksbehandling-frontend",
  }),
  spanProcessors: [new SimpleSpanProcessor(new OTLPTraceExporter(otelConfig))],
});

sdk.start();
