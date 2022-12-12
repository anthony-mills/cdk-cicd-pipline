import * as codepipeline from 'aws-cdk-lib/aws-codepipeline';

import pipelineConf from "../../config/pipeline";

export class CodePipeline {
    appScope: any;

    public constructor(appScope: any) {
        this.appScope = appScope;
    }

    /**
     * Create a new code commit repository
     *
     * @return {codepipeline.Pipeline}
     *
     * @public
     */
    public createPipeline() : codepipeline.Pipeline
    {
        return new codepipeline.Pipeline(this.appScope, 'CICDPipline', {
            pipelineName: pipelineConf.code_pipeline.pipeline_name
        });
    }
}