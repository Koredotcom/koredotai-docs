---
title: Shopify Shop

permalink: platform/instructions/en/latest/Actions/shopify

---

<base target="_blank">
<container>

**Overview**

The Kore.ai XO Platform allows you to easily connect your Shopify Shop instance to find informations regarding Customer, Product and Orders.

</container>

<container>

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
 
   i.  Select API Key
 
   ii.  Provide a name for the authorization profile.
 
   iii.  Save Authorization Profile.
 
 5.  Click Enable.
 
 </container>
 
 <container>

**What can be achieved by integrating Shopify Shop with the Kore.ai XO Platform?**
 
 The Kore.ai XO Platform supports all common actions on Shopify with pre-built dialog templates that are ready to use.
 
**Templates Supported**

| Action           | Description            |
|------------------|------------------------|
|Get customer details by email     |Retrieves the details of a customer based on their email ID.|
|Get orders by customer ID     |Retrieve the list of all the orders of a customer based on the specified customer ID.|
|Get order details     |Retrieves the details of an order using the specified order ID|
|Get product variants      |Retrieves the list of all the variants of a product based on the specified product ID.|
|Get products by name      |Retrieve the list of products with the specified title.|  
|Get product details     |Retrieve the details of a specific product using the product ID.|
|Get products by collection     |Retrieves all the products under a specific collection. |
|Get all collections     |Gets all the available collections from shopify.|

</container>

