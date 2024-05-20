---
title: Hubspot

permalink: platform/instructions/en/latest/Actions/hubspot_INS

---

<base target="_blank">




**Authorization**
 
To connect to a Hubspot account, Kore.ai uses OAuth. The developer can use pre-authorized credentials during the configuration process or let the end user authorize during the conversation by creating an authorization profile. [Learn More](https://developers.hubspot.com/docs/api/overview)
 
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
 


