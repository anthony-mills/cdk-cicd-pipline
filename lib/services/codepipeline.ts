import * as codepipeline from 'aws-cdk-lib/aws-codepipeline';

import pipelineConf from "../../config/pipeline";
import {Construct} from "constructs";

export class CodePipeline {
    constructor(private scope: Construct) {}

    /**
     * Create a new code commit repository
     *
     * @return {codepipeline.Pipeline}
     *
     * @public
     */
    public createPipeline() : codepipeline.Pipeline
    {
        return new codepipeline.Pipeline(this.scope, 'CICDPipline', {
            pipelineName: pipelineConf.code_pipeline.pipeline_name
        });
    }
}