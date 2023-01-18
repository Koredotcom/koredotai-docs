---
title: Hubspot

permalink:docs/platform/instructions/ja/latest/Actions/hubspot

---

<base target="_blank">
<container>

**Overview**

Connect your Hubspot Instance with the Kore.ai XO Platform to power your conversations to create/update: deals/contacts, and other actions.

The Kore.ai XO Platform allows you to integrate with Hubspot using OAuth, enabling you to connect your Hubspot instance easily. With this integration, you can create deals, update contacts, and perform many more actions within Hubspot.


</container>

<container>

**Authorization**
 
To connect to a Hubspot account, Kore.ai uses OAuth. The developer can use pre-authorized credentials during the configuration process or let the end user authorize during the conversation by creating an authorization profile. Learn More.
 
 |Authorization Type                      | OAuth - System | OAuth - Custom |
 |----------------------------------------|----------------|----------------|
 |Pre-authorize the Integration           |       Yes      |       Yes      |
 |Allow Users to Authorize the Integration|       Yes      |       Yes      |


**Pre-authorize the Integration**
 
 To make the integration process smoother for customers, you can pre-authorize it by providing the necessary authorization credentials to obtain the access token.

**OAuth - System**
 
 Enable the integration using Kore.ai's preconfigured Hubspot app. 
 
1. Select **System**.
 
2. Click **Authorize**.
 
3. It will redirect you to the Hubspot login page **app.hubspot.com**.
 
4. Provide your credentials to connect with your Hubspot account.
   Please note that you are allowing Kore.ai’s app to fetch the access token to complete the authorization.
 
5. Click **Enable**.
 
 
**OAuth - Custom**
 
 You can create your authorization profile to obtain an access token and use it to complete integration without using Kore.ai's Hubspot app for authorization.
 
1. Select **Custom**.
 
2. Click **Select Authorization**.
 
3. Select **Create New**.
 
4. Select the type of authorization mechanism. 
 
    i.  Select oAuth v2
 
   ii.  Navigate to **app.hubspot.com** and log in 
 
   iii.  Navigate to Apps → select the app → Click on Auth
 
   iv.  Copy Client Id from Hubspot into Client Id to Kore.ai platform
 
    v.  Copy Client secret from Hubspot into Client Secret to Kore.ai platform
 
   vi.  Copy Authorization URL (https://app.hubspot.com/oauth/authorize)
 
   vii. Copy Token URL (https://api.hubapi.com/oauth/v1/token)
 
   viii.  Add below scopes 
 
         1. crm.objects.deals.read
 
         2. crm.objects.deals.write 
 
         3. crm.objects.contacts.read 
  
         4. Crm.objects.contacts.write
 
    ix. Copy Refresh Token URL (https://api.hubapi.com/oauth/v1/token)
 
5. Save **Authorization Profile**.
 
6. Select the created Authorization Profile to complete integration.
 
7. Click **Authorize**.
 
8. It will redirect you to the Hubspot login page **app.hubspot.com**. 
 
9. Provide your credentials to connect with your Hubspot account. 
   Please note that you are allowing your custom app to fetch the access token to complete the authorization and not using Kore.ai’s Hubspot app for the same.
 
10. Click **Enable**.
 
 
**Allow Users to Authorize the Integration**
 
This method requires the end user to provide credentials during the conversation for authorization.
 
**OAuth - System**
 
 This authorization process involves requesting permission for Kore.ai's Hubspot app to access an access token at runtime.
 
1. Select **System**.
 
2. Click **Enable**.
 
3. Please note that a link will be sent to the end-user during the conversation to grant access to Kore.ai’s app to fetch the access token.
 
 **OAuth - Custom**
 
 You can create your authorization profile to obtain an access token and use it to complete integration without using Kore.ai's Hubspot app for authorization.
 
1. Select **Custom**.
 
2. Click **Select Authorization**.
 
3. Select **Create New**.
 
4. Select the type of authorization mechanism. 
 
    i.  Select oAuth v2
 
   ii.  Navigate to **app.hubspot.com** and log in 
 
   iii.  Navigate to Apps → select the app → Click on Auth
 
   iv.  Copy Client Id from Hubspot into Client Id to Kore.ai platform
 
    v.  Copy Client secret from Hubspot into Client Secret to Kore.ai platform
 
   vi.  Copy Authorization URL (https://app.hubspot.com/oauth/authorize)
 
   vii. Copy Token URL (https://api.hubapi.com/oauth/v1/token)
 
   viii.  Add below scopes 
 
         1. crm.objects.deals.read
 
         2. crm.objects.deals.write 
 
         3. crm.objects.contacts.read 
  
         4. Crm.objects.contacts.write
 
    ix. Copy Refresh Token URL (https://api.hubapi.com/oauth/v1/token)
 
5. Save **Authorization Profile**.
 
6. Select the created Authorization Profile to complete integration.
 
7. Click **Enable**.
 
</container>

<container>

**What can be achieved by integrating Hubspot CRM with the Kore.ai XO Platform?**
 
The Kore.ai XO Platform supports all common actions on Hubspot with pre-built dialog templates that are ready to use. 
 
**Templates Supported**

| Action           | Description            |
|------------------|------------------------|
|Create Deal|Add a new business agreement|
|Get Deal By ID |View a specific business agreement by ID|
|List all Deals          |See a list of all business agreements|
|Update Deal     |Edit an existing business agreement|
|Delete Deal       |Remove a business agreement|
|Search Deal      |Find a business agreement using specific criteria|
|Create Contact|Add a new person or business to your contact list|
|Get Contact By ID       |View a specific contact|
|List all contacts      |See a list of all contacts|
|Update Contact |Edit an existing contact|
|Search Contact       |Find a contact using specific criteria|
|Delete Contact  |Remove a contact from your list|

</container>

