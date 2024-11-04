import { NodeSDK } from "@opentelemetry/sdk-node";
import { OTLPTraceExporter } from "@opentelemetry/exporter-trace-otlp-grpc";
import { Resource } from "@opentelemetry/resources";
import { ATTR_SERVICE_NAME } from "@opentelemetry/semantic-conventions";
import { SimpleSpanProcessor } from "@opentelemetry/sdk-trace-node";
import type { OTLPGRPCExporterConfigNode } from "@opentelemetry/otlp-grpc-exporter-base";

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
