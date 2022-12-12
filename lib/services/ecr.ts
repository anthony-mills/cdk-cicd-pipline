import * as ecr from 'aws-cdk-lib/aws-ecr';

import pipelineConf from "../../config/pipeline";

export class Ecr {
    appScope: any;

    public constructor(appScope: any) {
        this.appScope = appScope;
    }

    /**
     * Create an ECR repo for storing Docker images
     *
     * @return {codepipeline.Pipeline}
     *
     * @public
     */
    public createRepo() : ecr.Repository
    {
        return new ecr.Repository(this.appScope, 'CICDImageRepo', {
            repositoryName: pipelineConf.ecr.repo_name,
            imageTagMutability: pipelineConf.ecr.tag_immutability
        });
    }
}