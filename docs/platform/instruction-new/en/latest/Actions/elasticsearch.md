---
title: Elastic Search

permalink: platform/instructions/en/latest/Actions/elasticsearch

---

<base target="_blank">
<container>

**Overview**

The Kore.ai XO Platform allows you to easily connect your Elastic Search instance to find answers for your general queries.

</container>

<container>

**Authorization**
 
To connect to Elastic Search, Kore.ai uses basic authentication. The end-user can use pre-authorized credentials provided by the developer during the configuration process or their own authorization profile during the configuration process to let the end user authorize during the conversation.
 
 
 |Authorization Type                      | Basic |
 |----------------------------------------|-------|
 |Pre-authorize the Integration           |  Yes  |
 |Allow Users to Authorize the Integration|  Yes  |


**Pre-authorize the Integration**
 
 To make the integration process smoother for customers, you can pre-authorize it by providing the necessary authorization credentials to obtain the access token.

**Basic**
 
1. TBD
 
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

**What can be achieved by integrating Elastic Search with the Kore.ai XO Platform?**
 
 The Kore.ai XO Platform supports all common actions on Elastic Search with pre-built dialog templates that are ready to use.
 
**Templates Supported**

| Action           | Description            |
|------------------|------------------------|
|Elastic Search     |Queries the Elastic Search index and returns the result|

</container>
