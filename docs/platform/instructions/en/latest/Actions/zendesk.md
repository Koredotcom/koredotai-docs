---
title: Zendesk

permalink: platform/instructions/en/latest/Actions/zendesk

---


<container>

**Overview**

Connect your Zendesk Instance with the Kore.ai XO Platform to power your conversations to create tickets/update tickets and other actions.

The Kore.ai XO Platform allows you to integrate with Zendesk using Basic Auth, enabling you to connect your Zendesk instance easily. With this integration, you can create, update, and perform more actions within Zendesk.

</container>

<container>

**Authorization**
 
To connect to a client's Zendesk account, Kore.ai uses Basic Auth. The developer can use pre-authorized credentials during the configuration process or let the end user authorize during the conversation by creating an authorization profile. Learn More.
 
 
 |Authorization Type                      | Basic | OAuth - System | OAuth - Custom |
 |----------------------------------------|-------|----------------|----------------|
 |Pre-authorize the Integration           |  Yes  |  Yes      |       Yes      |
 |Allow Users to Authorize the Integration|  Yes  |  Yes      |       Yes      |


**Pre-authorize the Integration**
 
 To make the integration process smoother for customers, you can pre-authorize it by providing the necessary authorization credentials to obtain the access token.

**Basic**
 
1. Provide Subdomain, User email, and API Token to authorize the integration.  
2. Follow the steps below to get the required credentials from your Zendesk instance.
 
   a. You will find your Zendesk domain in your browser's address bar. 
 
      i. Example: https://<domain>.zendesk.com
 
     ii. Copy the URL from here to the User Domain field on the Kore.ai XO Platform.
 
   b. User Email
 
      i. Please use the email you use to log into the Zendesk Instance
 
   c. API Token
 
      i. Copy the API Token available in the admin center under Apss & Integrations → Zendesk API → Settings onto the Kore.ai XO Platform.
 
 
 **OAuth - System**
 
 Enable the integration using Kore.ai's preconfigured Zendesk app. 
 
1. Select System.
2. Click Authorize.
3. It will redirect you to the Zendesk login page.
4. Provide your subdomain & credentials to connect with your Zendesk account.
   Please note that you are allowing Kore.ai’s app to fetch the access token to complete the authorization.
5. Click Enable.
 
**OAuth - Custom**
 
 You can create your authorization profile to obtain an access token and use it to complete integration without using Kore.ai's Zendesk app for authorization.
 
1. Select Custom.
2. Click Select Authorization.
3. Select Create New.
4. Select the type of authorization mechanism. 
 
   i.   Select oAuth v2.
 
   ii.  Provide a name for your authorization profile.
 
   iii. Login to Zendesk admin console, navigate to Apps & Integrations -> Zendesk API -> OAuth Clients 
       
    iv. Add a new OAuth Client and Save. 
        You will see Client Secret generated. 
 
     v. Copy Client Name from Zendesk into Client ID field on Kore.ai XO Platform
 
    vi. Copy Client secret from Zendesk into Client Secret field on Kore.ai platform.
 
   vii. Copy Authorization URL (https://{subdomain}.zendesk.com/oauth/authorizations/new).
        Replace subdomain with your Zendesk's instance subdomain.
 
   viii.Copy Token URL (https://{subdomain}.zendesk.com/oauth/tokens).
        Replace subdomain with your Zendesk's instance subdomain.
 
     ix.Scopes: You can request read, write, or impersonate access to all resources or to specific resources.
        Refer https://support.zendesk.com/hc/en-us/articles/4408845965210#topic_pbc_cdl_1l.
 
5. Save Authorization Profile.
6. Select the created Authorization Profile to complete integration.
7. Click Authorize.
8. It will redirect you to the Zendesk login page.
9. Provide your credentials to connect with your Zendesk account. 
   Please note that you are allowing your custom app to fetch the access token to complete the authorization and not using Kore.ai’s Zendesk app for the same.
10. Click Enable. 
 
**Allow Users to Authorize the Integration**
 
This method requires the end user to provide credentials during the conversation for authorization.
 
**Basic**
 
1. Select All Users to Authorize the Integration.
 
2. Click Select Authorization.
 
3. Select Create New.
 
4. Select the type of authorization mechanism. 
 
   i.  Select Basic Auth. 
 
   ii.  Provide a name for the authorization profile. 
 
5. Save Authorization Profile.
6. Select the created Authorization Profile to complete integration.
7. Click Enable.
 
**OAuth - System**
 
 Enable the integration using Kore.ai's preconfigured Zendesk app. 
 
1. Select System.
2. Click Enable.
 
**OAuth - Custom**
 
 You can create your authorization profile to obtain an access token and use it to complete integration without using Kore.ai's Zendesk app for authorization.
 
1. Select Custom.
 
2. Click Select Authorization.
 
3. Select Create New.
 
4. Select the type of authorization mechanism. 
 
   i.  Select oAuth v2.
 
   ii.  Provide a name for your authorization profile.
 
   iii.  Login to Zendesk admin console, navigate to Apps & Integrations -> Zendesk API -> OAuth Clients 
       
   iv.  Add a new OAuth Client and Save. You will see Client Secret generated. 
 
   v.  Copy Client Name from Zendesk into Client ID field on Kore.ai XO Platform
 
   vi.  Copy Client secret from Zendesk into Client Secret field on Kore.ai platform.
 
   vii.  Copy Authorization URL (https://{subdomain}.zendesk.com/oauth/authorizations/new).
         Replace subdomain with your Zendesk's instance subdomain.
 
   viii.  Copy Token URL (https://{subdomain}.zendesk.com/oauth/tokens).
          Replace subdomain with your Zendesk's instance subdomain.
 
   ix.  Scopes: You can request read, write, or impersonate access to all resources or to specific resources.
        Refer https://support.zendesk.com/hc/en-us/articles/4408845965210#topic_pbc_cdl_1l.
 
5. Save Authorization Profile.
 
6. Select the created Authorization Profile to complete integration.
 
7. Click Enable. 
 
</container>
 
<container>

**What can be achieved by integrating Zendesk with the Kore.ai XO Platform?**
 
 The Kore.ai XO Platform supports all common actions on Zendesk objects with pre-built dialog templates that are ready to use. Click Explore Templates. Learn More.
 
**Templates Supported**

| Action           | Description            |
|------------------|------------------------|
|Create Ticket     |Create a new ticket by entering the title, description, and priority of your ticket.|
|Update Ticket     |Update the status, priority, description, and title of your Zendesk ticket.|
|View Ticket by ID |View single/multiple ticket(s) by entering ticket id(s).|
|List All Tickets  |Shows all your tickets.|
|Search Ticket     |Searches all the tickets matching your keyword.|
|Delete Ticket     |Lets you delete a ticket.|

</container>
