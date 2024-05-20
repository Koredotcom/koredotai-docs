---
title: Intercom

permalink: platform/instructions/en/latest/Actions/intercom_INS

---

<base target="_blank">




**Authorization**
 
To connect an Intercom account, Kore.ai uses OAuth 2.0 authentication. The user can use pre-authorized credentials provided by the developer during the configuration process or their own authorization profile during the configuration process to let the end user authorize during the conversation.
 
 |Authorization Type                      | OAuth - System | OAuth - Custom |
 |----------------------------------------|----------------|----------------|
 |Pre-authorize the Integration           |       Yes      |       Yes      |
 |Allow Users to Authorize the Integration|       Yes      |       Yes      |


**Pre-authorize the Integration**
 
 To make the integration process smoother for customers, you can pre-authorize it by providing the necessary authorization credentials to obtain the access token.

**OAuth - System**
 
 Enable the integration using Kore.ai's preconfigured Intercom app. 
 
1. Select System.
 
2. Click Authorize.
 
3. It will redirect you to the Intercom login page. 
 
4. Provide your credentials to connect with your Intercom account.
   Please note that you are allowing Kore.ai’s app to fetch the access token to complete the authorization.
 
5. Click Enable.
 
 
**OAuth - Custom**
 
 You can create your authorization profile to obtain an access token and use it to complete integration without using Kore.ai's Intercom app for authorization.
 
1. Select Custom.
 
2. Click Select Authorization.
 
3. Select Create New.
 
4. Select the type of authorization mechanism. 
 
   i.   Select oAuth v2.
 
   ii.  Navigate to https://app.intercom.com/a/apps/gv65iihh/developer-hub and log in.
 
   iii. Create an app by navigating to the https://app.intercom.com/a/apps/aqx7yrsl/developer-hub.
 
   iv.  Copy the ClientId from the app under the "Basic information" tab and paste it into the ClientId field to the Kore.ai platform.
 
   v.   Copy the Client secret from the app under the "Basic information" tab and paste it into the Client Secret field to the Kore.ai platform.
 
   vi.  Navigate to the Authentication tab in the app, click on "Edit" at the top-right. Enable the OAuth mode, by ticking the box "Use OAuth".

   vii. Copy the callback URL from the Kore.ai platform, add and paste it into the Redirect URL of Intercom.
 
   viii. All the scopes are added by default. Then save the Authentication details at the top-right corner of the page.

   ix. Copy the Authorization URL (https://app.intercom.com/oauth?client_id=****&state=****) and paste it into the Authorization URL field to the Kore.ai platform.

   x. Make sure to insert your client id and a random phrase for the state [Ex: abc, xyz, etc....] in the Auth URL.
  
   xi. Copy the Token Request URL (https://api.intercom.io/auth/eagle/token), paste it into the Token Request URL, and Refresh Token URL fields on the Kore.ai platform.
 
6. Save the Authorization Profile.
 
7. Select the created Authorization Profile to complete integration.
 
8. Click Authorize.
 
9. It will redirect you to the Intercom login page.
 
10. Provide your credentials to connect with your Intercom account. 
   Please note that you are allowing your custom app to fetch the access token to complete the authorization and not using Kore.ai’s Intercom app for the same.
 
11. Click Enable.
 
 
**Allow Users to Authorize the Integration**
 
This method requires the end user to provide credentials during the conversation for authorization.
 
**OAuth - System**
 
 This authorization process involves requesting permission for Kore.ai's Intercom app to access an access token at runtime.
 
1. Select System.
 
2. Click Enable.
 
3. Please note that a link will be sent to the end-user during the conversation to grant access to Kore.ai’s app to fetch the access token.
 
 **OAuth - Custom**
 
 You can create your authorization profile to obtain an access token and use it to complete integration without using Kore.ai's Intercom app for authorization.
 
1. Select Custom.
 
2. Click Select Authorization.
 
3. Select Create New.
 
4. Select the type of authorization mechanism.

    i.   Select oAuth v2.
 
   ii.  Navigate to https://app.intercom.com/a/apps/gv65iihh/developer-hub and log in.
 
   iii. Create an app by navigating to the https://app.intercom.com/a/apps/aqx7yrsl/developer-hub.
 
   iv.  Copy the ClientId from the app under the "Basic information" tab and paste it into the ClientId field to the Kore.ai platform.
 
   v.   Copy the Client secret from the app under the "Basic information" tab and paste it into the Client Secret field to the Kore.ai platform.
 
   vi.  Navigate to the Authentication tab in the app, click on "Edit" at the top-right. Enable the OAuth mode, by ticking the box "Use OAuth".

   vii. Copy the callback URL from the Kore.ai platform, add and paste it into the Redirect URL of Intercom.
 
   viii. All the scopes are added by default. Then save the Authentication details at the top-right corner of the page.

   ix. Copy the Authorization URL (https://app.intercom.com/oauth?client_id=****&state=****) and paste it into the Authorization URL field to the Kore.ai platform.

   x. Make sure to insert your client id and a random phrase for the state [Ex: abc, xyz, etc....] in the Auth URL.
  
   xi. Copy the Token Request URL (https://api.intercom.io/auth/eagle/token), paste it into the Token Request URL, and Refresh Token URL fields on the Kore.ai platform.
  
6. Save Authorization Profile.
 
7. Select the created Authorization Profile to complete integration.
 
8. Click Enable.
 

