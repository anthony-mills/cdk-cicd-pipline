import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import { CodeCommit } from "./services/codecommit"
import { CodeBuild } from "./services/codebuild"
export class CiCdStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    let codeCommit= new CodeCommit(this);
    let codeRepo = codeCommit.createRepo();
    let buildProject = (new CodeBuild(this)).createCodeBuildProject(codeRepo);
  }
}
