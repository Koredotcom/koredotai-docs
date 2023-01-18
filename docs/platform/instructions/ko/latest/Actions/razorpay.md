---
title: Razorpay

permalink:platform/instructions/ko/latest/Actions/razorpay

---

<base target="_blank">
<container>

**Overview**

Connect your Razorpay Instance with the Kore.ai XO Platform to power your conversations to create invoices , get tickets and perform other actions.

The Kore.ai XO Platform allows you to integrate with Razorpay using Basic Auth, enabling you to connect your Razorpay instance easily. 

</container>

<container>

**Authorization**
 
To connect to a Razorpay account, Kore.ai uses Basic Auth. The developer can use pre-authorized credentials during the configuration process or let the end user authorize during the conversation by creating an authorization profile. Learn More.
 
 
 |Authorization Type                      | Basic |
 |----------------------------------------|-------|
 |Pre-authorize the Integration           |  Yes  |
 |Allow Users to Authorize the Integration|  Yes  |


**Pre-authorize the Integration**
 
 To make the integration process smoother for customers, you can pre-authorize it by providing the necessary authorization credentials to obtain the access token.

**Basic**
 
1. Provide Key ID & Key Secret to authorize the integration.  
2. Follow the steps below to get the required credentials from your Razorpay instance.
 
   a.  API Key
 
       i. Login to your Razorpay Instance. https://dashboard.razorpay.com/.

       ii. Click on settings tab.

       iii. Click on API Keys.

       iv. Click Generate Key

        v. Copy the Key ID into Kore.ai XO Platform Key ID field.

       vi. Copy the Key Secret into Kore.ai XO Platform Key Secret field.
 
       vii. Click Enable.

 
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

**What can be achieved by integrating Razorpay with the Kore.ai XO Platform?**
 
 The Kore.ai XO Platform supports all common actions on Razorpay objects with pre-built dialog templates that are ready to use. 
 
**Templates Supported**

| Action           | Description            |
|------------------|------------------------|
|Create Invoice     |Generate a new invoice|
|Get Ticket by Id   |Retrieve a ticket by its unique ID|
|List All Tickets |Display a list of all tickets|
|Update Ticket  |Modify an existing ticket|
|Delete Ticket     |Remove a ticket|
|Search Ticket     |Find a ticket using specified search criteria|

</container>


