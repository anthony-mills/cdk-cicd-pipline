import * as codebuild from "aws-cdk-lib/aws-codebuild";

import {aws_codecommit} from "aws-cdk-lib";
import pipelineConf from "../../config/pipeline";

export class CodeBuild {
    appScope: any;

    public constructor(appScope: any) {
        this.appScope = appScope;
    }

    /**
     * Create code build object using a code commit repository as the source
     *
     * @param {aws_codecommit.Repository} codeRepo
     *
     * @return {codebuild.Project}
     *
     * @public
     */
    public createCodeBuildProject(codeRepo: aws_codecommit.Repository) : codebuild.Project
    {
        return new codebuild.Project(this.appScope, "cdkCodeBuild", {
            source: codebuild.Source.codeCommit({
                repository: codeRepo,
                identifier: pipelineConf.code_commit.repo_name
            }),
        });
    }

}