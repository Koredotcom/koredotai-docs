---
title: ServiceNow

permalink: platform/instructions/en/latest/Actions/serviceNow_INS

---

<base target="_blank">




**Authorization**
 
To connect to a client's Service Now account, Kore.ai uses basic authentication. The user can use pre-authorized credentials provided by the developer during the configuration process or their own authorization profile during the configuration process to let the end user authorize during the conversation.

 |Authorization Type                      | Basic |
 |----------------------------------------|-------|
 |Pre-authorize the Integration           |  Yes  |
 |Allow Users to Authorize the Integration|  Yes  |


**Pre-authorize the Integration**
 
 To make the integration process smoother for customers, you can pre-authorize it by providing the necessary authorization credentials to obtain the access token.

**Basic**
 
1. Provide Subdomain, Username, and Password to authorize the integration.
 
2. Follow the steps below to get the required credentials from your Service Now developer instance.
 
    i.    To fetch the required details, navigate to https://developer.servicenow.com/dev.do#!/home.
     
   ii.    A page with the Request Instance button is displayed (if no instance is  created for you.)

   iii.   Click Request Instance.

    iv.   Copy the Instance URL from here to the User Subdomain field on the Kore.ai XO Platform.

     v.   Copy the Username and Password to their respective fields on the Kore.ai XO Platform.

     vi.  Click Enable.
 
 ![gif](/koredotai-docs/images/Home%20_%20Loom%20-%2019%20December%202022.gif)
 
**Allow Users to Authorize the Integration**
 
This method requires the end user to provide credentials during the conversation for authorization.
 
**Basic**
 
1. Select All Users to Authorize the Integration.
 
2. Click Select Authorization.
 
3. Select Create New.
 
4. Select the type of authorization mechanism. 
 
   i.  Select Basic Auth. 
 
   ii.  Provide a name for the authorization profile. 
 
5. Save Authorization Profile.
 
6. Select the created Authorization Profile to complete integration.
 
7. Click Enable.
   