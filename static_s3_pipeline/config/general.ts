import * as cdk from 'aws-cdk-lib';
export default  {
    // The name of bucket for hosting the static website
    website_bucket: {
        // Name of the bucket to create for incoming sweeps data
        name: "staticwebsitebucket",
        removal_policy: cdk.RemovalPolicy.DESTROY,
        // SIte index page
        site_index: "index.html",
        site_error: "error.html"
    },
}
