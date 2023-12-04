---
title: Custom LLM

permalink: docs/platform/instructions/en/latest/Actions/custom_llm.md

---

<base target="_blank">
<container>

**Overview**
 
The Custom LLM feature of the XO Platform allows you to integrate with Large Language Models of your choice. You can connect with the models that are hosted by external providers or with the ones that you have privately hosted.  

With the Custom LLM feature, you gain full control over the integration approach and prompt design. You can also choose the features that you would like to use with the Custom LLMs. This allows you to establish connections and optimize your interactions with large language models, thereby bypassing the XO Platform's standardized integrations while maintaining the ability to switch between quick start-up and deeper customization based on your evolving requirements.

</container>

<container>

**Configuration**
 
To connect to the integrations incorporated under custom LLM, Kore.ai uses different authentication methods. The users are expected to provide the below required information to use the custom models.

**Integration Name**: Provide a name to identify the provider or group of Large Language Models you want to integrate with. This is a **mandatory** field.
**Model Name**: Provide a name for the Large Language Model connected using the above mentioned integration. You can add more than one model with the same endpoint. This is a **mandatory** field.
**Endpoint**: Provide the URL that connects to the interface for interacting with the LLM's capabilities through API requests. This is a **mandatory** field.
**Auth**: Select or create an authorization profile for the custom LLM's use. You can either create a new authentication type from the available options and provide the required information, or you can directly add tokens to the header/JSON body.
**Headers**: Provide additional information to be sent with the request to the Endpoint URL for connecting to the LLM. It contains metadata that provides useful context about the request itself.

After providing all the required information mentioned above, click the **Test** button to begin the testing process. During this phase, you will be prompted to define the complete JSON request to establish a connection with the Language Model. Once the JSON request has been successfully validated, click on **Save** to store your custom LLM integration for future reference and use.

</container>
