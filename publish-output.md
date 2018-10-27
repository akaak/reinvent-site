A sample of the reinvent site publish from the local Terminal.

Pushes to the AWS S3 and invalidates the CloudFront cache.


```
ak@~/dev/grunt $ ./reinvent-publish.sh 
  building site
  using config file: /Users/ak/projects/reinvent-site/config.json
  rendering tree:
    articles/
      about-reinvent/
        index.md (url: /articles/about-reinvent/)
      aws-reinvent-mobileapp/
        index.md (url: /articles/aws-reinvent-mobileapp/)
      pakage-managers/
        index.md (url: /articles/pakage-managers/)
      public-sector-summit-2018/
        index.md (url: /articles/public-sector-summit-2018/)
      reinvent17-day1/
        aria-helper1.jpg (url: /articles/reinvent17-day1/aria-helper1.jpg)
        index.md (url: /articles/reinvent17-day1/)
        reg-desk.jpg (url: /articles/reinvent17-day1/reg-desk.jpg)
      reinvent17-sessions/
        index.md (url: /articles/reinvent17-sessions/)
      .DS_Store (url: /articles/.DS_Store)
    authors/
      ak.json (url: /authors/ak.html)
    css/
      main.css (url: /css/main.css)
    pages/
      1.page (url: /)
      2.page (url: /page/2/)
    .DS_Store (url: /.DS_Store)
    about.md (url: /about.html)
    archive.json (url: /archive.html)
    feed.json (url: /feed.xml)
    index.page (url: /)
    last.page (url: /page/2/)

  done in 19533 ms

Running "s3:build" (s3) task
>> No change 'css/main.css'
>> No change 'articles/reinvent17-day1/aria-helper1.jpg'
>> Put 'articles/about-reinvent/index.html'
>> Put 'articles/reinvent17-day1/index.html'
>> Put 'articles/pakage-managers/index.html'
>> Put 'articles/public-sector-summit-2018/index.html'
>> Put 'page/2/index.html'
>> Put 'articles/aws-reinvent-mobileapp/index.html'
>> Put 'feed.xml'
>> Put 'archive.html'
>> Put 'articles/reinvent17-sessions/index.html'
>> Put 'index.html'
>> No change 'articles/reinvent17-day1/reg-desk.jpg'
>> Put 10 files

Done.
{
    "Invalidation": {
        "Status": "InProgress", 
        "InvalidationBatch": {
            "Paths": {
                "Items": [
                    "/articles/*"
                ], 
                "Quantity": 1
            }, 
            "CallerReference": "cli-15406*****-202190"
        }, 
        "Id": "I32BZOAS6*****", 
        "CreateTime": "2018-10-27T13:29:47.113Z"
    }, 
    "Location": "https://cloudfront.amazonaws.com/2016-09-29/distribution/E22QFH4AJ*****/invalidation/I32BZOAS6*****"
}

```
