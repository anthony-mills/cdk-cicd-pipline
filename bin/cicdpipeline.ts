#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { CiCdStack } from '../lib/cicd-stack';

const app = new cdk.App();

new CiCdStack(app, 'CiCdStack', {});