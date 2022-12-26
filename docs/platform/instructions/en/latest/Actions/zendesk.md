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
 
 
 |Authorization Type                      | Basic |
 |----------------------------------------|-------|
 |Pre-authorize the Integration           |  Yes  |
 |Allow Users to Authorize the Integration|  Yes  |


**Pre-authorize the Integration**
 
 To make the integration process smoother for customers, you can pre-authorize it by providing the necessary authorization credentials to obtain the access token.

**Basic**
 
1. Provide Subdomain, User email, and API Token to authorize the integration.  
2. Follow the steps below to get the required credentials from your Zendesk instance.
 
   a. You will find your Zendesk domain in your browser's address bar. 
 
      i.   Example: https://<domain>.zendesk.com
 
      ii.  Copy the URL from here to the User Domain field on the Kore.ai XO Platform.
 
   b.  User Email
 
      i. Please use the email you use to log into the Zendesk Instance
 
   c.  API Token
 
      i. Copy the API Token available in the admin center under Apss & Integrations → Zendesk API → Settings onto the Kore.ai XO Platform.
 
 ![gif](/koredotai-docs/images/Home%20_%20Loom%20-%2019%20December%202022.gif)
 
**Allow Users to Authorize the Integration**
 
This method requires the end user to provide credentials during the conversation for authorization.
 
**Basic**
 
1. Select All Users to Authorize the Integration.
2. Click Select Authorization.
3. Select Create New.
4. Select the type of authorization mechanism. 
 
   i. Select Basic Auth. 
 
  ii. Provide a name for the authorization profile. 
 
 iii. Fetch the authorization URL from your Zendesk instance browser's address bar and copy into Kore.ai XO platform Authorization URL field.
 
      1. Example: https://<domain>.zendesk.com
 
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
