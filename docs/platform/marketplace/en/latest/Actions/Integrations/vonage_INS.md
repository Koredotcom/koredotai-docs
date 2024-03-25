---
title: Vonage

permalink: platform/instructions/en/latest/Actions/vonage_INS

---

<base target="_blank">




**Authorization**
 
To connect to a Vonage account, Kore.ai uses Basic Auth. The developer can use pre-authorized credentials during the configuration process or let the end user authorize during the conversation by creating an authorization profile. Learn More.
 
 
 |Authorization Type                      | Basic |
 |----------------------------------------|-------|
 |Pre-authorize the Integration           |  Yes  |
 |Allow Users to Authorize the Integration|  Yes  |


**Pre-authorize the Integration**
 
 To make the integration process smoother for customers, you can pre-authorize it by providing the necessary authorization credentials to obtain the access token.

**Basic**
 
1. Provide API key and API secret to authorize the integration.  
2. Follow the steps below to get the required credentials from your Vonage dashboard.
 
 
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
 
