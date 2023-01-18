---
title: Stripe

permalink:platform/instructions/ja//latest/Actions/stripe

---

<base target="_blank">
<container>

**Overview**

Connect your Stripe Instance with the Kore.ai XO Platform to power your conversations to create customers/payments and other actions.

The Kore.ai XO Platform allows you to integrate with Stripe using Basic Auth, enabling you to connect your Stripe instance easily. With this integration, you can create, list, and perform more actions within Stripe.

</container>

<container>

**Authorization**
 
To connect to a Stripe account, Kore.ai uses Basic Auth. The developer can use pre-authorized credentials during the configuration process or let the end user authorize during the conversation by creating an authorization profile. Learn More.
 
 
 |Authorization Type                      | Basic |
 |----------------------------------------|-------|
 |Pre-authorize the Integration           |  Yes  |
 |Allow Users to Authorize the Integration|  Yes  |


**Pre-authorize the Integration**
 
 To make the integration process smoother for customers, you can pre-authorize it by providing the necessary authorization credentials to obtain the access token.

**Basic**
 
1. Provide API Key to authorize the integration.  
2. Follow the steps below to get the required credentials from your Stripe instance.
 
      i. Login to your Stripe Instance. https://dashboard.stripe.com/.
      
     ii. Click on Developers tab.
  
    iii. Click on API Keys.
   
     iv. In the Standard Keys section, against the Secret Key row, click on Reveal Key.
  
      v. Copy the API Key into Kore.ai XO Platform API Key field.
  
     vi. Click Enable.

 
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

**What can be achieved by integrating Stripe with the Kore.ai XO Platform?**
 
 The Kore.ai XO Platform supports all common actions on Stripe objects with pre-built dialog templates that are ready to use. 
 
**Templates Supported**

| Action           | Description            |
|------------------|------------------------|
|Create Customer     |Add a new customer to the system|
|List All Customers   |Display a list of all customers in the system|
|Create Invoice |Create a new invoice|
|List All Invoices  |Display a list of all invoices in the system|
|Create Payment Intent     |Create a new payment intent|

</container>

