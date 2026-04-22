---
title: Anthropic

permalink: platform/instructions/en/latest/Actions/anthropic

---

<base target="_blank">
<container>

**Overview**

Anthropic develops Claude, a family of advanced LLMs for natural language understanding and generation. The Kore.ai XO Platform integrates with Claude models to power Generative AI features within the platform.

**Supported models**

- Claude Opus 4.6  
- Claude Sonnet 4.6 / 4.5  
- Claude Opus 4.5  
- Claude Haiku 4.5  

</container>

<container>

**Authorization**

To connect to Anthropic, Kore.ai uses API key authentication. API requests require the headers below. Access to Anthropic’s API keys is limited to members of an organization that has registered and been approved for API access.

**Prerequisites**

- Access to Anthropic Console  
- Organization approved for Anthropic API access  
- Permission to generate API keys  

**Authentication type: API Key**
**Required headers**

- `x-api-key: <YOUR_API_KEY>`  
- `anthropic-version: 2023-06-01`  
- `Content-Type: application/json`  

**Authorization behavior (important)**

- API keys are **not stored in backend configurations**  
- Keys must be provided **at runtime or via secure external mechanisms**  
- Persistent or pre-authorized storage is **not supported**  

**Implications**

- Users may need to **re-enter API keys when required**  
- This reduces risk of **long-term credential storage**  


**API key setup**

1. Log in to Anthropic Console  
2. Go to **API Keys → Create Key**  
3. Copy and use the key in integration setup  

**Reference: [Anthropic API Getting Started Guide](https://docs.anthropic.com/claude/reference/getting-started-with-the-api)**



</container>
