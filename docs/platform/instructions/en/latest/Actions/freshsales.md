---
title: Freshsales

permalink: platform/marketplace/en/latest/Actions/freshsales


---

<base target="_blank">
<container>

**Overview**

The Kore.ai XO Platform allows you to easily connect your Freshsales instance to find answers for your general queries.

</container>

<container>

**Authorization**
 
To connect to Freshsales, Kore.ai uses basic authentication. The user can use pre-authorized credentials provided by the developer during the configuration process or their own authorization profile during the configuration process to let the end user authorize during the conversation. [Learn More.](https://developers.freshworks.com/crm/api/#introduction)
 
 
 |Authorization Type                      | Basic |
 |----------------------------------------|-------|
 |Pre-authorize the Integration           |  Yes  |
 |Allow Users to Authorize the Integration|  Yes  |


**Pre-authorize the Integration**
 
 To make the integration process smoother for customers, you can pre-authorize it by providing the necessary authorization credentials to obtain the access token.

**Basic**
 
1. Provide Domain and API Key to authorize the integration.  

2. Follow the steps below to get the required credentials from your Freshsales instance.
 
   a. Domain - You will find your Freshsales domain in your browser's address bar.

        i. Example: https://<domain>.freshwork.com.

       ii. Copy the domain from here to the User Sub Domain field on the Kore.ai XO Platform.
  
   b.  API Key
 
       i.  Login to the Freshsales Instance.
      
       ii.  Click your profile picture and select Profile Settings.

       iii. Click the API Settings tab..
   
       iv.  You can find your API key in the field Your API key.
  
        v.  Copy the API Key into Kore.ai XO Platform as Token token=Your_Api_key. 
        
 3. Click Enable.
 
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

   iv. Add Base URL https://{tenant}.myfreshworks.com
   
   v. under Authorization Field(s), click edit and select Field Type as header and Field Key as "Authorization" Field value as "{{key}}".
   
   vi.provide Auth check Url.
        
        Example: `https://{tenant}.myfreshworks.com/crm/sales/api/contacts/filters`
   
   vii. click Save Auth
 
 6.  Click Enable.
 
      

 </container>
 
 <container>

**What can be achieved by integrating Freshsales with the Kore.ai XO Platform?**

The Kore.ai XO Platform supports all common actions on Freshsales with pre-built dialog templates that are ready to use.

**Templates Supported**

| Action           | Description            |
|------------------|------------------------|
|Create contact   |Automate the creation of a contact.|
|Update contact  |Update the details of a particular contact's info|
|Delete contact  |Delete a contact.|
|List all contacts|Fetch a list of all the contacts.|
|ViewContactByNameOrEmail|View contact details by name or email|
|Create deal |Automate the creation of a deal.|
|Update deal|Update a deal|
|Delete deal|Delete a deal with dealId|
|List all deals|Fetch a list of all the deals|
|ViewDealByName|View deal details by dealName|
</container>
