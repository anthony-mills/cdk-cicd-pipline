import {aws_s3, aws_s3_deployment} from 'aws-cdk-lib';
import { Construct } from 'constructs';
import appConf from '../../config/general'
import stackOutputs from "./stack_outputs";

export default class S3Storage extends stackOutputs{

    constructor(protected scope: Construct) {
        super(scope);
    }

    /**
     * Create a bucket to store the static website
     *
     * @return {aws_s3.Bucket} s3Bucket
     *
     * @public
     */
    public createImportBucket() : aws_s3.Bucket
    {
        let s3Bucket = new aws_s3.Bucket(this.scope, appConf.website_bucket.name, {
            encryption: aws_s3.BucketEncryption.UNENCRYPTED,
            removalPolicy: appConf.website_bucket.removal_policy,
            websiteIndexDocument: appConf.website_bucket.site_index,
            websiteErrorDocument: appConf.website_bucket.site_error,
            publicReadAccess: true,
        });

        this.addBucketContent(s3Bucket);
        this.resourceOutput("WebsiteBucket", s3Bucket.bucketName, s3Bucket.bucketArn);

        return s3Bucket;
    }

    /**
     * Do an initial deployment of the site to the bucket
     *
     * @param {aws_s3.Bucket} s3Bucket
     *
     * @protected
     */
    protected addBucketContent(s3Bucket: aws_s3.Bucket)
    {
        new aws_s3_deployment.BucketDeployment(this.scope, "WebsiteDeployment", {
            sources: [aws_s3_deployment.Source.asset("codebase/repo")],
            destinationBucket: s3Bucket,
        });
    }
}