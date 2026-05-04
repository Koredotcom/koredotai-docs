---
title: Here

permalink: platform/instructions/en/latest/Actions/here

---

<base target="_blank">
<container>

**Overview**

The Kore.ai XO Platform allows you to integrate with Here and allows you to display location details.

</container>

<container>

**Authorization**
 
To connect to Here, Kore.ai uses API Key authentication. The end-user can use pre-authorized credentials provided by the developer during the configuration process or their own authorization profile during the configuration process to let the end user authorize during the conversation.
 
 
 |Authorization Type                      |API Key|
 |----------------------------------------|-------|
 |Pre-authorize the Integration           |  Yes  |
 |Allow Users to Authorize the Integration|  Yes  |


**Pre-authorize the Integration**
 
 To make the integration process smoother for customers, you can pre-authorize it by providing the necessary API Key.

**Steps to obtain the API Key**
 
1. Create an account on the Here Developer Portal at https://developer.here.com/
2. Log into the Here developer portal, navigate to the Launcher menu, and select Access Manager.
3. On the Access Manager page, Select the "Apps" section to navigate to the Apps page.
4. Click on Register New App to create a new app.
5. Provide the App Name and Description. Then, choose the relevant project from the dropdown menu for which the access needs to be granted and click on Register.
6. You will be navigated to the App details screen on successful registration of the app.
7. Navigate to the Credentials tab and select the option labeled "API keys". From there, click on "Create API Key".
8. Copy the generated API Key and provide it in the Authorization tab of this page.
 
**Allow Users to Authorize the Integration**
 
This method requires the end user to provide credentials during the conversation for authorization.
 
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

**What can be achieved by integrating Here with the Kore.ai XO Platform?**
 
 The Kore.ai XO Platform supports all common actions on Here with pre-built dialog templates that are ready to use.
 
**Templates Supported**

| Action           | Description            |
|------------------|------------------------|
|Get Location     |Get the current geolocation by free text|

</container>
