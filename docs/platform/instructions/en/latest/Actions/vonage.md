---
title: Vonage

permalink: platform/instructions/en/latest/Actions/vonage

---

<base target="_blank">
<container>

**Overview**

Connect your Vonage instance with the Kore.ai XO Platform to automate the sending and verification of an SMS within a conversation. The Kore.ai XO platform allows you to integrate with Vonage using basic Auth, enabling you to connect to your Vonage instance easily.

The Kore.ai XO Platform allows you to integrate with Vonage using Basic Auth, enabling you to connect your Vonage easily. 

</container>

<container>

**Authorization**
 
To connect to a Vonage account, Kore.ai uses Basic Auth. The developer can use pre-authorized credentials during the configuration process or let the end user authorize during the conversation by creating an authorization profile. Learn More.
 
 
 |Authorization Type                      | Basic |
 |----------------------------------------|-------|
 |Pre-authorize the Integration           |  Yes  |
 |Allow Users to Authorize the Integration|  Yes  |


**Pre-authorize the Integration**
 
 To make the integration process smoother for customers, you can pre-authorize it by providing the necessary authorization credentials to obtain the access token.

**Basic**
 
1. Provide Account SID & Auth Token to authorize the integration.  
2. Follow the steps below to get the required credentials from your Vonage instance.
 
      i. Login to your Vonage account.  https://ui.idp.vonage.com/ui/auth/login.
      
     ii. Navigate to My dashboard section.
  
    iii. Copy the API key and API secret into Kore.ai XO Platform.
     
     iv. Click Enable.
 
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

**What can be achieved by integrating Vonage with the Kore.ai XO Platform?**
 
 The Kore.ai XO Platform supports all common actions on Vonage objects with pre-built dialog templates that are ready to use. 
 
**Templates Supported**

| Action           | Description            |
|------------------|------------------------|
|Request a verification to send to user    |Send a verification PIN to a user including the channel and phone number/email|
|Check a supplied code against a request to see if it is valid  |Allow a code to be checked against an existing verification request|
|Cancel a verification |Cancel a verification request if it is still active|

</container>
