---
title: Gorgias

permalink: platform/instructions/en/latest/Actions/gorgias

---

<base target="_blank">
<container>

**Overview**

Connect your Gorgias Instance with the Kore.ai XO Platform to power your conversations to create tickets/customers ,update tickets/customers and other actions.

The Kore.ai XO Platform allows you to integrate with Gorgias using Basic Auth, enabling you to connect your Gorgias instance easily. With this integration, you can create, update, and perform more actions within Gorgias.

</container>

<container>

**Authorization**
 
To connect to a client's Gorgias account, Kore.ai uses Basic Auth. The developer can use pre-authorized credentials during the configuration process or let the end user authorize during the conversation by creating an authorization profile. Learn More.
 
 
 |Authorization Type                      | Basic |
 |----------------------------------------|-------|
 |Pre-authorize the Integration           |  Yes  |
 |Allow Users to Authorize the Integration|  Yes  |


**Pre-authorize the Integration**
 
 To make the integration process smoother for customers, you can pre-authorize it by providing the necessary authorization credentials to obtain the access token.

**Basic**

1. Provide Company Domain, User Name, and Password (API Key) to authorize the integration.  
2. Follow the steps below to get the required credentials from your Gorgias instance.
 
   a. You will find your company domain in your browser's address bar. 
 
        i. Example: https://<company-domain>.gorgias.com

       ii. Copy the URL from here to the User Domain field on the Kore.ai XO Platform.
 
   b. User Email
 
        i. Please use the email you use to log into the Gorgias Instance.
                             (or)
          you will find the email in your gorgias account on your profile tab under Your Profile-> REST API-> Username (your email address)
 
   c. API Token
 
        i. Copy the Password (API Key) available in the gorgias account page under Your Profile-> REST API-> Password (API Key).

 
**Allow Users to Authorize the Integration**
 
This method requires the end user to provide credentials during the conversation for authorization.
 
**Basic**
 
1. Select All Users to Authorize the Integration.
 
2. Click Select Authorization.
 
3. Select Create New.
 
4. Select the type of authorization mechanism. 
 
   i.  Select Basic Auth. 
 
   ii.  Provide a name for the authorization profile.

   iii. Select the Subdomain value as Yes, then provide the Base Url which is available in the gorgias account page under Your Profile-> REST API-> Base API URL.

   iv. provide the Auth Check Url.

        Example:`https://<company-domain>.gorgias.com/api/account`
   
   v. finally select the GET Method.
 
6. Save Authorization Profile.
7. Select the created Authorization Profile to complete integration.
8. Click Enable.
 
</container>
 
<container>

**What can be achieved by integrating Gorgias with the Kore.ai XO Platform?**
 
 The Kore.ai XO Platform supports all common actions on Gorgias objects with pre-built dialog templates that are ready to use. Click Explore Templates. Learn More.
 
**Templates Supported**

| Action           | Description            |
|------------------|------------------------|
|Create a customer     | Automate the creation of a lead or contact.|
|List customers     | Fetch a list of all the leads, contacts or customers.|
|Update a customer | Update the details of a particular lead, contact or customer's info.|
|Retrieve a customer  | Fetch the details of a particular lead or contact.|
|Delete a customer     |Delete a lead, contact or customer.|
|Create a ticket    | Automate the creation of a ticket or incident, either by your customer, or an agent.|
|List tickets | List all tickets or incidents.|
|Retrieve a ticket | Find a particular ticket or incident.|
|Update a ticket | Update the details of a ticket or incident.|
|Delete a ticket | Automate the deletion of a ticket or incident, either by an end user or an agent.|

</container>
