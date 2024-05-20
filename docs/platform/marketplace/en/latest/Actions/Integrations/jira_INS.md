---
title: Jira

permalink: platform/instructions/en/latest/Actions/jira_INS

---

<base target="_blank">




**Authorization**
 
To connect to a Jira account, Kore.ai uses OAuth 2.0 authentication. The user can use pre-authorized credentials provided by the developer during the configuration process or their own authorization profile during the configuration process to let the end user authorize during the conversation. Learn More.
 
 |Authorization Type                      | OAuth - System | OAuth - Custom |
 |----------------------------------------|----------------|----------------|
 |Pre-authorize the Integration           |       Yes      |       Yes      |
 |Allow Users to Authorize the Integration|       Yes      |       Yes      |


**Pre-authorize the Integration**
 
 To make the integration process smoother for customers, you can pre-authorize it by providing the necessary authorization credentials to obtain the access token.

**OAuth - System**
 
 Enable the integration using Kore.ai's preconfigured Jira app. 
 
1. Select System.
 
2. Click Authorize.
 
3. It will redirect you to the Jira login page. 
 
4. Provide your credentials to connect with your Jira account.
   Please note that you are allowing Kore.ai’s app to fetch the access token to complete the authorization.
 
5. Click Enable.
 
 
**OAuth - Custom**
 
 You can create your authorization profile to obtain an access token and use it to complete integration without using Kore.ai's Jira app for authorization.
 
1. Select Custom.
 
2. Click Select Authorization.
 
3. Select Create New.
 
4. Select the type of authorization mechanism. 
 
   i.   Select oAuth v2.
 
   ii.  Navigate to https://developer.atlassian.com/ and log in.
 
   iii. Create an app and navigate to the app settings.
 
   iv.  Copy the ClientId from the app and paste it into the ClientId field to the Kore.ai platform.
 
   v.   Copy the Client secret from the app and paste it into the Client Secret field to the Kore.ai platform
 
   vi.  Navigate to the Authorization tab in the app, click on Configure, Copy the callback URL from the Kore.ai platform, and paste it into the Callback URL of the JIRA 
        app.

   vii. Click on "Add APIS" to your app displayed under "Authorization URL generator" and navigate to the permissions screen.
 
   viii. Add the "JIRA API" and click on Configure "JIRA API" to navigate to the Scopes screen.

   ix. Click on Edit Scopes for "Jira platform REST API", select all the scopes. Also add the "offline_access" scope to the list of scopes and save it.

   x. Copy the Authorization URL (https://auth.atlassian.com/authorize?audience=api.atlassian.com) and paste it into the Authorization URL field to the Kore.ai platform.
  
   xi. Copy the Token URL (https://auth.atlassian.com/oauth/token), paste it into the Token Request URL, and Refresh Token URL fields on the Kore.ai platform.
 
6. Save the Authorization Profile.
 
7. Select the created Authorization Profile to complete integration.
 
8. Click Authorize.
 
9. It will redirect you to the Jira login page.
 
10. Provide your credentials to connect with your Jira account. 
   Please note that you are allowing your custom app to fetch the access token to complete the authorization and not using Kore.ai’s Jira app for the same.
 
11. Click Enable.
 
 
**Allow Users to Authorize the Integration**
 
This method requires the end user to provide credentials during the conversation for authorization.
 
**OAuth - System**
 
 This authorization process involves requesting permission for Kore.ai's Jira app to access an access token at runtime.
 
1. Select System.
 
2. Click Enable.
 
3. Please note that a link will be sent to the end-user during the conversation to grant access to Kore.ai’s app to fetch the access token.
 
 **OAuth - Custom**
 
 You can create your authorization profile to obtain an access token and use it to complete integration without using Kore.ai's Salesforce app for authorization.
 
1. Select Custom.
 
2. Click Select Authorization.
 
3. Select Create New.
 
4. Select the type of authorization mechanism.

   i.   Select oAuth v2.
   
   ii.  Navigate to https://developer.atlassian.com/ and log in.
 
   iii. Create an app and navigate to the app settings.
 
   iv.  Copy the ClientId from the app and paste it into the ClientId field to the Kore.ai platform.
 
   v.   Copy the Client secret from the app and paste it into the Client Secret field to the Kore.ai platform
 
   vi.  Navigate to the Authorization tab in the app, click on Configure, Copy the callback URL from the Kore.ai platform, and paste it into the Callback URL of the JIRA 
        app.

   vii. Click on "Add APIS" to your app displayed under "Authorization URL generator" and navigate to the permissions screen.
 
   viii. Add the "JIRA API" and click on Configure "JIRA API" to navigate to the Scopes screen.

   ix. Click on Edit Scopes for "Jira platform REST API", select all the scopes, and save it.

   x. Copy the Authorization URL (https://auth.atlassian.com/authorize?audience=api.atlassian.com) and paste it into the Authorization URL field to the Kore.ai platform.
  
   xi. Copy the Token URL (https://auth.atlassian.com/oauth/token), paste it into the Token Request URL, and Refresh Token URL fields on the Kore.ai platform.
  
6. Save Authorization Profile.
 
7. Select the created Authorization Profile to complete integration.
 
8. Click Enable.
 



