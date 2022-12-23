import * as codepipeline from 'aws-cdk-lib/aws-codepipeline';
import * as codepipelineActions from 'aws-cdk-lib/aws-codepipeline-actions';
import pipelineConf from "../../config/pipeline";
import {Construct} from "constructs";
import {aws_codecommit} from "aws-cdk-lib";

export default class CodePipeline {
    constructor(private scope: Construct) {}

    /**
     * Create a new code commit repository
     *
     * @return {codepipeline.Pipeline}
     *
     * @public
     */
    public createPipeline(codeRepo: aws_codecommit.Repository) : codepipeline.Pipeline
    {
        return new codepipeline.Pipeline(this.scope, 'CICDPipeline', {
            pipelineName: pipelineConf.code_pipeline.pipeline_name.replace(/\s/g, '-'),
            stages: [
                {
                    stageName: 'Source',
                    actions: [
                        new codepipelineActions.CodeCommitSourceAction({
                            actionName: "Source-Action",
                            repository: codeRepo,
                            output: new codepipeline.Artifact(),
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
            ],
        });
    }
}