# Lambda Function

## Deploy Static Website to S3 Bucket
1. Create S3 Bucket
1. Allow public access
1. Upload files to S3 Bucket
1. Enable Static WebSite
1. Set bucket policy
1. Get URL in S3 Bucket Properties

```
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::YOUR-BUCKET-NAME/*"
    }
  ]
}
```

## Create Database(DynamoDB)
1. Create table
    - Name: recipies
```
{
"id": {"S": "1"},
"name": {"S": "Pasta"},
"ingredients": {"S": "Pasta, Tomatoes, Olive Oil, Garlic, Salt, Pepper"},
"instructions": {"S": "Boil the pasta. Saute garlic in olive oil. Add tomatoes, cooked pasta. Season with salt and pepper. Serve hot."}
}
```
```
{
"id": {"S": "2"},
"name": {"S": "Chicken Curry"},
"ingredients": {"S": "Chicken, Curry Powder, Onion, Ginger, Garlic, Coconut Milk"},
"instructions": {"S": "Heat oil in a pan. Add onion, ginger, and garlic. Cook until fragrant. Add chicken and curry powder. Stir in coconut milk. Simmer until chicken is cooked. Serve with rice."}
}
```
```
{
"id": {"S": "3"},
"name": {"S": "Chocolate Chip Cookies"},
"ingredients": {"S": "Flour, Butter, Sugar, Chocolate Chips, Baking Soda, Vanilla Extract"},
"instructions": {"S": "Preheat oven. Cream butter and sugar. Add eggs and vanilla extract. Mix in flour and baking soda. Stir in chocolate chips. Drop spoonfuls of dough onto baking sheets. Bake until golden brown."}
}
```

## Lambda Code
1. Create Lambda Function
1. Create Custom Role
1. Change code source 
1. Change table name and deploy
```
const AWS = require('aws-sdk'); const dynamo = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
const params = { 
	TableName: 'recipes' 
}; 
const data = await dynamo.scan(params).promise(); 
const response = { 
	statusCode: 200, 
	body: JSON.stringify(data.Items), 
}; 
	return response; 
};
```

## Configure API Gateway
1. Create REST API
1. Create resource 
    - Resource Name: recipies

1. Create method
1. Integrate with Lambda
1. Choose Lambda function
1. Enable CORS
1. Update API on app.js
1. Reupload app.js again
