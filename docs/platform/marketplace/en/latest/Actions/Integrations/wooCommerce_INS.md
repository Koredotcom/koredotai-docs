---
title: WooCommerce

permalink: platform/instructions/en/latest/Actions/wooCommerce_INS

---






**Authorization**
 
To connect to a WooCommerce account, Kore.ai uses Basic Auth. The developer can use pre-authorized credentials during the configuration process or let the end user authorize during the conversation by creating an authorization profile. Learn More.
 
 
 |Authorization Type                      | Basic |
 |----------------------------------------|-------|
 |Pre-authorize the Integration           |  Yes  |
 |Allow Users to Authorize the Integration|  Yes  |


**Pre-authorize the Integration**
 
 To make the integration process smoother for customers, you can pre-authorize it by providing the necessary authorization credentials to obtain the access token.

**Basic**
 
1. Provide Domain, Consumer Key and Consumer secret to authorize the integration.  
2. Follow the steps below to get the required credentials from your WooCommerce store.
 
   a. Domain - You will find your WooCommerce domain in your browser's address bar. Example: https://{{your-domain}}.com. Copy the URL from here to the User Domain field on the Kore.ai XO Platform.
  
   b.  Consumer Key , Consumer secret
 
        i.  Login to the wordpress account.
      
       ii.  Click on woocommerce.
   
       iii. Click on Settings.
   
        iv. Click on advanced then select rest API.
  
         v. Click on add key, provide description and click generate API key  .

        vi. Copy the Consumer key and Consumer secret into Kore.ai XO Platform.

       vii. Click Enable

 
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

 
