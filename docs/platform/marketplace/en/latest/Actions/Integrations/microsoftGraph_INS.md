---
title: Microsoft Graph

permalink: platform/marketplace/en/latest/Actions/Integrations/microsoftGraph_INS

---

<base target="_blank">
<container>

**Overview**

Connect your Microsoft Graph with the Kore.ai XO Platform to enhance your conversations and enable the creation of events, lists.


</container>

<container>

**Authorization**
 
To connect to a Microsoft Graph account, Kore.ai uses OAuth 2.0 authentication. The user can use pre-authorized credentials provided by the developer during the configuration process or their own authorization profile during the configuration process to let the end user authorize during the conversation. Learn More.
 
 |Authorization Type                      | OAuth - System | OAuth - Custom |
 |----------------------------------------|----------------|----------------|
 |Pre-authorize the Integration           |       Yes      |       Yes      |
 |Allow Users to Authorize the Integration|       Yes      |       Yes      |


**Pre-authorize the Integration**
 
 To make the integration process smoother for customers, you can pre-authorize it by providing the necessary authorization credentials to obtain the access token.

**OAuth - System**
 
 Enable the integration using Kore.ai's preconfigured Microsoft Graph app. 
 
1. Select System.
 
2. Click Authorize.
 
3. It will redirect you to the Microsoft Graph login page.
 
4. Provide your credentials to connect with your Microsoft Graph account.
   Please note that you are allowing Kore.ai’s app to fetch the access token to complete the authorization.
 
5. Click Enable.
 
 
**OAuth - Custom**
 
 You can create your authorization profile to obtain an access token and use it to complete integration without using Kore.ai's Microsoft Graph app for      authorization.
 
1. Select Custom.
 
2. Click Select Authorization.
 
3. Select Create New.
 
4. Select the type of authorization mechanism. 
 
    i.   Select oAuth v2.
 
    ii.  Navigate to https://portal.azure.com and log in. 
 
    iii. Navigate to Azure Directory → Manage → App Registrations  → Select App. 
 
    iv.  Copy Client Id from Microsoft Graph into Client Id field to Kore.ai platform.
 
     v.  Copy Secret Id from Microsoft Graph into Client Secret field to Kore.ai platform.
 
    vi.  Copy Authorization URL (https://login.microsoftonline.com/common/oauth2/v2.0/authorize).
 
   vii.  Copy Token URL (https://login.microsoftonline.com/common/oauth2/v2.0/token).
 
   viii.  Add below scopes
 
       1. email

       2. Mail.ReadWrite 

       3. Mail.Send

       4. offline_access

       5. openid

       6. profile

       7. User.Read

       8. Tasks.ReadWrite 

       9. Calendars.ReadWrite

       10. MailboxSettings.Read
  
     ix.  Copy Refresh Token URL (https://login.microsoftonline.com/common/oauth2/v2.0/token).
 
5. Save Authorization Profile.
 
6. Select the created Authorization Profile to complete integration.
 
7. Click Authorize.
 
8. It will redirect you to the Microsoft Graph login page.
 
9. Provide your credentials to connect with your Microsoft Graph account. 
   Please note that you are allowing your custom app to fetch the access token to complete the authorization and not using Kore.ai’s Microsoft Graph app for the same.
 
10. Click Enable.
 
 
**Allow Users to Authorize the Integration**
 
This method requires the end user to provide credentials during the conversation for authorization.
 
**OAuth - System**
 
 This authorization process involves requesting permission for Kore.ai's Microsoft Graph app to access an access token at runtime.
 
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
 
    ii.  Navigate to https://portal.azure.com and log in. 
 
    iii. Navigate to Azure Directory → Manage → App Registrations  → Select App. 
 
    iv.  Copy Client Id from Microsoft Graph into Client Id field to Kore.ai platform.
 
     v.  Copy Secret Id from Microsoft Graph into Client Secret field to Kore.ai platform.
 
    vi.  Copy Authorization URL (https://login.microsoftonline.com/common/oauth2/v2.0/authorize).
 
   vii.  Copy Token URL (https://login.microsoftonline.com/common/oauth2/v2.0/token).
 
   viii.  Add below scopes
 
       1. email

       2. Mail.ReadWrite 

       3. Mail.Send

       4. offline_access

       5. openid

       6. profile

       7. User.Read

       8. Tasks.ReadWrite 

       9. Calendars.ReadWrite

       10. MailboxSettings.Read
  
     ix.  Copy Refresh Token URL (https://login.microsoftonline.com/common/oauth2/v2.0/token).
 
5. Save Authorization Profile.
 
6. Select the created Authorization Profile to complete integration.
 
6. Click Enable.
 
</container>

<container>

**What can be achieved by integrating Microsoft Graph with the Kore.ai XO Platform?**
 
The Kore.ai XO Platform supports all common actions on Microsoft Graph objects with pre-built dialog templates that are ready to use.
 
**Templates Supported**

| Action           | Description            |
|------------------|------------------------|
|List All Events   |Retrieves a list of all events from a user's calendar|
|List All To do Lists |Retrieves a list of all to-do lists from a user's Microsoft To-Do account|
|Create a To do List  |Create a new to-do list in a user's Microsoft To-Do account|
|Create an Event     |Create a new event in a user's calendar|
|Send a Mail       |Send an email from a user's account|

</container>
