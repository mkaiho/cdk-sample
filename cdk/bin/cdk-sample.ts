#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "aws-cdk-lib";
import { CdkSampleStack } from "../lib/cdk-sample-stack";

const app = new cdk.App();
new CdkSampleStack(app, "CdkSampleStack", {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION,
  },
});
