---
title: Anthropic
permalink: platform/instructions/en/latest/Actions/anthropic
---

<base target="_blank">

<container>

## Overview

Anthropic develops Claude, a family of advanced LLMs for natural language understanding and generation. The Kore.ai XO Platform integrates with Claude models to power Generative AI features within the platform.

### Supported Models

- Claude Opus 4.6  
- Claude Sonnet 4.6 / 4.5  
- Claude Opus 4.5  
- Claude Haiku 4.5  

</container>

<container>

## Prerequisites & Authorization

- Access to Anthropic Console  
- Organization approved for Anthropic API access  
- Permission to generate API keys  

### Authentication Type: API Key

### Required Headers

- `x-api-key: <YOUR_API_KEY>`  
- `anthropic-version: 2023-06-01`  
- `Content-Type: application/json`  

</container>

<container>

## Authorization Behavior (Important)

- API keys are **not stored in backend configurations**  
- Keys must be provided **at runtime or via secure external mechanisms**  
- Persistent/pre-authorized storage is **not supported**  

### Implications

- Users may need to **re-enter API keys when required**  
- Reduces risk of **long-term credential storage**  

</container>

<container>

## API Key Setup

1. Log in to Anthropic Console  
2. Go to **API Keys → Create Key**  
3. Copy and use the key in integration setup  

### Reference

[Anthropic API Getting Started Guide](https://docs.anthropic.com/claude/reference/getting-started-with-the-api)

</container>

