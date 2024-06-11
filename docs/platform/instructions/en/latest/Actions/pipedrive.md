---
title: Pipedrive

permalink: platform/instructions/en/latest/Actions/pipedrive

---
<container>
  
**Overview**

Connect your Pipedrive instance with the Kore.ai XO Platform to automate Pipedrive tasks within your dialog flow. Retrieve, search, create, update and delete leads. The Kore.ai XO platform allows you to connect with Pipedrive quickly and seamlessly using OAuth2.    

</container>
<container>
  
**Authorization**

To connect to a Pipedrive account, Kore.ai uses OAuth 2.0 authentication. The user can use pre-authorized credentials provided by the developer during the configuration process or their own authorization profile during the configuration process to let the end user authorize during the conversation.

|Authorization Type | OAuth - System | OAuth - Custom |
|----------------------------------------|----------------|----------------|
|Pre-authorize the Integration | Yes | Yes |
|Allow Users to Authorize the Integration| Yes | Yes |


**Pre-authorize the Integration**

To make the integration process smoother for customers, you can pre-authorize it by providing the necessary authorization credentials to obtain the access token.

**OAuth - System**

Enable the integration using Kore.ai's preconfigured Jira app.

1. Select System.

2. Click Authorize.

3. It will redirect you to the Pipedrive login page.

4. Provide your credentials to connect with your Pipedrive account.
Please note that you are allowing Kore.ai’s app to fetch the access token to complete the authorization.

5. Click Enable.


**OAuth - Custom**

You can create your authorization profile to obtain an access token and use it to complete integration without using Kore.ai's Jira app for authorization.

1. Select Custom.

2. Click Select Authorization.

3. Select Create New.

4. Select the type of authorization mechanism.

i. Select oAuth v2.

ii. Navigate to (https://developers.pipedrive.com/) and log in or sign up to your sandbox account.

iii. Click on your profile at the top right corner and navigate to Developer Hub tab.

iv. Create a private app, name it and copy the callback URL from the Kore.ai platform, add and paste it into the callback URL of Pipedrive.

v. Navigate to "OAuth & access scopes tab".

vi. Enable the following access scopes - Leads:Full access, Contacts: Read only, Read users data. 

vii. Copy the ClientId from the app and paste it into the ClientId field to the Kore.ai platform.

viii. Copy the Client secret from the app and paste it into the Client Secret field to the Kore.ai platform.

ix. Click on save at the top right corner of the tab.

x. Copy the Authorization URL (https://oauth.pipedrive.com/oauth/authorize) and paste it into the Authorization URL field on the Kore.ai platform.

xi. Select the radio button "Yes, some tasks will have tenancy URLs and the user will need to provide that to successfully authenticate" for Subdomain on the Kore.ai platform.

xii. Copy the Base URL (https://{tenant}.pipedrive.com/v1), paste it into the Base URL field on the Kore.ai platform.

xiii. Copy the Token URL (https://oauth.pipedrive.com/oauth/token), paste it into the Token Request URL, and Refresh Token URL fields on the Kore.ai platform.

xiv. Copy the following scopes (leads:full,organizations:read,persons:read, users:read) into the Scope field on the Kore.ai platform.

5. Save the Authorization Profile.

6. Select the created Authorization Profile to complete integration.

7. Click Authorize.

8. You will be prompted to enter the Tenant. The tenant will be present in the first part of the URL of your Pipedrive app in the format "/yourName/-sandbox". Paste the tenant on the Kore.ai platform and hit Test.

9. It will redirect you to the Pipedrive login page.

10. Provide your credentials to connect with your Pipedrive account.
Please note that you are allowing your custom app to fetch the access token to complete the authorization and not using Kore.ai’s Pipedrive app for the same.

11. Click Enable.


**Allow Users to Authorize the Integration**

This method requires the end user to provide credentials during the conversation for authorization.

**OAuth - System**

This authorization process involves requesting permission for Kore.ai's Pipedrive app to access an access token at runtime.

1. Select System.

2. Click Enable.

3. Please note that a link will be sent to the end-user during the conversation to grant access to Kore.ai’s app to fetch the access token.

**OAuth - Custom**

You can create your authorization profile to obtain an access token and use it to complete integration without using Kore.ai's Salesforce app for authorization.

1. Select Custom.

2. Click Select Authorization.

3. Select Create New.

4. Select the type of authorization mechanism.

i. Select oAuth v2.

ii. Navigate to (https://developers.pipedrive.com/) and log in or sign up to your sandbox account.

iii. Click on your profile at the top right corner and navigate to Developer Hub tab.

iv. Create a private app, name it and copy the callback URL from the Kore.ai platform, add and paste it into the callback URL of Pipedrive.

v. Navigate to "OAuth & access scopes tab".

vi. Enable the following access scopes - Leads:Full access, Contacts: Read only, Read users data. 

vii. Copy the ClientId from the app and paste it into the ClientId field to the Kore.ai platform.

viii. Copy the Client secret from the app and paste it into the Client Secret field to the Kore.ai platform.

ix. Click on save at the top right corner of the tab.

x. Copy the Authorization URL (https://oauth.pipedrive.com/oauth/authorize) and paste it into the Authorization URL field on the Kore.ai platform.

xi. Select the radio button "Yes, some tasks will have tenancy URLs and the user will need to provide that to successfully authenticate" for Subdomain on the Kore.ai platform.

xii. Copy the Base URL (https://{tenant}.pipedrive.com/v1), paste it into the Base URL field on the Kore.ai platform.

xiii. Copy the Token URL (https://oauth.pipedrive.com/oauth/token), paste it into the Token Request URL, and Refresh Token URL fields on the Kore.ai platform.

xiv. Copy the following scopes (leads:full,organizations:read,persons:read, users:read) into the Scope field on the Kore.ai platform.

5. Save Authorization Profile.

6. Select the created Authorization Profile to complete integration.

7. Click Enable.
</container>
<container>

**What can be achieved by integrating Pipedrive with the Kore.ai XO Platform?**
 
The Kore.ai XO platform allows you to connect with Pipedrive quickly and seamlessly using OAuth2.    
 
**Templates Supported**
- List, search, create, update, delete and get details of leads.
- List all permitted users of a particular lead.
- Search organizations, persons and find users by name.
</container>
