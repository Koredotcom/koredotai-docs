---
title: OpenAI

permalink: platform/instructions/en/latest/Actions/openai

---

<container>

**Overview**

Connect OpenAI to generate answers and extract skills to perform various other actions.

The Kore.ai XO Platform allows you to integrate with OpenAI, enabling you to easily connect your OpenAI instance to fetch extract skills and generate answers as required.

</container>

<container>

**Authorization**
 
To connect to OpenAI, Kore.ai uses basic authentication. The user can use pre-authorized credentials provided by the developer during the configuration process or their own authorization profile during the configuration process to let the end user authorize during the conversation. Learn More.
 
 
 |Authorization Type                      | Basic |
 |----------------------------------------|-------|
 |Pre-authorize the Integration           |  Yes  |
 |Allow Users to Authorize the Integration|  Yes  |


**Pre-authorize the Integration**
 
 To make the integration process smoother for customers, you can pre-authorize it by providing the necessary authorization credentials to obtain the access token.

**Basic**
 
1. Provide API Key to authorize the integration.
2. Follow the steps below to get the required details from your OpenAI instance.
 
   a. To fetch the required details, navigate to https://beta.api.com/ 
     
      i.   Navigate to profile section.

      ii.  Click on View API Keys.

      iii. Navigate to User → API Keys.
 
           1. Click on Create new secret key.
           2. Copy the API Key into the Kore.ai XO Platform API Key field.
 
      iv.  Click **Enable** .
 
**Allow Users to Authorize the Integration**
 
This method requires the end user to provide credentials during the conversation for authorization.
 
**Basic**
 
1. Select **All Users to Authorize the Integration**.
2. Click **Select Authorization**.
3. Select **Create New**.
4. Select the type of authorization mechanism. 
 
   i. Select API Key
    
  ii. To fetch the required details, navigate to https://beta.api.com/ 
     
      i.   Navigate to profile section.

      ii.  Click on View API Keys.

      iii. Navigate to User → API Keys.
 
           1. Click on Create new secret key.
 
           2. Copy the API Key into the Kore.ai XO Platform API Key field.
 
5. Save **Authorization Profile**.
6. Select the created Authorization Profile to complete integration.
7. Click **Enable**.
 
 </container>
 
 <container>

**What can be achieved by integrating Service Now with the Kore.ai XO Platform?**
 
 The Kore.ai XO Platform supports all common actions on OpenAI with pre-built dialog templates that are ready to use. Click **Explore Templates**. Learn More.
 
**Templates Supported**

| Action           | Description            |
|------------------|------------------------|
|Extract Skills    |----|
|Generate Answer   |----|

</container>

