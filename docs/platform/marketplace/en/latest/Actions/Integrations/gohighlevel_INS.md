---
title: GoHighLevel

permalink: platform/instructions/en/latest/Actions/goHighLevel_INS

---

<base target="_blank">




**Authorization**
 
To connect to a HighLevel account, Kore.ai uses OAuth. The developer can use pre-authorized credentials during the configuration process or let the end user authorize during the conversation by creating an authorization profile. [Learn More](https://highlevel.stoplight.io/docs/integrations/0443d7d1a4bd0-overview)
 
 |Authorization Type                      | OAuth - System | OAuth - Custom |
 |----------------------------------------|----------------|----------------|
 |Pre-authorize the Integration           |       No      |       Yes      |
 |Allow Users to Authorize the Integration|       No      |       Yes      |


**Pre-authorize the Integration**
 
 To make the integration process smoother for customers, you can pre-authorize it by providing the necessary authorization credentials to obtain the access token.

**OAuth - Custom**
 
 You can create your authorization profile to obtain an access token and use it to complete integration without using Kore.ai's HighLevel app for authorization.
 
1. Select **Custom**.
 
2. Click **Select Authorization**.
 
3. Select **Create New**.
 
4. Select the type of authorization mechanism. 
 
    i.  Select oAuth v2
 
   ii.  Navigate to **marketplace.gohighlevel.com** and log in
 
   iii.  Navigate to My Apps → select the app → select Advanced Settings → Click on Auth
 
   iv.  Copy Client Id from HighLevel into Client Id to Kore.ai platform
 
    v.  Copy Client secret from HighLevel into Client Secret to Kore.ai platform
 
   vi.  Copy Authorization URL (https://marketplace.leadconnectorhq.com/oauth/chooselocation)
 
   vii. Copy Token URL (https://services.leadconnectorhq.com/oauth/token)
 
   viii.  Add below scopes 
 
         1. contacts.readonly
 
         2. contacts.write
 
    ix. Copy Refresh Token URL (https://services.leadconnectorhq.com/oauth/token)
   
     x. Add Authorization Fields with Field Type **Querystring** and **Payload**, Field Key as **locationId** and the locationId value in Field Value (Please remove the locationId Querystring from the Authorization Field while using the 'Update Contact' action).
 
6. Save **Authorization Profile**.
 
7. Select the created Authorization Profile to complete integration.
 
8. Click **Authorize**.
 
9. It will redirect you to the HighLevel login page **https://marketplace.leadconnectorhq.com/oauth/chooselocation**. 
 
10. Provide your credentials to connect with your HighLevel account. 
   Please note that you are allowing your custom app to fetch the access token to complete the authorization and not using Kore.ai’s HighLevel app for the same.
 
11. Click **Enable**.
 
 
**Allow Users to Authorize the Integration**
 
This method requires the end user to provide credentials during the conversation for authorization.
 
 **OAuth - Custom**
 
 You can create your authorization profile to obtain an access token and use it to complete integration without using Kore.ai's HighLevel app for authorization.
 
1. Select **Custom**.
 
2. Click **Select Authorization**.
 
3. Select **Create New**.
 
4. Select the type of authorization mechanism. 
 
    i.  Select oAuth v2
 
   ii.  Navigate to **marketplace.gohighlevel.com** and log in
 
   iii.  Navigate to My Apps → select the app → select Advanced Settings → Click on Auth
 
   iv.  Copy Client Id from HighLevel into Client Id to Kore.ai platform
 
    v.  Copy Client secret from HighLevel into Client Secret to Kore.ai platform
 
   vi.  Copy Authorization URL (https://marketplace.leadconnectorhq.com/oauth/chooselocation)
 
   vii. Copy Token URL (https://services.leadconnectorhq.com/oauth/token)
 
   viii.  Add below scopes 
 
         1. contacts.readonly
 
         2. contacts.write
 
    ix. Copy Refresh Token URL (https://services.leadconnectorhq.com/oauth/token)
   
     x. Add Authorization Fields with Field Type **Querystring** and **Payload**, Field Key as **locationId** and the locationId value in Field Value (Please remove the locationId Querystring from the Authorization Field while using the 'Update Contact' action).
 
6. Save **Authorization Profile**.
 
7. Select the created Authorization Profile to complete integration.
 
8. Click **Enable**.
 
