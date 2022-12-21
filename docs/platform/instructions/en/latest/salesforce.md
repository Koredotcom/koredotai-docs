---
title: Salesforce

permalink: platform/instructions/en/latest/salesforce

---

<container>

**Overview**

Connect your Salesforce CRM with the Kore.ai XO Platform to enhance your conversations and enable the creation of leads, opportunities, and other functions.

The Kore.ai XO Platform allows you to integrate with Salesforce CRM using OAuth, enabling you to easily connect your Salesforce CRM instance. With this integration, you can create, update, and perform more actions on the various objects within the CRM.


</container>

<container>

**Authorization**
 
To connect to a client's Salesforce account, Kore.ai uses OAuth 2.0 authentication. The user can use pre-authorized credentials provided by the developer during the configuration process or their own authorization profile during the configuration process to let the end user authorize during the conversation. Learn More.
 
 |Authorization Type                      | OAuth - System | OAuth - Custom |
 |----------------------------------------|----------------|----------------|
 |Pre-authorize the Integration           |       Yes      |       Yes      |
 |Allow Users to Authorize the Integration|       Yes      |       Yes      |


**Pre-authorize the Integration**
 
 To make the integration process smoother for customers, you can pre-authorize it by providing the necessary authorization credentials to obtain the access token.

**OAuth - System**
 
 Enable the integration using Kore.ai's preconfigured Salesforce app. 
 
1. Select **System**.
2. Click **Authorize**.
3. It will redirect you to the Salesforce login page **login.salesfore.com**. 
4. Provide your credentials to connect with your Salesforce account.
   Please note that you are allowing Kore.ai’s app to fetch the access token to complete the authorization.
5. Click **Enable**.
 
 ![gif](/koredotai-docs/images/Salesforce%20video%20for%20GIF.gif)
 
**OAuth - Custom**
 
 You can create your authorization profile to obtain an access token and use it to complete integration without using Kore.ai's Salesforce app for authorization.
 
1. Select **Custom**.
2. Click **Select Authorization**.
3. Select **Create New**.
4. Select the type of authorization mechanism. 
5. Save **Authorization Profile**.
6. Select the created Authorization Profile to complete integration.
7. Click **Authorize**.
8. It will redirect you to the Salesforce login page **login.salesfore.com**. 
9. Provide your credentials to connect with your Salesforce account. 
   Please note that you are allowing your custom app to fetch the access token to complete the authorization and not using Kore.ai’s Salesforce app for the same.
10. Click **Enable**.
 
 
**Allow Users to Authorize the Integration**
 
This method requires the end user to provide credentials during the conversation for authorization.
 
**OAuth - System**
 
 This authorization process involves requesting permission for Kore.ai's Salesforce app to access an access token at runtime.
 
1. Select **System**.
2. Click **Enable**.
3. Please note that a link will be sent to the end-user during the conversation to grant access to Kore.ai’s app to fetch the access token.
 
 **OAuth - Custom**
 
 You can create your authorization profile to obtain an access token and use it to complete integration without using Kore.ai's Salesforce app for authorization.
 
1. Click **Select Authorization**.
2. Select **Create New**.
3. Select the type of authorization mechanism. 
4. Save **Authorization Profile**.
5. Select the created Authorization Profile to complete integration.
6. Click **Enable**.

**What can be achieved by integrating Salesforce CRM with the Kore.ai XO Platform?**
 
The Kore.ai XO Platform supports all common actions on Salesforce objects with pre-built dialog templates that are ready to use. Click Explore Templates. Learn More.
 
**Templates Supported**

| Action           | Description            |
|------------------|------------------------|
|Create Lead       |------------------------|
|Update Lead       |------------------------|
|Get Lead          |------------------------|
|Get All Leads     |------------------------|
|Delete Lead       |------------------------|
|Search Leads      |------------------------|
|Create Opportunity|------------------------|

</container>

