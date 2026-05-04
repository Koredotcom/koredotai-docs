---
title: Amazon Bedrock
permalink: platform/instructions/en/latest/Actions/amazon_bedrock
---

<base target="_blank">
<container>

**Overview**

Amazon Bedrock provides access to a wide range of advanced language models. Users can evaluate the models and choose the right model for their use cases. This integration allows the users to use any of the models on Bedrock for the Co-pilot and Dynamic Conversations features of the XO Platform.

**Understanding model invocation on Amazon Bedrock**

Amazon Bedrock supports two distinct ways to invoke models, depending on when the model was onboarded. Choosing the correct **Model ID** (and thus **Endpoint**) is required for the integration to work.

| Type | Description | When to use |
|------|-------------|-------------|
| **Direct on-demand** | Older models with dedicated single-region capacity. You call them using the base model ID only . | Use for models that do not require an inference profile (see AWS documentation). |
| **Cross-region inference profile** | Newer models that are only available through AWS inference profiles. You must use a prefixed model ID for Bedrock to route the request across regions. | Use for newer models (e.g. Claude Sonnet 4.5, Claude Opus 4.x) where the base model ID returns a ValidationException. |

**Why the prefix matters**

- **Direct on-demand:** No prefix. Example model ID: `anthropic.claude-3-5-sonnet-20241022-v2:0`
- **Inference profile:** Use a **regional prefix** in the model ID. Supported prefixes: **`us.`** (US region group, e.g. us-east-1, us-west-2), **`eu.`** (Europe), **`apac.`** (Asia Pacific), **`global.`** (all commercial regions).

If you use the base model ID for a model that only supports inference profiles, Bedrock returns a **ValidationException** stating that on-demand throughput is not supported and an inference profile should be used. Updating the model ID to the prefixed form (e.g. `us.anthropic.claude-sonnet-4-5-20250929-v1:0`) is the correct, AWS-recommended fix.

**Examples by model type**

**Example 1 — Cross-region inference profile (e.g. Claude Sonnet 4.5)**  
Use a prefixed model ID and the matching regional runtime endpoint.

| Field | Value |
|-------|--------|
| **Model ID** | `us.anthropic.claude-sonnet-4-5-20250929-v1:0` |
| **Endpoint** | `https://bedrock-runtime.us-east-1.amazonaws.com/model/us.anthropic.claude-sonnet-4-5-20250929-v1:0/invoke` |
| **Sample request body** | `{"modelId":"us.anthropic.claude-sonnet-4-5-20250929-v1:0","contentType":"application/json","accept":"application/json","body":"{\"anthropic_version\": \"bedrock-2023-05-31\", \"max_tokens\": 1000, \"messages\": [{\"role\": \"user\",\"content\": [{\"type\": \"text\",\"text\": \" what is the capital of Australia? \"}]}]}"}` |

**Example 2 — Direct on-demand (e.g. Claude 3 Haiku)**  
Use the base model ID with no prefix.

| Field | Value |
|-------|--------|
| **Model ID** | `anthropic.claude-3-haiku-20240307-v1:0` |
| **Endpoint** | `https://bedrock-runtime.us-east-1.amazonaws.com/model/anthropic.claude-3-haiku-20240307-v1:0/invoke` |
| **Sample request body** | `{"modelId":"anthropic.claude-3-haiku-20240307-v1:0","contentType":"application/json","accept":"application/json","body":"{\"anthropic_version\": \"bedrock-2023-05-31\", \"max_tokens\": 1000, \"messages\": [{\"role\": \"user\",\"content\": [{\"type\": \"text\",\"text\": \" what is the capital of Australia? \"}]}]}"}` |

When configuring a new model, check the [AWS inference profiles documentation](https://docs.aws.amazon.com/bedrock/latest/userguide/inference-profiles-support.html) to see whether that model uses a direct model ID or an inference profile ID (with `us.`, `eu.`, `apac.`, or `global.`).

**Configuration**

Follow these step-by-step instructions to integrate Amazon Bedrock's Language Models with the XO Platform:

**Step 1: Gather Required Information**

Before you begin setting up the integration, ensure you have the following information:

1. **Provider Name**: Choose a name to identify the group of Language Models you want to connect (required).  
   Example: If you are connecting to Anthropic Claude-3 through Bedrock, you can name it Bedrock Anthropic.

2. **Model Name**: Give a unique name to the Language Model you're connecting (required).  
   Example: If you connect to Haiku, the model name can be Haiku.  
   Reference: [InvokeModel API](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_runtime_InvokeModel.html)

3. **IAM Role ARN**: The IAM Role ARN enables the platform to securely access resources on behalf of users without the need for long-term access keys, supporting cross-account access, least privilege principles, and enhanced auditing capabilities.  
   **Amazon STS API:**  
   a. To assume an IAM role and obtain temporary security credentials, provide the AWS STS (Security Token Service) API endpoint, specifically the `AssumeRole` action. The STS API is essential for generating the temporary access key, secret key, and session token required to securely access AWS resources based on the permissions associated with the IAM role.  
   b. Ensure you have the correct endpoint URL for the `AssumeRole` action in the AWS region where your IAM role is located.

4. **Amazon Bedrock ARN**: The Amazon Resource Name (ARN) that grants your IAM role access to the specific Language Model in Amazon Bedrock. The ARN uniquely identifies the Language Model resource within the Amazon Bedrock service.

5. **Endpoint**: Provide the URL for interacting with the Language Model's API (required). Use the **correct model ID** in the URL: for newer models use the inference profile ID (e.g. `us.anthropic.claude-sonnet-4-5-20250929-v1:0`); for older models use the base model ID. See **Examples by model type** above and the [AWS inference profiles page](https://docs.aws.amazon.com/bedrock/latest/userguide/inference-profiles-support.html).

6. **Headers**: Include any additional headers with metadata specific to your Language Model integration if needed. Headers can pass extra information or configuration options to the Language Model API.

**Step 2: Enter Integration Details and Test Credentials**

1. Enter the collected details from the previous step in the provided fields.
2. Click the "Test" button to validate the provided credentials. This step involves defining a complete JSON request, a structured format for sending data to the Language Model's API, to establish a connection with the Language Model.

**Step 3: Save Integration and Call to Amazon Bedrock**

1. After successfully validating the JSON request, click "Save" to store your Amazon Bedrock Language Model integration.
2. The XO Platform uses the collected IAM Role ARN to call the mentioned Amazon STS API. This then generates the temporary credentials that help Kore assume the required role.
3. The Platform uses the Bedrock ARN to call the Large Language Model (LLM) API.
4. This API ensures secure access to the Language Models and establishes the connection with the Bedrock LLM.

**Step 4: Start Using Configured Models**

Once the integration is complete, you can use the configured Language Models across various features in the XO Platform by creating prompts for the configured models using the Prompts and Requests Library.

**Note:** Before starting the integration process, ensure you have the necessary permissions and access to the IAM role and Amazon Bedrock resources in your AWS account. For more details, see [IAM access policies](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html).

With these steps, you'll be able to harness the power of Amazon Bedrock's Language Models directly within the XO Platform, enabling you to create innovative and engaging AI-driven experiences for your users.

</container>
