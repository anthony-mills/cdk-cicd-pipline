import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import CodeCommit  from "./services/codecommit"
import CodePipeline  from "./services/codepipeline"
import S3Storage from "./services/s3";
export class CiCdStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    let s3Bucket = (new S3Storage(this)).createImportBucket();
    let codeCommit= new CodeCommit(this);
    let codeRepo = codeCommit.createRepo();
    let codePipeline = new CodePipeline(this);
    let deployPipeline = codePipeline.createPipeline(codeRepo);
    codeCommit.repoAction(codeRepo, deployPipeline);
  }
}
