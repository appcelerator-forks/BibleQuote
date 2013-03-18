![Header Image](bible.png "Bible Quote Aggregate Service")

# Bible Quote Aggregate Service

The Bible API Aggregate Web Service brings together a number of Bible APIs on the web to offer a comprehensive set of Bibles to quote from. This service offers three REST-based APIs: [versions.json](#versions.json), [version.json](#version.json), and [quote.json](#quote.json).


## [versions.json](id:versions.json)

Lists all supported Bible versions.

### Format

```
http://service/versions.json
```

### Returns

This returns a JSON object of key/value pairs. The keys are the keys that can be used as the Bible *version* parameter in the [quote.json](#quote.json) service and the values are objects with title, description, and copyright entries in plain text. 

#### Example
```
{ 
	asv: { 
		id: "asv",
		title : "American Standard Version", 
		copyright : "Public Domain", 
		description : "The ASV has long been regarded by many scholars..."
	}, 
	amp: {
		id: "amp",
		
	}, ...
}
```
### Currently Available Bible Versions

##[version.json](id:version.json)

Gets information about a particular Bible version. 

###Format
```
http://service/version.json/?version=<version>
```
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| version | *string* | One of the keys listed in the [versions.json](#versions.json) call. |

####Example
```
http://service/version.json/?version=esv
```
###Returns

This returns a JSON object of key/value pairs for the version including title, description, and copyright entries in plain text.

####Example
```
{
    id: "esv",
    title: "English Standard Version",
    copyright: "Copyright 2001 by Crossway, a publishing ministry of Good News Publishers.",
    description: "The ESV Bible (English Standard Version) is an “essentially literal” translation of the Bible in contemporary English. The ESV Bible emphasizes “word-for-word” accuracy, literary excellence, and depth of meaning."
}
```
##[quote.json](id:quote.json)

Look up a book/chapter/verse in a particular Bible version. 

###Format
```
http://service/quote.json/?version=<version>&book=<book>&chapter=<chapter>&verse=<verse>
```
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| version | *string* | One of the keys listed in the [versions.json](#versions.json) call. |
| book | *string* | One of the books of the bible. |
| chapter | *number* | A chapter within the book. |
| verse | number or range | 	Number or range of numbers within the chapter. A range is signified by a number followed by minus sign and then another number. |

####Example
```
http://service/quote.json/?version=esv&book=John&chapter=3&verse=16
```
###Returns

A JSON object with the version, book, chapter, verse, and associated passage.

####Example
```
{
	version: 'esv',
	book: 'John',
	chapter: 3, 
	verse: 16, 
	text: "\"For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.""
}
```
##Credits

Many thanks to the following services: [Biblia.com](http://api.biblia.com/docs/), [Bible Search](http://bibles.org/pages/api), [ESV Bible Web Service](http://www.esvapi.org/api), and [Bible.org](https://labs.bible.org/api_web_service)

