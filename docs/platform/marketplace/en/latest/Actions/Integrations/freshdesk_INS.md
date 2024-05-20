---
title: Freshdesk

permalink: platform/instructions/en/latest/Actions/freshdesk_INS

---






**Authorization**
 
To connect to a Freshdesk account, Kore.ai uses Basic Auth. The developer can use pre-authorized credentials during the configuration process or let the end user authorize during the conversation by creating an authorization profile.
 
 
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

 

