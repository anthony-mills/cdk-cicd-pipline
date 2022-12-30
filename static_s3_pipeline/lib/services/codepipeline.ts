import * as codepipeline from 'aws-cdk-lib/aws-codepipeline';
import * as codepipelineActions from 'aws-cdk-lib/aws-codepipeline-actions';
import pipelineConf from "../../config/pipeline";
import {Construct} from "constructs";
import {aws_codecommit, aws_s3} from "aws-cdk-lib";
import stackOutputs from "./stack_outputs";

export default class CodePipeline extends stackOutputs {
    constructor(protected scope: Construct) {
        super(scope);
    }

    /**
     * Create a new code commit repository
     *
     * @param {aws_codecommit.Repository} codeRepo
     * @param {aws_s3.Bucket} websiteBucket
     *
     * @return {codepipeline.Pipeline} codePipe
     *
     * @public
     */
    public createPipeline(codeRepo: aws_codecommit.Repository, websiteBucket: aws_s3.Bucket) : codepipeline.Pipeline
    {
        let sourceArtifact = new codepipeline.Artifact();
        let codePipe =  new codepipeline.Pipeline(this.scope, 'CICDPipeline', {
            pipelineName: pipelineConf.code_pipeline.pipeline_name.replace(/\s/g, '-'),
            stages: [
                {
                    stageName: 'Source',
                    actions: [
                        new codepipelineActions.CodeCommitSourceAction({
                            actionName: "Source-Action",
                            branch: "main",
                            repository: codeRepo,
                            output: sourceArtifact,
                            trigger: codepipelineActions.CodeCommitTrigger.EVENTS,
                        }),
                    ],
                },
                {
                    stageName: 'Approval',
                    actions: [
                        new codepipelineActions.ManualApprovalAction({
                            actionName: 'Approve',
                            notifyEmails: pipelineConf.code_pipeline.notification_emails
                        })
                    ],
                },
                {
                    stageName: 'Deploy-to-S3-Bucket',
                    actions: [
                        new codepipelineActions.S3DeployAction({
                            actionName: 'Deploy',
                            bucket: websiteBucket,
                            input: sourceArtifact
                        })
                    ],
                },
            ],
        });

        this.resourceOutput("DeployPipeline", codePipe.pipelineName, codePipe.pipelineArn);

        return codePipe;
    }
}