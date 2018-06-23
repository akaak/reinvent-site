## Reinvent.Site Build Instructions
 
Information and Steps to build and deploy Wintersmith based Static website to AWS S3.

PRE-REQUISITES:

- Wintersmith (http://wintersmith.io/)
- nodejs pkg manager (npm)
- Grunt 
- grunt-aws plugin 
- aws-cli 

### aws-cli credential info (if you have more than one profile)

----
    (awsdev) ak@~/dev/grunt-test $ cat ~/.aws/credentials 
    [default]
    aws_access_key_id = AKIAIQMJX5BSH577799
    aws_secret_access_key = eKXLCFGOxrReDAP+QdfltJGAZw9ZtGzGtodotodo

    [dev1]
    aws_access_key_id = AKIAJPNRWSPFUM88899
    aws_secret_access_key = flDAkYA8aUZHKOmc//SY4FO5hBrxipqB4todotodo
----

### Push website content from Local to the AWS S3 using a Grunt Task

**aws iam user credential file used by `grunt-aws` plugin**

----
    ak@~/dev/grunt-test $ cat .site.aws.json 
    {
      "bucket": "domain.com",
      "accessKeyId": "AKIAJPNRWSPFUM88899",
      "secretAccessKey": "flDAkYA8aUZHKOmc//SY4FO5hBrxipqB4todotodo"
    }
----

## Steps to build and deploy the Site

1. Build Website files

`$ wintersmith build`

2. Login to AWS-CLI enabled virtualenv

`$ workon awsdev`


3. Run grunt job to push content built in step 1 above to site’s S3 bucket

`(awsdev) ak@~/dev/grunt-test $ grunt --gruntfile SiteGruntfile.js s3`

4. Invalidate CloudFront distribution 

`aws cloudfront create-invalidation --profile dev1 --distribution-id E22QFH4AJ09999 --paths /articles/* `

## Other useful Information:

### Listing CloudFront distributions

`$ aws cloudfront list-distributions --profile dev1`

*In Gruntfile*

----
    grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    aws: grunt.file.readJSON('.site.aws.json'),
---

