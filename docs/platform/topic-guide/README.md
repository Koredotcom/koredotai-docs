
## Instructions to write topic guide documentation

Every document need front matters  which shows the title and document link.

<pre>
  ---
  title: <title>

  permalink: platform/topic-guide/< version >/< topic name >

---
</pre>

`title` :It is a document title
`permalink` is the actual link to access the document from the bot builder.

Topic guide has the 4 sections:

 - Introduction
 - FAQs
 - Videos
 - Document links

Every section is represented with accordion.

###Introduction
 Introduction has collapsed content to show the below components.
 - Video
 - Heading
 - Short description
Sample markup to rended the introduction section

<pre>
 <details class="introduction-video">
  <summary>Introduction
  </summary>
  
   [![Introduction to Interruption Management](https://i.vimeocdn.com/video/873029368-78a366b9407757e066a37718d766be53d3cb90d7f27708590ca16a1400e95b89-d?mw=1300&mh=975&q=70)](https://drive.google.com/file/d/1kWjibI1pX86gAGM7KZxAOVjE_dU2pNYk/preview)

  #####  < Sample heading >
 < Short description >

</details>
</pre>
 
 


Topic guide supports the following widgets to render the markdown with rich user interface: 
 - Links
 - Document links
 - Accordions
 - Nested accordions
 - Videos thumbnails
 
 
 **Links** : To render the links with markdown
 
 
