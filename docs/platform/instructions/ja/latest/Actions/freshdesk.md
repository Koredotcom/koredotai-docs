---
title: Freshdesk

permalink: platform/instructions/ja/latest/Actions/freshdesk

---

<base target="_blank">
<container>

**Overview**

Connect your Freshdesk Instance with the Kore.ai XO Platform to power your conversations to create tickets/update tickets and other actions.

The Kore.ai XO Platform allows you to integrate with Freshdesk using Basic Auth, enabling you to connect your Freshdesk instance easily. With this integration, you can create, update, and perform more actions within Freshdesk.

</container>

<container>

**Authorization**
 
To connect to a Freshdesk account, Kore.ai uses Basic Auth. The developer can use pre-authorized credentials during the configuration process or let the end user authorize during the conversation by creating an authorization profile. Learn More.
 
 
 |Authorization Type                      | Basic |
 |----------------------------------------|-------|
 |Pre-authorize the Integration           |  Yes  |
 |Allow Users to Authorize the Integration|  Yes  |


**Pre-authorize the Integration**
 
 To make the integration process smoother for customers, you can pre-authorize it by providing the necessary authorization credentials to obtain the access token.

**Basic**
 
1. Provide Domain and API Key to authorize the integration.  
2. Follow the steps below to get the required credentials from your Freshdesk instance.
 
   a. Domain - You will find your Freshdesk domain in your browser's address bar. Example: https://{{your-domain}}.freshdesk.com. Copy the URL from here to the User                Domain field on the Kore.ai XO Platform.
  
   b.  API Key
 
        i.  Login to the Freshdesk Instance.
      
       ii.  Click on profile picture on the and navigate to Profile Settings.
   
       iii. Click on View API Key.
   
        iv.  Complete the verification process.
  
         v.  Copy the API Key into Kore.ai XO Platform API Key field.

 
**Allow Users to Authorize the Integration**
 
This method requires the end user to provide credentials during the conversation for authorization.
 
**Basic**
 
1. Select All Users to Authorize the Integration.
2. Click Select Authorization.
3. Select Create New.
4. Select the type of authorization mechanism. 
 
   i. Select Basic Auth
 
   ii. Provide a name for the Authorization Profile
 
5. Save Authorization Profile.
 
6. Select the created Authorization Profile to complete integration.
 
7. Click Enable.

 
</container>
 
<container>

**What can be achieved by integrating Freshdesk with the Kore.ai XO Platform?**
 
 The Kore.ai XO Platform supports all common actions on Freshdesk objects with pre-built dialog templates that are ready to use.
 
**Templates Supported**

| Action           | Description            |
|------------------|------------------------|
|Create Ticket     |Create a new ticket by entering the title, description, and priority of your ticket.|
|Update Ticket     |Update the status, priority, description, and title of your Zendesk ticket.|
|Get Ticket by ID |View single/multiple ticket(s) by entering ticket id(s).|
|List All Tickets  |Shows all your tickets.|
|Search Ticket     |Searches all the tickets matching your keyword.|
|Delete Ticket     |Lets you delete a ticket.|

</container>
