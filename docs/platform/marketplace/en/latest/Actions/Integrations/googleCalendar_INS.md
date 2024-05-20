---
title: Google Calendar

permalink: platform/instructions/en/latest/Actions/googleCalendar_INS

---

<base target="_blank">




**Authorization**
 
To connect to Google Calendar, Kore.ai uses OAuth authentication. The developer can use pre-authorized credentials during the configuration process or let the end user authorize during the conversation by creating an authorization profile.
 
 |Authorization Type                      |  OAuth - System | OAuth - Custom |
 |----------------------------------------|-----------------|----------------|
 |Pre-authorize the Integration           |      No         |     Yes        |
 |Allow Users to Authorize the Integration|      No         |     Yes        |


**Pre-authorize the Integration**
 
 To make the integration process smoother for customers, you can pre-authorize it by providing the necessary authorization credentials to obtain the access token.

**OAuth - Custom**
 You can create your authorization profile to obtain an access token and use it to complete integration.

 1. Select **Custom**.
 
 2. Click **Select Authorization**.
 
 3. Select **Create New**.
 
 4. Select the type of authorization mechanism.
    
    i. Select OAuth v2
    
    ii. Navigate to **[console.cloud.google.com](https://console.cloud.google.com)** and log in.

    iii. Create a Google Cloud project. [refer](https://developers.google.com/workspace/guides/create-project).

    iv. Enable Google Workspace APIs. [refer](https://developers.google.com/workspace/guides/enable-apis).

    v. Configure the OAuth consent screen and choose scopes. [refer](https://developers.google.com/workspace/guides/configure-oauth-consent).
 
    vi. Create access credentials. [refer](https://developers.google.com/workspace/guides/create-credentials#oauth-client-id)
 
    vii. Copy the Client ID and Client Secret to the Kore.ai platform from [here](https://console.cloud.google.com/workspace-api/credentials).
 
    viii. Copy Authorization URL:

          https://accounts.google.com/o/oauth2/v2/auth?access_type=offline&prompt=consent
 
    ix. Copy Token URL:
    
          https://oauth2.googleapis.com/token
 
    x.  Add the below scopes:
 
          https://www.googleapis.com/auth/calendar
    
    xi. Copy Refresh Token URL:

          https://oauth2.googleapis.com/token

 5. Save **Authorization Profile**.
 
 6. Select the created Authorization Profile to complete integration.
 
 7. Click **Authorize**.
 
 8. It will redirect you to the Google login page **https://accounts.google.com**. 
 
 9. Provide your credentials to connect with your Google account.
   
 10. Click **Enable**.
    

 
**Allow Users to Authorize the Integration**
 
This method requires the end user to provide credentials during the conversation for authorization.
 
 **OAuth - Custom**
 
 You can create your authorization profile to obtain an access token and use it to complete integration.
 
 1. Select **Custom**.
 
 2. Click **Select Authorization**.
 
 3. Select **Create New**.
 
 4. Select the type of authorization mechanism.
    
    i. Select OAuth v2
    
    ii. Navigate to **[console.cloud.google.com](console.cloud.google.com)** and log in.

    iii. Create a Google Cloud project. [refer](https://developers.google.com/workspace/guides/create-project).

    iv. Enable Google Workspace APIs. [refer](https://developers.google.com/workspace/guides/enable-apis).

    v. Configure the OAuth consent screen and choose scopes. [refer](https://developers.google.com/workspace/guides/configure-oauth-consent).
 
    vi. Create access credentials. [refer](https://developers.google.com/workspace/guides/create-credentials#oauth-client-id)
 
    vii. Copy the Client ID and Client Secret to the Kore.ai platform from [here](https://console.cloud.google.com/workspace-api/credentials).
 
    viii. Copy Authorization URL:
   
          https://accounts.google.com/o/oauth2/v2/auth?access_type=offline&prompt=consent
 
    ix. Copy Token URL:
    
          https://oauth2.googleapis.com/token
 
    viii.  Add the below scopes:
 
          https://www.googleapis.com/auth/calendar
    
    ix. Copy Refresh Token URL:

          https://oauth2.googleapis.com/token

 5. Save **Authorization Profile**.
 
 6. Select the created Authorization Profile to complete integration.
 
 7. Click **Authorize**.
 
 8. It will redirect you to the Google login page **https://accounts.google.com**. 
 
 9. Provide your credentials to connect with your Google account.
   
 10. Click **Enable**.

<container>

**What can be achieved by integrating Google Calendar with the Kore.ai Platform?**
 
The Kore.ai Platform supports all common actions on Google Calendar with pre-built dialog templates that are ready to use. 
 
**Templates Supported**

| Action           | Description            |
|------------------|------------------------|
|Get Event Details|View a specific Event by ID|
|Create Calendar Event |Create a new calendar event|
|Get busy time slots based on Date range         |Fetch a list of events based on date: From date - to date|
|Get busy time slots based on a Pre-defined Date range |Fetch a list of events based on the user’s input|
|Get busy time slots based on Attendee Name      |Fetch a list of events based on the attendee name in an event|

</container>
