import {aws_s3} from 'aws-cdk-lib';

import appConf from '../../config/general'

export default class S3Storage {

    appScope: any;

    public constructor(appScope: any) {
        this.appScope = appScope;
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
        let s3Bucket = new aws_s3.Bucket(this.appScope, appConf.website_bucket.name, {
            encryption: aws_s3.BucketEncryption.UNENCRYPTED,
            removalPolicy: appConf.website_bucket.removal_policy,
            websiteIndexDocument: appConf.website_bucket.site_index,
            websiteErrorDocument: appConf.website_bucket.site_error,
        });

        return s3Bucket;
    }

}