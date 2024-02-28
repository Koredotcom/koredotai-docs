---
title: DHL

permalink: platform/instructions/en/latest/Actions/dhl_INS

---

<base target="_blank">




**Authorization**
 
To connect to DHL, Kore.ai uses basic authentication. The end-user can use pre-authorized credentials provided by the developer during the configuration process or their own authorization profile during the configuration process to let the end user authorize during the conversation.  
 
 |Authorization Type                      | Basic |
 |----------------------------------------|-------|
 |Pre-authorize the Integration           |  Yes  |
 |Allow Users to Authorize the Integration|  Yes  |


**Pre-authorize the Integration**
 
 To make the integration process smoother for customers, you can pre-authorize it by providing the necessary authorization credentials to obtain the access token.
 
**Basic**
 1. Create an account on the DHL Developer Portal at https://developer.dhl.com/.
 2. Create an app by providing App name, and Description
 3. Configure the app with the following scopes to perform the actions provided by the Kore.ai XO platform.
 
     i.  Shipment Tracking Unified and
 
     ii.  Location Finder Unified

 4. Provide the "API key" provided by DHL in Kore.ai to Pre-authorize the Integration.


**Allow Users to Authorize the Integration**
 
This method requires the end user to provide credentials during the conversation for authorization.
 
**Basic**
 
1. Select All Users to Authorize the Integration.
2. Click Select Authorization.
3. Select Create New.
4.Select the type of authorization mechanism.
  
     i.  Select API Key. Add “DHL-API-Key” in the header
 
     ii.  Provide a name for the authorization profile.
 
     iii.  Save Authorization Profile.
5. Click Enable.

 
 

