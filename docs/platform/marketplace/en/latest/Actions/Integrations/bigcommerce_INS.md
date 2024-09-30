---
title: BigCommerce

permalink: platform/instructions/en/latest/Actions/bigcommerce_INS

---

<base target="_blank">
<container>

**Overview**

The Kore.ai XO Platform allows you to easily connect your BigCommerce Shop instance to find informations regarding Customer, Product and Orders.

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
 
 1. Navigate to settings in your BigCommerce store.
 2. Create a Store-level API account in your BigCommerce store.
 3. Generate API credentials and the necessary API access tokens.
 4. Configure the account with the following scopes to perform the actions provided by the Kore.ai XO platform.
 
     i.  Orders -> READ-ONLY
 
     ii.  Products -> READ-ONLY 
    
     iii. Checkouts -> MODIFY

     iv. Carts -> MODIFY

 5. Provide the “Api access token” and “Store hash” provided by BigCommerce in Kore.ai Pre-authorize the Integration.
  
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

**What can be achieved by integrating BigCommerce Shop with the Kore.ai XO Platform?**
 
 The Kore.ai XO Platform supports all common actions on BigCommerce that are ready to use.
 
**Templates Supported**

| Action           | Description            |
|------------------|------------------------|
|Get order details     |Retrieves the details of an order using the specified order ID|
|Get product details     |Retrieve the details of a specific product using the product ID.|
|Get card details    |Retrieves the details of a cart using the specified cart ID.|
|Delete a cart      |Deletes a cart using the specified cart ID.|
|Add billing address  |Adds a new billing address for checkout using specified cart ID.|
|Update billing address |Updates the billing address of a cart using the specified cart ID and Billing ID.|

</container>
