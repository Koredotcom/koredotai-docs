
## Instructions to write topic guide documentation

Every document need front matters  which shows the title and document link.

```html
  ---
  title: <title>

  permalink: platform/topic-guide/< version >/< topic name >

---
```

`title` :It is a document title

`permalink` is the actual link to access the document from the bot builder.

Topic guide has the 4 sections:

 - Introduction
 - FAQs
 - Videos
 - Document links

Every section is represented with accordion.

### Introduction

 Introduction has collapsed content to show the below components.
 - Video
 - Heading
 - Short description
 
Sample markup to rended the introduction section


```html

  <details class="introduction-video">
  <summary>Introduction
  </summary>
  
   [![<smaple title>](<Sample thumbnail image>)](<sample video link>)

  #####  < Sample heading >
 < Short description >

</details>
```

### FAQs

FAQs has two different markdown widgets, one is each question has short description which is collapsible, binded link.

The collapsible sections for the question can be written as:

``` html
<details>
  <summary>FAQs
  </summary>
 <a class="nested-accordian-link" target="_blank" href="<link for the question>">

  <details class="nested-details">
 
  <summary> YOur question goes here ?
  </summary>

 
   Short description and it allows all the markdown content

  </details>
 </a>
  
</details>


```

Second variant for the question is just to render the link.

```html

<details>
  <summary>FAQs
  </summary>

  <a class="doc-link" target="_blank" href="<sample link>">
 
   Your question goes here ?

</a>
  
</details>

```
 
 

### Videos

 This sectionis to render the list of videos.
 
 Below is the markdow synax to render the videos
 
 ```html
<details >
  <summary>Videos
  </summary>

   <details-video>
   
   [![<video title>](<thubmail link>)](<video link>)

  ##### Heading text goes here!
  < Short description for the video>

   </details-video>
     
      <details-video>
   
   [![<video title>](<thubmail link>)](<video link>)

  ##### Heading text goes here!
  < Short description for the video>

   </details-video>
  
</details>

```
 
 
 ### Document links

  This is not collapsible content.
It is to render the document link with document icon.

```html
  <a class="doc-link" href="< document link>">
 
  ![alt text](images/docIcon.svg "Title")

 #### <Heading>

 < Short document info>

</a>

```
 
