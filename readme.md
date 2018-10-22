
# ReInvent Site

_**ReInvent Site**_ covers all things related to Amazon's amazon web services (AWS) and their yearly [conference](https://reinvent.awsevents.com/) Website) on cloud computing. 

### Related Links:

- [ReInvent](https://reinvent.awsevents.com/)  Conference Website

- [AWS Summits](https://aws.amazon.com/summits/) Website

- [Cloud Computing](https://aws.amazon.com/what-is-cloud-computing/)

- [AWS](https://aws.amazon.com/)


This project's github [repository](https://github.com/akaak/reinvent-site).

### How to Publish updates?

- Preview the site on localhost at http://localhost:8080

  `$ wintersmith preview` 

- Build the site in HTML from the markdown contents. The built site will be in the `build` directory

  `$ wintersmith build` 

- Push the website files from 'build' directory to the AWS S3 bucket. Uses aws access keys located in the `.aws.json` file to connect to push the files to the S3

  `$ grunt s3` 

- Invalidate the CloudFront distribution from AWS cli (activate virtualenv and go to aws cli)

  `$ aws cloudfront create-invalidation --profile ak --distribution-id  E22QFH4ACFTODO --paths /articles/*`


On Local machine, run all these commands using reinvent_publish.sh to publish the site to AWS S3.

### How this site is built:

- Built as a static site using Grunt for build, AWS S3 for site storage, and Wintersmith static site generator

- Uses almost all of [aws](https://aws.amazon.com) resources/services.

- Blog [article](https://robmorgan.id.au/posts/publishing-simple-static-sites-with-npm-grunt-s3/) from [Rob Morgan](https://robmorgan.id.au/) covers the site build and publish information

- Wintersmith [documentation](https://github.com/jnordberg/wintersmith#quick-start) provides information on adding articles for the site

- 

