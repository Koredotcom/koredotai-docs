---
title: Twilio

permalink:platform/instructions/ja//latest/Actions/twilio

---

<base target="_blank">
<container>

**Overview**

Connect your Twilio Instance with the Kore.ai XO Platform to power your conversations to send sms, start verification perform other actions.

The Kore.ai XO Platform allows you to integrate with Twilio using Basic Auth, enabling you to connect your Twilio instance easily. 

</container>

<container>

**Authorization**
 
To connect to a Twilio account, Kore.ai uses Basic Auth. The developer can use pre-authorized credentials during the configuration process or let the end user authorize during the conversation by creating an authorization profile. Learn More.
 
 
 |Authorization Type                      | Basic |
 |----------------------------------------|-------|
 |Pre-authorize the Integration           |  Yes  |
 |Allow Users to Authorize the Integration|  Yes  |


**Pre-authorize the Integration**
 
 To make the integration process smoother for customers, you can pre-authorize it by providing the necessary authorization credentials to obtain the access token.

**Basic**
 
1. Provide Account SID & Auth Token to authorize the integration.  
2. Follow the steps below to get the required credentials from your Twilio instance.
 
 
      i. Login to your Twilio Instance.  https://console.twilio.com.
      
     ii. Navigate to Account Info section.
  
    iii. Copy the Account SID ID into Kore.ai XO Platform Account SID field.
   
     iv. Copy the Auth Token into Kore.ai XO Platform Auth Token field
  
      v. Click Enable.

 
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

**What can be achieved by integrating Twilio with the Kore.ai XO Platform?**
 
 The Kore.ai XO Platform supports all common actions on Twilio objects with pre-built dialog templates that are ready to use. 
 
**Templates Supported**

| Action           | Description            |
|------------------|------------------------|
|Send SMS     |Send a text message to a phone number|
|Start Verification  |Initiate verification process|
|Verification Check |Check the status of a verification process|

</container>
