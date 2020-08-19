echo "----> Deploy to s3 START"

BUCKET_NAME=saulo.dev
BUCKET_REGION=us-east-1

echo "Bucket name: $BUCKET_NAME"
echo "Bucket region: $BUCKET_REGION"

aws s3 sync packages/blog/public s3://$BUCKET_NAME --region=$BUCKET_REGION --delete

aws s3 cp s3://$BUCKET_NAME/index.html s3://$BUCKET_NAME/index.html \
  --metadata-directive REPLACE \
  --cache-control max-age=0,no-cache,no-store,must-revalidate \
  --region=$BUCKET_REGION

echo "----> Deploy to s3 END"