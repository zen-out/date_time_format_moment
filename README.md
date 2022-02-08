![NPM Downloads](https://img.shields.io/npm/dw/format_date_time_moment)

# format_date_time_moment

The purpose is to make it easier to format dates (given whatever input the date may be in)

## Table of Contents

<!-- toc -->

* [Install](#install)
* [API](#api)
  + [FormatDateTime](#formatdatetime)

## Install

## Directions

1. Install the package 

```
npm install format_date_time_moment
```

2. In your html document, import the script (make sure to import it after your ***JQuery AND moment*** script, and before your javascript file)

```
<script src="https://code.jquery.com/jquery-3.5.1.js" integrity="sha256-QWo7LDvxbWT2tbbQ97B53yJnYU3WhH/C8ycbRAkjPDc=" crossorigin="anonymous"></script>
    <script src='https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.9.0/moment.js' integrity='sha512-Bm8FBfOFILW7qzf514l/KJaW+VKYyErRPjBRcpCJ1IfmBJcL9PRSBo6fyhE0i8BBmBbiMyQrNC97m1b1dDWM0g==' crossorigin='anonymous'></script>
    <script src='https://cdn.jsdelivr.net/npm/format_date_time_moment/index.js' type='text/javascript'></script>
```

3. Create javascript file - make sure to put all your jquery selectors after the instantiator - e.g., 

```
$(() => {
   console.log(formatDateTime.getType("2022-03-01T19:06:31.047Z"))
})
```

```
<script src="yourScript.js"></script>
```

## API

<!-- api -->
<a name="HandlebarsToJSRender"></a>

## HandlebarsToJSRender
**Kind**: global class  
**Date**: 2022-02-08  

* [HandlebarsToJSRender](#HandlebarsToJSRender)
    * [new HandlebarsToJSRender(options)](#new_HandlebarsToJSRender_new)
    * [.init()](#HandlebarsToJSRender+init) ⇒ <code>null</code>
    * [.resetFile()](#HandlebarsToJSRender+resetFile) ⇒ <code>null</code>
    * [.replaceSyntax(testOne)](#HandlebarsToJSRender+replaceSyntax) ⇒ <code>any</code>
    * [.replaceAll(string, original, itemToReplace)](#HandlebarsToJSRender+replaceAll) ⇒ <code>string</code>
    * [.replaceForBuild(string)](#HandlebarsToJSRender+replaceForBuild) ⇒ <code>string</code>
    * [.readFolder()](#HandlebarsToJSRender+readFolder)
    * [.replaceForProduction(string)](#HandlebarsToJSRender+replaceForProduction) ⇒ <code>string</code>
    * [.getBeginningTemplate()](#HandlebarsToJSRender+getBeginningTemplate) ⇒ <code>string</code>
    * [.getEndingTemplate()](#HandlebarsToJSRender+getEndingTemplate) ⇒ <code>string</code>

<a name="new_HandlebarsToJSRender_new"></a>

### new HandlebarsToJSRender(options)
let handlebarsToJSRender = new HandlebarsToJSRender({folderPaths: [""], dictionary: {STRING_TO_REPLACE_HBSSYNTAX: HBSSYNTAX}})


| Param | Type |
| --- | --- |
| options | <code>any</code> | 

<a name="HandlebarsToJSRender+init"></a>

### handlebarsToJSRender.init() ⇒ <code>null</code>
Will reset the entire file

**Kind**: instance method of [<code>HandlebarsToJSRender</code>](#HandlebarsToJSRender)  
**Date**: 2022-02-08  
<a name="HandlebarsToJSRender+resetFile"></a>

### handlebarsToJSRender.resetFile() ⇒ <code>null</code>
Resets index.html file

**Kind**: instance method of [<code>HandlebarsToJSRender</code>](#HandlebarsToJSRender)  
**Date**: 2022-02-08  
<a name="HandlebarsToJSRender+replaceSyntax"></a>

### handlebarsToJSRender.replaceSyntax(testOne) ⇒ <code>any</code>
Replaces all partials {{> }} with {{include templ=''}}
Replaces {{#each data}}{{/each}} with {{for data}}{{/for}}

**Kind**: instance method of [<code>HandlebarsToJSRender</code>](#HandlebarsToJSRender)  
**Date**: 2022-02-08  

| Param | Type |
| --- | --- |
| testOne | <code>any</code> | 

<a name="HandlebarsToJSRender+replaceAll"></a>

### handlebarsToJSRender.replaceAll(string, original, itemToReplace) ⇒ <code>string</code>
1. While string includes second parameter
2. Replace with third parameter

**Kind**: instance method of [<code>HandlebarsToJSRender</code>](#HandlebarsToJSRender)  

| Param | Type |
| --- | --- |
| string | <code>string</code> | 
| original | <code>string</code> | 
| itemToReplace | <code>string</code> | 

<a name="HandlebarsToJSRender+replaceForBuild"></a>

### handlebarsToJSRender.replaceForBuild(string) ⇒ <code>string</code>
will replace all the items that you have with regular text so we can render it via jsrender

**Kind**: instance method of [<code>HandlebarsToJSRender</code>](#HandlebarsToJSRender)  
**Date**: 2022-02-08  

| Param | Type |
| --- | --- |
| string | <code>any</code> | 

<a name="HandlebarsToJSRender+readFolder"></a>

### handlebarsToJSRender.readFolder()
1. Reads through options.folderPaths, and if wrap is true, will wrap around x-jsrender tag 
2. Will also give the id as its file name

**Kind**: instance method of [<code>HandlebarsToJSRender</code>](#HandlebarsToJSRender)  
**Date**: 2022-02-08  
<a name="HandlebarsToJSRender+replaceForProduction"></a>

### handlebarsToJSRender.replaceForProduction(string) ⇒ <code>string</code>
replaceForProduction(string)
1. Loops through dictionary
2. Replaces all instances of the value, if key found in string 
3. Returns string

**Kind**: instance method of [<code>HandlebarsToJSRender</code>](#HandlebarsToJSRender)  
**Date**: 2022-02-08  

| Param | Type |
| --- | --- |
| string | <code>any</code> | 

<a name="HandlebarsToJSRender+getBeginningTemplate"></a>

### handlebarsToJSRender.getBeginningTemplate() ⇒ <code>string</code>
getBeginningTemplate()

**Kind**: instance method of [<code>HandlebarsToJSRender</code>](#HandlebarsToJSRender)  
**Date**: 2022-02-08  
<a name="HandlebarsToJSRender+getEndingTemplate"></a>

### handlebarsToJSRender.getEndingTemplate() ⇒ <code>string</code>
getEndingTemplate()

**Kind**: instance method of [<code>HandlebarsToJSRender</code>](#HandlebarsToJSRender)  
**Date**: 2022-02-08  
