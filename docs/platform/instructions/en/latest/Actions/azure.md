---
title: Azure

permalink: platform/instructions/en/latest/Actions/azure

---

<base target="_blank">
<container>

**Overview**

Connect Azure to generate answers and extract skills to perform various other actions.

The Kore.ai XO Platform allows you to integrate with Azure, enabling you to easily connect your Azure instance to fetch extract skills and generate answers as required.

</container>

<container>

**Authorization**
 
To connect to Azure, Kore.ai uses basic authentication. The user can use pre-authorized credentials provided by the developer during the configuration process or their own authorization profile during the configuration process to let the end user authorize during the conversation. Learn More.
 
 
 |Authorization Type                      | Basic |
 |----------------------------------------|-------|
 |Pre-authorize the Integration           |  Yes  |
 |Allow Users to Authorize the Integration|  Yes  |


**Pre-authorize the Integration**
 
 To make the integration process smoother for customers, you can pre-authorize it by providing the necessary authorization credentials to obtain the access token.

**Basic**
 
1. Provide API Key to authorize the integration.
2. Follow the steps below to get the required details from your Azure instance.
 
   a. To fetch the required details, navigate to [https://oai.azure.com/](https://oai.azure.com/)
     
      i.   Navigate to profile section.

      ii.  Click on View API Keys.

      iii. Navigate to User → API Keys.
 
           1. Click on Create new secret key.
 
           2. Copy the API Key.
 
           3. Paste the API key into API key field on Kore.ai XO Platform.
 
 3. Click Enable.
 
**Allow Users to Authorize the Integration**
 
This method requires the end user to provide credentials during the conversation for authorization.
 
**Basic**
 
1. Select All Users to Authorize the Integration.
 
2. Click Select Authorization.
 
3. Select Create New.
 
4. Select the type of authorization mechanism. 
 
   i.  Select API Key
 
   ii.  Provide a name for the authorization profile.
 
   iii.  Save Authorization Profile.
 
 5.  Click Enable.
 
 </container>
 
 <container>

**What can be achieved by integrating Azure with the Kore.ai XO Platform?**
 
 The Kore.ai XO Platform supports all common actions on Azure with pre-built dialog templates that are ready to use.
 
**Templates Supported**

| Action           | Description            |
|------------------|------------------------|
|Extract Skills    |Identify and extract specific skills or abilities from input data|
|Generate Answer   |Generate responses or answers based on input|

</container>

