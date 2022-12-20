import * as codecommit from 'aws-cdk-lib/aws-codecommit';
import * as path from "path";

import pipelineConf from "../../config/pipeline";
import {Construct} from "constructs";

export default class CodeCommit {
    constructor(private scope: Construct) {}

    /**
     * Create a new code commit repository
     *
     * @return {codecommit.Repository}
     *
     * @public
     */
    public createRepo() : codecommit.Repository
    {
        return new codecommit.Repository(this.scope, pipelineConf.code_commit.repo_name + 'CodeCommitRepo', {
            repositoryName: pipelineConf.code_commit.repo_name,
            description: pipelineConf.code_commit.repo_description,
            code: codecommit.Code.fromDirectory(
                path.join(__dirname, '../../codebase/repo'),
                pipelineConf.code_commit.repo_branch
            ),
        });
    }
}