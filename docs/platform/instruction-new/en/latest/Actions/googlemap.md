---
title: Google Map

permalink: platform/instructions/en/latest/Actions/googleMaps

---

<base target="_blank">
<container>

**Overview**

The Kore.ai XO Platform allows you to integrate with Google Map and allows you to display location details.

</container>

<container>

**Authorization**
 
To connect to a Google Map account, Kore.ai uses basic authentication. The user can use pre-authorized credentials provided by the developer during the configuration process or their own authorization profile during the configuration process to let the end user authorize during the conversation.
 
 
 |Authorization Type                      | Basic |
 |----------------------------------------|-------|
 |Pre-authorize the Integration           |  Yes  |
 |Allow Users to Authorize the Integration|  Yes  |


**Pre-authorize the Integration**
 
 To make the integration process smoother for customers, you can pre-authorize it by providing the necessary authorization credentials to obtain the access token.


 **Basic**
 
1. Follow the steps below to get the required details from your Google Map.
    i.   Login to your google cloud account (https://console.cloud.google.com/)

    ii.  After you have logged in successfully, enable Geolocation API
    
    iii. Navigate to Google Maps Platform > Credential page 
      
    iv.  On the Credentials page, click Create credentials > API key
       
    v.    Provide a name and click on Generate Key         
 
2. Copy generated key and paste it into Kore.ai XO Platform API key field and click Enable
 
 
**Allow Users to Authorize the Integration**
 
This method requires the end user to provide credentials during the conversation for authorization.
 
**Basic**
 
1. Select All Users to **Authorize** the Integration.
 
2. Click Select **Authorization**.
 
3. Select **Create New**.
 
4. Select the type of authorization mechanism.
 
    i. Select Basic Auth
 
   ii. Provide a name for the authorization profile
 
5. Save **Authorization Profile**.
 
6. Select the created **Authorization Profile** to complete integration.
 
7. Click **Enable**.
 
 </container>
 
 <container>

**What can be achieved by integrating Google Map with the Kore.ai XO Platform?**
 
 The Kore.ai XO Platform supports all common actions on Hubspot with pre-built dialog templates that are ready to use.
 
**Templates Supported**

| Action           | Description            |
|------------------|------------------------|
|Get places by name   |Displays the coordinate, and address based on the name of a place  |
|Get locations by coordinate   |Get location information based on the coordinate|

</container>
