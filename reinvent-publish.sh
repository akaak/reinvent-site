cd ~/projects/reinvent-site/
/usr/local/bin/wintersmith build
cd ~/dev/grunt-test
/usr/local/bin/grunt --gruntfile ~/dev/grunt-test/ReinventGruntfile.js s3
source /Users/ak/.virtualenvs/awsdev/bin/activate
./cfInvalidateReinvent.sh
