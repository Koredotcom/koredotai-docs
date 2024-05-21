---
title: Shopify Shop

permalink: platform/instructions/en/latest/Actions/shopify_INS

---

<base target="_blank">




**Authorization**
 
The end-user can use pre-authorized credentials provided by the developer or their own authorization profile during the configuration process to let the end user authorize during the conversation.
 
 
 |Authorization Type                      | Basic |
 |----------------------------------------|-------|
 |Pre-authorize the Integration           |  Yes  |
 |Allow Users to Authorize the Integration|  Yes  |


**Pre-authorize the Integration**
 
To make the integration process smoother for customers, you can pre-authorize it by providing the necessary authorization credentials to obtain the API Access token.

**Custom Auth or Private App**
 
 1. Navigate to Shopify Admin page.
 2. Create a custom app for a store in the Shopify admin page. 
 3. Authenticate the custom app by installing the app.
 4. Generate API credentials and the necessary API access tokens. Refer this link for more information related to custom apps (https://help.shopify.com/en/manual/apps/app-types/custom-apps)
 5. Configure the app with the following scopes to perform the actions provided by the Kore.ai XO platform.
 
     i.  read_orders
 
     ii.  read_products and
 
     iii.  read_customers
 
 6. Provide the “Admin Api access token” and “Domain” provided by shopify in Kore.ai Pre-authorize the Integration.
  
**Allow Users to Authorize the Integration**
 
This method requires the end user to provide credentials during the conversation for authorization.
 
**Basic**
 
1. Select All Users to Authorize the Integration.
 
2. Click Select Authorization.
 
3. Select Create New.
 
4. Select the type of authorization mechanism. 
 
   i.  Select API Key.
 
   ii.  Provide a name for the authorization profile.

   iii. Select Subdomain as Yes, some tasks will have tenancy URLs and the user will need to provide that to successfully authenticate

    iv. Add Base URL https://{tenant}.myshopify.com/admin/api/2023-01/shop.json
   
   v. Under Form Field(s) click "+ Add Form Field", enter the Field Title and Field key, under Advance Settings select Mandatory option as "Yes, user must enter this field".
   
   vi. under Authorization Field(s), click edit and select Field Type as header and Field Key as "X-Shopify-Access-Token".

   vii. click Save Auth
 
 6.  Click Enable.
 


