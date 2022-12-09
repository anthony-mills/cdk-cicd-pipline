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
     */
    public createRepo() : codecommit.Repository
    {
        return new codecommit.Repository(this.appScope, 'Repository', {
            repositoryName: codeConf.repo_name,
            code: codecommit.Code.fromDirectory(path.join(__dirname, 'directory/'), 'development'),
        });
    }
}