---
title: About Reinvent Site
author: ak
date: 2017-10-31
template: article.jade
---

This is an experimental project for articles, tutorials, and information on Amazon AWS Cloud related services/products/tools.

Built using...

- static site generator: <wintersmith>
- published to AWS S3
- aws javascript sdk + grunt plugins to publish to S3

On AWS...

- Site DNS (reinvent.site) configured via Route 53 to CloudFront Distribution
- CloudFront points to the S3 bucket
  - CloudFront to host the SSL certificate
  - AWS Certificate Manager for the SSL certificate
- S3 for the Static Site content hosting

``` 
     Domain --> Route 53 --> CloudFront (ACM for SSL) --> S3 
```


References:

- [Setup AWS S3 static using SSL](https://medium.com/@sbuckpesch/setup-aws-s3-static-website-hosting-using-ssl-acm-34d41d32e394) Medium Article

_(last updated: May 22, 2018)_
