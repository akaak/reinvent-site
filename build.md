
(awsdev) ak@~/dev/grunt-test $ cat ~/.aws/credentials 
[default]
aws_access_key_id = AKIAIQMJX5BSH577799
aws_secret_access_key = eKXLCFGOxrReDAP+QdfltJGAZw9ZtGzGtodotodo

[dev1]
aws_access_key_id = AKIAJPNRWSPFUM88899
aws_secret_access_key = flDAkYA8aUZHKOmc//SY4FO5hBrxipqB4todotodo

ak@~/dev/grunt-test $ cat .site.aws.json 
{
  "bucket": "domain.com",
  "accessKeyId": "AKIAJPNRWSPFUM88899",
  "secretAccessKey": "flDAkYA8aUZHKOmc//SY4FO5hBrxipqB4todotodo"
}


$ wintersmith build

aws cloudfront list-distributions --profile dev1

aws cloudfront create-invalidation --profile dev1 --distribution-id E2LMEC29C9999 --paths /index.html

aws cloudfront create-invalidation --profile dev1 --distribution-id E22QFH4AJ09999 --paths /articles/*


(awsdev) ak@~/dev/grunt-test $ grunt --gruntfile SiteGruntfile.js s3

In Gruntfile
----
    grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    aws: grunt.file.readJSON('.site.aws.json'),
---


