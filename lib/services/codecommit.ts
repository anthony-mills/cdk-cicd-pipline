import * as codecommit from 'aws-cdk-lib/aws-codecommit';
import * as path from "path";

import codeConf from "../../config/codecommit";

export class CodeCommit {
    appScope: any;

    public constructor(appScope: any) {
        this.appScope = appScope;
    }

    /**
     * Create a new code commit repository
     *
     * @return {codecommit.Repository}
     *
     * @public
     */
    public createRepo() : codecommit.Repository
    {
        return new codecommit.Repository(this.appScope, codeConf.repo_name + 'CodeCommitRepo', {
            repositoryName: codeConf.repo_name,
            description: codeConf.repo_description,
            code: codecommit.Code.fromDirectory(
                path.join(__dirname, '../../codebase/repo'),
                codeConf.repo_branch
            ),
        });
    }
}