---
title: Gorgias

permalink: platform/instructions/en/latest/Actions/gorgias_INS

---

<base target="_blank">




**Authorization**
 
To connect to a client's Gorgias account, Kore.ai uses Basic Auth. The developer can use pre-authorized credentials during the configuration process or let the end user authorize during the conversation by creating an authorization profile.[Learn More](https://developers.gorgias.com/docs/access-tokens-api-keys)
 
 
 |Authorization Type                      | Basic |
 |----------------------------------------|-------|
 |Pre-authorize the Integration           |  Yes  |
 |Allow Users to Authorize the Integration|  Yes  |

**Pre-authorize the Integration**
 
To make the integration process smoother for customers, you can pre-authorize it by providing the necessary authorization credentials to obtain the access token.

**Basic**
 
1. Provide your gorgias Domain, User Name, and Password (API Key) to authorize the integration.  
2. Follow the steps below to get the required credentials from your Gorgias instance.
 
   a. You will find your gorgias domain in your browser's address bar. 
 
        i. Example: https://<domain>.gorgias.com

       ii. Copy the domain from here to the User Sub Domain field on the Kore.ai XO Platform.
 
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

        Example:`https://<domain>.gorgias.com/api/account`
   
   v. finally select the GET Method.
 
6. Save Authorization Profile.
7. Select the created Authorization Profile to complete integration.
8. Click Enable.