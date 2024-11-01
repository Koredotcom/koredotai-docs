---
title: Amazon Bedrock

permalink: platform/instructions/en/latest/Actions/amazon_bedrock
---

<base target="_blank">
<container>

**Overview**
 
Amazon Bedrock provides access to a wide range of advanced language models. Users can evaluate the models and choose the right model for their use cases. This integration allows the users to use any of the models on Bedrock for the Co-pilot and Dynamic Conversations features of the XO Platform
</container>

<container>

**Configuration**
 
Follow these step-by-step instructions to integrate Amazon Bedrock's Language Models with the XO Platform:

**Step 1: Gather Required Information**
Before you begin setting up the integration, ensure you have the following information:
1. **Provider Name**: Choose a name to identify the group of Language Models you want to connect (required). 
Example: Provider Name: Anthropic. If you are connecting to Anthropic Claude-3 through Bedrock, you can name it Bedrock Anthropic
2. **Model Name**: Give a unique name to the Language Model you're connecting (required).
Example: Model Name: Haiku. If you connect to Haiku, the model name can be Haiku.
(https://docs.aws.amazon.com/bedrock/latest/APIReference/API_runtime_InvokeModel.html)
3. **IAM Role ARN**: The IAM Role ARN enables the platform to securely access resources on behalf of users without the need for long-term access keys, supporting cross-account access, least privilege principles, and enhanced auditing capabilities.
**Amazon STS API**: 
a. To assume an IAM role and obtain temporary security credentials, provide the AWS STS (Security Token Service) API endpoint, specifically the `AssumeRole` action. The STS API is essential for generating the temporary access key, secret key, and session token required to securely access AWS resources based on the permissions associated with the IAM role.
b. Ensure you have the correct endpoint URL for the `AssumeRole` action in the AWS region where your IAM role is located.
4. **Amazon Bedrock ARN**: The Amazon Resource Name (ARN) that grants your IAM role access to the specific Language Model in Amazon Bedrock. The ARN uniquely identifies the Language Model resource within the Amazon Bedrock service.
5. **Endpoint**: Provide the URL for interacting with the Language Model's API (required). For more information, click here 
6. **Headers**: Include any additional headers with metadata specific to your Language Model integration if needed. Headers can pass extra information or configuration options to the Language Model API.

**Step 2: Enter Integration Details and Test Credentials**
1. Enter the collected details from the previous step in the provided fields.
2. Click the "Test" button to validate the provided credentials. This step involves defining a complete JSON request, a structured format for sending data to the Language Model's API, to establish a connection with the Language Model.

**Step 3: Save Integration and Call to Amazon Bedrock**
1. After successfully validating the JSON request, click "Save" to store your Amazon Bedrock Language Model integration.
2. The XO Platform uses the collected IAM Role ARN to call the mentioned Amazon STS API. This then generates the temporary credentials that help Kore assume the required role. 
3. The Platform uses the Bedrock ARN to call the Large Langauge Model (LLM) API.
4. This API ensures secure access to the Language Models and establishes the connection with the Bedrock LLM.

**Step 4: Start Using Configured Models**
Once the integration is complete, you can use the configured Language Models across various features in the XO Platform by creating prompts for the configured models using the Prompts and Requests Library.

**Note:** Before starting the integration process, ensure you have the necessary permissions and access to the IAM role and Amazon Bedrock resources in your AWS account. For more details regarding the same, please refer link.(https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html) 

With these steps, you'll be able to harness the power of Amazon Bedrock's Language Models directly within the XO Platform, enabling you to create innovative and engaging AI-driven experiences for your users.

</container>
