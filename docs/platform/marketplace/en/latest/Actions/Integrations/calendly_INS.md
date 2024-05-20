---
title: Calendly

permalink: platform/instructions/en/latest/Actions/calendly_INS

---

<base target="_blank">




**Authorization**
 
To connect to Calendly, Kore.ai uses OAuth authentication. The end-user can use pre-authorized credentials provided by the developer during the configuration process or their own authorization profile during the configuration process to let the end user authorize during the conversation.
 
 
 |Authorization Type                      | OAuth - System | OAuth - Custom |
 |----------------------------------------|----------------|----------------|
 |Pre-authorize the Integration           |       No       |       Yes      |
 |Allow Users to Authorize the Integration|       No       |       Yes      |



**Pre-authorize the Integration**
 
 To make the integration process smoother for customers, you can pre-authorize it by providing the necessary authorization credentials to obtain the access token.

 
 
**OAuth - Custom**
 
 You can create your authorization profile to obtain an access token and use it to complete integration.
1. Select **Custom**.
 
2. Click **Select Authorization**.
 
3. Select **Create New**.
 
4. Select the type of authorization mechanism. 
 
    i.  Select OAuth v2
 
   ii.  Navigate to **developer.calendly.com** and log in 
 
   iii.  Navigate to Account/My Apps → create/select a app
 
   iv.  Copy Client Id from Calendly into Client Id to Kore.ai platform
 
    v.  Copy Client secret from Calendly into Client Secret to Kore.ai platform
 
    vi.  Copy Authorization URL ([https://auth.calendly.com/oauth/authorize](https://auth.calendly.com/oauth/authorize))
 
   vii. Copy Token URL ([https://auth.calendly.com/oauth/token](https://auth.calendly.com/oauth/token))

   viii. No scope is required
 
    ix. Copy Refresh Token URL ([https://auth.calendly.com/oauth/token](https://auth.calendly.com/oauth/token))
 
5. Save **Authorization Profile**.
 
6. Select the created Authorization Profile to complete integration.
 
7. Click **Authorize**.
 
8. It will redirect you to the Calendly login page **calendly.com**. 
 
9. Provide your credentials to connect with your Calendly account. 
   Please note that you are allowing your custom app to fetch the access token to complete the authorization.
 
10. Click **Enable**.
 
 
**Allow Users to Authorize the Integration**
 
This method requires the end user to provide credentials during the conversation for authorization.
 

 **OAuth - Custom**
 
 You can create your authorization profile to obtain an access token and use it to complete integration without using Kore.ai's Calendly app for authorization.
 
1. Select **Custom**.
 
2. Click **Select Authorization**.
 
3. Select **Create New**.
 
4. Select the type of authorization mechanism. 
 
    i.  Select OAuth v2
 
   ii.  Navigate to **developer.calendly.com** and log in 
 
   iii.  Navigate to Account/My Apps → create/select a app
 
   iv.  Copy Client Id from Calendly into Client Id to Kore.ai platform
 
    v.  Copy Client secret from Calendly into Client Secret to Kore.ai platform
 
   vi.  Copy Authorization URL ([https://auth.calendly.com/oauth/authorize](https://auth.calendly.com/oauth/authorize))
 
   vii. Copy Token URL ([https://auth.calendly.com/oauth/token](https://auth.calendly.com/oauth/token))

   viii. No scope is required
 
    ix. Copy Refresh Token URL ([https://auth.calendly.com/oauth/token](https://auth.calendly.com/oauth/token))
 
5. Save **Authorization Profile**.
 
6. Select the created Authorization Profile to complete integration.
 
7. Click **Enable**.


**What can be achieved by integrating Calendly with the Kore.ai XO Platform?**
 
The Kore.ai XO Platform supports all common actions on Calendly with pre-built dialog templates that are ready to use. 
 
**Templates Supported**

| Action           | Description            |
|------------------|------------------------|
|List Events|Displays a list of all scheduled events.|
|Get Event Invitees |Fetch information about attendees for a scheduled event|
|Get Event Details         |Fetch the details of a particular calendar event|
|List Events By Predefined Range    |Displays a list of all scheduled events within the range|

| Template             | Description            |
|---------------------|------------------------|
|Schedule an appointment            | Book an appointment|
