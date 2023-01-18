---
title: Jira

permalink: platform/instructions/en/latest/Actions/jira

---

<base target="_blank">
<container>

**Overview**

Connect your Jira with the Kore.ai XO Platform to enhance your conversations and enable the creation, deletion, updation of issues and many more actions.

The Kore.ai XO Platform allows you to integrate with Jira using OAuth, enabling you to easily connect your Jira instance. With this integration, you can create, update, and perform more actions on the various objects within Jira.


</container>

<container>

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
 
   ii.   Navigate to https://auth.atlassian.com/ and log in.
 
   iii.  Navigate to Settings 
 
   iv.   Copy Client Id from Jira into Client Id field to Kore.ai platform.
 
   v.   Copy Client secret from Jira into Client Secret field to Kore.ai platform.
 
   vi.   Copy Authorization URL (https://auth.atlassian.com/authorize?audience=api.atlassian.com).
 
   vii.  Copy Token URL (https://auth.atlassian.com/oauth/token).
 
   viii.   Add below scopes
 
      1. write:jira-work 
 
      2. read:jira-work  
 
      3. manage:jira-project 
  
      4. manage:jira-configuration 
  
      5. read:jira-user 
  
      6. offline_access
  
   ix.   Copy Refresh Token URL (https://auth.atlassian.com/oauth/token).
 
5. Save Authorization Profile.
 
6. Select the created Authorization Profile to complete integration.
 
7. Click Authorize.
 
8. It will redirect you to the Jira login page.
 
9. Provide your credentials to connect with your Jira account. 
   Please note that you are allowing your custom app to fetch the access token to complete the authorization and not using Kore.ai’s Jira app for the same.
 
10. Click Enable.
 
 
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
 
   ii.   Navigate to https://auth.atlassian.com/ and log in.
 
   iii.  Navigate to Settings 
 
   iv.   Copy Client Id from Jira into Client Id field to Kore.ai platform.
 
    v.   Copy Client secret from Jira into Client Secret field to Kore.ai platform.
 
   vi.   Copy Authorization URL (https://auth.atlassian.com/authorize?audience=api.atlassian.com).
 
   vii.  Copy Token URL (https://auth.atlassian.com/oauth/token).
 
   viii.   Add below scopes
 
      1. write:jira-work 
 
      2. read:jira-work  
 
      3. manage:jira-project 
  
      4. manage:jira-configuration 
  
      5. read:jira-user 
  
      6. offline_access
  
   ix.   Copy Refresh Token URL (https://auth.atlassian.com/oauth/token).
 
5. Save Authorization Profile.
 
6. Select the created Authorization Profile to complete integration.
 
7. Click Enable.
 
</container>

<container>

**What can be achieved by integrating Jira with the Kore.ai XO Platform?**
 
The Kore.ai XO Platform supports all common actions on Jira objects with pre-built dialog templates that are ready to use. 
 
**Templates Supported**

| Action           | Description            |
|------------------|------------------------|
|Create Issue        |Add a new issue to the system|
|Update Issue       |Modify an existing issue|
|Delete Issue     |Remove an issue from the system|
|Get All Issues      |Display a list of all issues in the system
|Get Issue By Key       |Retrieve an issue using its unique key|

</container>


