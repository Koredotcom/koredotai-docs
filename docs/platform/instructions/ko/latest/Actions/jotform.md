
---
title: Jotform

permalink: platform/instructions/en/latest/Actions/jotform_INS

---

<base target="_blank">




**Authorization**
 
To connect to Jotform, Kore.ai uses basic authentication. The user can use pre-authorized credentials provided by the developer during the configuration process or their own authorization profile during the configuration process to let the end user authorize during the conversation. [Learn More.](https://api.jotform.com/docs/#gettingstarted)
 
 |Authorization Type                      | Basic |
 |----------------------------------------|-------|
 |Pre-authorize the Integration           |  Yes  |
 |Allow Users to Authorize the Integration|  Yes  |


**Pre-authorize the Integration**
 
 To make the integration process smoother for customers, you can pre-authorize it by providing the necessary authorization credentials to obtain the access token.

**Basic**
 
1. Provide API Key to authorize the integration.
2. Follow the steps below to get the required details from your Jotform instance.
 
   a. To fetch the required details, navigate to [https://www.jotform.com/myaccount/api](https://www.jotform.com/myaccount/api)

           i. Click on Create new secret key.
 
           ii. Copy the API Key.
 
           iii. Paste the API key into API key field on Kore.ai XO Platform.
 
 3. Click Enable.
 
**Allow Users to Authorize the Integration**
 
This method requires the end user to provide credentials during the conversation for authorization.
 
**Basic**
 
1. Select Allow Users to Authorize the Integration.
 
2. Click Select Authorization.
 
3. Select Create New.
 
4. Select the type of authorization mechanism. 
 
   i.  Select API Key
 
   ii.  Provide a name for the authorization profile.

   iii. Edit the "Authorization Filed" from api_key to apiKey for "Field Key".

   iv. Use https://api.jotform.com/form/[your-form-id-here] as the "Authorization Check URL" and replace [your-form-id-here] with the appropriate form ID.
 
   v.  Save Authorization Profile.
 
 6.  Click Enable.
