# CDK AWS CICD Pipelines

This is a collection of sample CICD pipelines using the AWS range of development services.

These services are provisioned with the [Amazon Cloud Development Kit ( CDK )](https://aws.amazon.com/cdk/).

Simply choose the pipeline you would like to create and follow the instructions to deploy.

### Available Pipelines:

[Static HTML website](static_s3_pipeline/README.md) - Creates a code commit repo for a static HTML website and deploys to a public S3 bucket. 

Changes merged to the main branch of the git repository will be sent for manual approval and then deployed using the AWS CodePipeline service.

![Static HTML S3 Pipeline](images/static_s3_pipeline.png)

### CDK Learning Resources:

Below are some learning resources available if you are interested in learning more about creating infrastructure as code with the AWS CDK framework in general:

[CDK Intro Workshop](https://cdkworkshop.com/) - An introduction to CDK.

[The CDK Book](https://www.thecdkbook.com/) - A book filled with information about defining infrastructure as code with CDK.

[CDK API Reference](https://docs.aws.amazon.com/cdk/api/v2/docs/aws-construct-library.html) - Everyone's constant companion when working on CDK stacks.

[CDK Patterns](https://cdkpatterns.com/) - Open source collection of CDK constructs.


### Licence:

Copyright (C) 2022 [Anthony Mills](https://www.anthony-mills.com/)

This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License along with this program. If not, see http://www.gnu.org/licenses/.