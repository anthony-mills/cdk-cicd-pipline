import {Construct} from "constructs";
import * as cdk from "aws-cdk-lib";

export default class stackOutputs {
    constructor(protected scope:Construct){}

    /**
     * Generic Cloud Formation Export ( Name / ARN )
     *
     * @param {string} elmId
     * @param {string} resourceName
     * @param {string} awsArn
     *
     * @return {void}
     *
     * @public
     */
    public resourceOutput(elmId: string, resourceName: string, awsArn: string) : void
    {
        new cdk.CfnOutput(this.scope, elmId + "ARN", {
            value: awsArn,
            exportName: elmId + "ARN"
        });

        new cdk.CfnOutput(this.scope, elmId, {
            value: resourceName ,
            exportName: elmId
        });
    }
}
