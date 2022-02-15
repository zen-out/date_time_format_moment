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
<a name="FormatDateTime"></a>

## FormatDateTime
**Kind**: global class  
**Date**: 2022-01-13  

* [FormatDateTime](#FormatDateTime)
    * [new FormatDateTime()](#new_FormatDateTime_new)
    * [.getType(date)](#FormatDateTime+getType) ⇒ <code>moment</code>
    * [.isBefore(start, end)](#FormatDateTime+isBefore) ⇒ <code>moment</code>
    * [.getDuration(start, end, type)](#FormatDateTime+getDuration) ⇒ <code>moment</code>
    * [.getReadableFormat(getDate, type)](#FormatDateTime+getReadableFormat) ⇒ <code>moment</code>
    * [.difference(one, two, type)](#FormatDateTime+difference) ⇒ <code>moment</code>
    * [.format(date, type)](#FormatDateTime+format) ⇒ <code>moment</code>
    * [.digitalToSeconds(string)](#FormatDateTime+digitalToSeconds) ⇒ <code>moment</code>
    * [.formatDateToPost(stringInput)](#FormatDateTime+formatDateToPost) ⇒ <code>moment</code>
    * [.secondsString(seconds)](#FormatDateTime+secondsString) ⇒ <code>moment</code>
    * [.isBetween(start, end)](#FormatDateTime+isBetween) ⇒ <code>moment</code>
    * [.secondsToDigital(seconds)](#FormatDateTime+secondsToDigital) ⇒ <code>moment</code>
    * [.getDate(getDate, option)](#FormatDateTime+getDate) ⇒ <code>moment</code>

<a name="new_FormatDateTime_new"></a>

### new FormatDateTime()
let formatDateTime = new FormatDateTime()

<a name="FormatDateTime+getType"></a>

### formatDateTime.getType(date) ⇒ <code>moment</code>
**Kind**: instance method of [<code>FormatDateTime</code>](#FormatDateTime)  
**Date**: 2022-01-13  

| Param | Type |
| --- | --- |
| date | <code>any</code> | 

**Example**  
```js
getType(Date)
"2022-03-01T19:06:31.047Z"
         "00:22:00"
         "March 1, 2022"
         "Mar 1, 2022"
         "2022-03-01"
         "01-03-2022"
         "2022/03/01"
         new Date()
         23
```
<a name="FormatDateTime+isBefore"></a>

### formatDateTime.isBefore(start, end) ⇒ <code>moment</code>
Good to use if you want to see a date is before another

**Kind**: instance method of [<code>FormatDateTime</code>](#FormatDateTime)  
**Date**: 2022-01-20  

| Param | Type |
| --- | --- |
| start | <code>any</code> | 
| end | <code>any</code> | 

**Example**  
```js
console.log(formatDateTime.isBetween("March 3, 2020", "March 10, 2021"))
```
<a name="FormatDateTime+getDuration"></a>

### formatDateTime.getDuration(start, end, type) ⇒ <code>moment</code>
**Kind**: instance method of [<code>FormatDateTime</code>](#FormatDateTime)  
**Date**: 2022-01-13  

| Param | Type |
| --- | --- |
| start | <code>any</code> | 
| end | <code>any</code> | 
| type | <code>any</code> | 

**Example**  
```js
console.log(formatDateTime.getDuration("2022-03-01T19:06:31.047Z", "2022-03-01T20:04:32.047Z", "seconds")) // 3481
         console.log(formatDateTime.getDuration("2022-04-01T19:06:31.047Z", "2022-06-01T20:04:32.047Z", "days")) // 61.040289351851854
```
<a name="FormatDateTime+getReadableFormat"></a>

### formatDateTime.getReadableFormat(getDate, type) ⇒ <code>moment</code>
**Kind**: instance method of [<code>FormatDateTime</code>](#FormatDateTime)  
**Date**: 2022-01-13  

| Param | Type | Default |
| --- | --- | --- |
| getDate | <code>any</code> |  | 
| type | <code>any</code> | <code>from</code> | 

**Example**  
```js
getReadableFormat("Dec 11, 2012", "from") in 2 months
getReadableFormat("Dec 11, 2012", "to") 2 months ago
```
<a name="FormatDateTime+difference"></a>

### formatDateTime.difference(one, two, type) ⇒ <code>moment</code>
**Kind**: instance method of [<code>FormatDateTime</code>](#FormatDateTime)  
**Date**: 2022-01-13  

| Param | Type |
| --- | --- |
| one | <code>any</code> | 
| two | <code>any</code> | 
| type | <code>any</code> | 

**Example**  
```js
console.log(formatDateTime.difference("00:22:00", "00:44:00", "seconds"))
         console.log(formatDateTime.difference("March 1, 2020", "March 1, 2021", "months"))
```
<a name="FormatDateTime+format"></a>

### formatDateTime.format(date, type) ⇒ <code>moment</code>
**Kind**: instance method of [<code>FormatDateTime</code>](#FormatDateTime)  
**Date**: 2022-01-13  

| Param | Type | Description |
| --- | --- | --- |
| date | <code>any</code> |  |
| type | <code>any</code> | localInput, dateInput, timeInput, |

**Example**  
```js
console.log(formatDateTime.format("Dec 11, 2012", "HHMMSS"))
console.log(formatDateTime.format("March 1, 2022", "dateInput")) 2022 - 03 - 01 < input type = "date" / >
        //  console.log(formatDateTime.format("March 1, 2022", "timeInput")) 00:00:00 <input type="time" step="1" />
         console.log(formatDateTime.format("March 1, 2022", "localInput")) 2022 - 03 - 01 T00: 00: 00 < input type = "datetime-local"
         step = "1" / >
```
<a name="FormatDateTime+digitalToSeconds"></a>

### formatDateTime.digitalToSeconds(string) ⇒ <code>moment</code>
**Kind**: instance method of [<code>FormatDateTime</code>](#FormatDateTime)  
**Date**: 2022-01-13  

| Param | Type |
| --- | --- |
| string | <code>any</code> | 

**Example**  
```js
digitalToSeconds(00:33:22) -> seconds
```
<a name="FormatDateTime+formatDateToPost"></a>

### formatDateTime.formatDateToPost(stringInput) ⇒ <code>moment</code>
**Kind**: instance method of [<code>FormatDateTime</code>](#FormatDateTime)  
**Date**: 2022-01-13  

| Param | Type |
| --- | --- |
| stringInput | <code>any</code> | 

**Example**  
```js
formatDateToPost(stringInput)
```
<a name="FormatDateTime+secondsString"></a>

### formatDateTime.secondsString(seconds) ⇒ <code>moment</code>
**Kind**: instance method of [<code>FormatDateTime</code>](#FormatDateTime)  
**Date**: 2022-01-13  

| Param | Type |
| --- | --- |
| seconds | <code>any</code> | 

**Example**  
```js
secondsString(seconds)
```
<a name="FormatDateTime+isBetween"></a>

### formatDateTime.isBetween(start, end) ⇒ <code>moment</code>
Good to use if you want to see a date is before another

**Kind**: instance method of [<code>FormatDateTime</code>](#FormatDateTime)  
**Date**: 2022-01-20  

| Param | Type |
| --- | --- |
| start | <code>any</code> | 
| end | <code>any</code> | 

<a name="FormatDateTime+secondsToDigital"></a>

### formatDateTime.secondsToDigital(seconds) ⇒ <code>moment</code>
console.log(formatDateTime.secondsToDigital(23423)) 06: 30: 23

**Kind**: instance method of [<code>FormatDateTime</code>](#FormatDateTime)  
**Date**: 2022-01-13  

| Param | Type |
| --- | --- |
| seconds | <code>any</code> | 

<a name="FormatDateTime+getDate"></a>

### formatDateTime.getDate(getDate, option) ⇒ <code>moment</code>
getDate(date, options)

**Kind**: instance method of [<code>FormatDateTime</code>](#FormatDateTime)  
**Date**: 2022-01-13  

| Param | Type |
| --- | --- |
| getDate | <code>any</code> | 
| option | <code>any</code> | 

