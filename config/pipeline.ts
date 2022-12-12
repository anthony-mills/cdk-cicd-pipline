import * as ecr from 'aws-cdk-lib/aws-ecr';
export default {
    code_commit: {
        // The name of the code commit repo to create
        repo_name: 'code_commit_repo',
        // Description for code
        repo_description: 'Sample CICD pipline build with AWS CDK.',
        // Default branch for code
        repo_branch: 'development',
    },
    code_build: {
        project_name: "Code Build Project"
    },
    code_pipeline: {
        pipeline_name: "CDK Code Pipeline"
    },
    ecr: {
        // Name for the ECR repository
        repo_name: "xyz_project_repo",
        tag_immutability: ecr.TagMutability.IMMUTABLE,
    }
}
