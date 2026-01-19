---
title: Google Gemini

permalink: platform/instructions/en/latest/Actions/gemini

---

<base target="_blank">
<container>

**Overview**

Integrate Google Gemini with the Kore.ai XO Platform to unlock advanced generative capabilities. This integration allows you to leverage Gemini’s power to automate complex content generation, extract actionable insights, and deliver more intelligent, context-aware responses directly within your AI assistants.


</container>

<container>

**Authorization**
 
To connect to Google Gemini, Kore.ai uses API Key authentication. The user can use pre-authorized credentials provided by the developer during the configuration process or their own authorization profile during the configuration process to let the end user authorize during the conversation. [Learn more](https://ai.google.dev/api)
 
 
 |Authorization Type                      | Basic |
 |----------------------------------------|-------|
 |Pre-authorize the Integration           |  Yes  |
 |Allow Users to Authorize the Integration|  Yes  |


**Pre-authorize the Integration**
 
To make the integration process smoother for customers, you can pre-authorize it by providing the necessary authorization credentials to obtain the access token.

**Basic**
 
1. Provide API Key to authorize the integration.
2. Follow the steps below to get the required details from your Google Gemini instance via Google AI Studio.
 
   a. To fetch the required details, navigate to [https://aistudio.google.com/](https://aistudio.google.com/)
     
    i.   Sign in with your Google Account.

    ii.  Click on Get API key in the left sidebar. 

    iii. Navigate to the API Keys section

    iv. Click on Create API key.

    v. Select Create API key in new project (or an existing project if preferred).

    vi. Copy the generated API Key.

    vii. Paste the API key into the API Key field on the Kore.ai XO Platform.
 
 4. Click Enable.
 

 
**Allow Users to Authorize the Integration**
 
This method requires the end user to provide credentials during the conversation for authorization.
 
**Basic**
 
1. Select All Users to Authorize the Integration.
 
2. Click Select Authorization.
 
3. Select Create New.
 
4. Select the type of authorization mechanism. 
 
    i. Select API Key
   
    ii. Provide a name for the authorization profile (e.g., User Gemini Key)
    
    iii. Save Authorization Profile.
 
8. Click Enable.

</container>
