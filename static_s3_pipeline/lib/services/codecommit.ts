import * as codecommit from "aws-cdk-lib/aws-codecommit";
import * as targets from "aws-cdk-lib/aws-events-targets";
import * as path from "path";

import pipelineConf from "../../config/pipeline";
import {Construct} from "constructs";
import * as codepipeline from "aws-cdk-lib/aws-codepipeline";

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
        return new codecommit.Repository(this.scope, pipelineConf.code_commit.repo_name + "CodeCommitRepo", {
            repositoryName: pipelineConf.code_commit.repo_name,
            description: pipelineConf.code_commit.repo_description,
            code: codecommit.Code.fromDirectory(
                path.join(__dirname, "../../codebase/repo"),
                pipelineConf.code_commit.repo_branch
            ),
        });
    }

    /**
     * Add an action to be preformed when a commit is made to the main branch
     *
     * @param {codecommit.Repository} codeRepo
     * @param {codepipeline.Pipeline} codePipeline
     *
     * @return {void}
     *
     * @public
     */
    public repoAction(codeRepo: codecommit.Repository, codePipeline: codepipeline.Pipeline): void
    {
        codeRepo.onCommit("ProcessCommit", {
            target: new targets.CodePipeline(codePipeline),
            branches: ["main"],
        });
    }
}