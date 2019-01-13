##AWS
IaaS - Infrastructure as a Service
PaaS - Platform as a Service

###DevOps
EC2 - cf basic server
Lambda - run code via functions for backend services, zero config, high availability
S3 - object storage service (stored as file w metadata & id)
CloudFront - speeds up distribution of static files cf CDN (globally distributed servers & https)
DynamoDB - noSQL db, reliable performance

Amazon flowcharts => architecture/logic of flow through app

Monolithic vs Micro-Services (via SLA - Service Level Agreement)

###Lambda Functions
'serverless' - cloud provider runs what's needed ONLY, in a secure environment
'cold start' problem = 1st time function is retrieved and run is slow

'Serverless' - easy deployment (e.g. of AWS Lambda functions) from the command line
`npm install -g serverless`
`sls create --help`
`sls create -t aws-nodejs` => generates boilerplate for template 'aws-nodejs' => .gitignore, handler.js, serverless.yml for config

###IAM
Identity & Access Management
- connecting Serveless & AWS
1) Create user e.g. w programmatic access (w access key ID & secret access key, but not access to dashboard) => next =>
2) Permissions: create permission group w existing policy e.g. AdministratorAccess => next =>
3) Review

`sls config credentials --provider aws --key {Access key ID} --secret {Secret access key}`
- creates .aws folder at root level w credentials

For more about policies: https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_manage.html
`sls deploy`
`sls invoke --function {name of function}`
For dev:
`sls invoke local --function {name of function}`
To create endpoint (using Amazon's Gateway API):
 - in `serverless.yml` = create an `events:` block w method and path
 `sls deploy --stage production`
