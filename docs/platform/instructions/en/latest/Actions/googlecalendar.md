---
title: Google Calendar

permalink: platform/instructions/en/latest/Actions/googleCalendar

---

<base target="_blank">
<container>

**Overview**

The Kore.ai XO Platform allows you to easily connect your Google Calendar instance to find answers for your general queries.

</container>

<container>

**Authorization**
 
To connect to Google Calendar, Kore.ai uses basic authentication. The end-user can use pre-authorized credentials provided by the developer during the configuration process or their own authorization profile during the configuration process to let the end user authorize during the conversation. 
 
 
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

**What can be achieved by integrating Google Calendar with the Kore.ai XO Platform?**
 
 The Kore.ai XO Platform supports all common actions on Google Calendar with pre-built dialog templates that are ready to use.
 
**Templates Supported**

| Action           | Description            |
|------------------|------------------------|
|Get Event Details     |Get the calendar event with the event id to get the updates on that event|
|Create Calendar Event |Create a new calendar event by specifying the timings, event title, description etc|
|Get Busy Time Slots   |Should check the time slots available for a person|

</container>
