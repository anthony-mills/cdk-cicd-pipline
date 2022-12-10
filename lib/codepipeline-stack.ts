import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import { CodeCommit } from "./services/codecommit"

export class CodepipelineStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    let codeCommit = new CodeCommit(this);
    codeCommit.createRepo();

  }
}
