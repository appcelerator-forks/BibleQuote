![Header Image](bible.png "Bible Quote Aggregate Service")

# Bible Quote Aggregate Service

The Bible API Aggregate Web Service brings together a number of Bible APIs on the web to offer a comprehensive set of Bibles to quote from. This service offers two REST-based APIs: [getVersions](#getVersions) and [getQuote](#getQuote).

## [getVersions](id:getVersions)

Lists all supported Bible versions.

### Format

```
http://service/getVersions
```

### Returns

This returns a JSON object of key/value pairs. The keys are the keys that can be used as the Bible *version* parameter in the [getQuote](#getQuote) service and the values are objects with title, description, and copyright entries in plain text. 

#### Example
```
{ 
	asv: { 
	id: "asv",
	title : "American Standard Version", 
	copyright : "Public Domain", 
	description : "The ASV has long been regarded by many scholars..."
	}, ...
}
```
### Currently Available Bible Versions

##[getQuote](id:getQuote)

Look up a book/chapter/verse in a particular Bible version. 

###Format
```
http://service/getQuote/?version=<version>&book=<book>&chapter=<chapter>&verse=<verse>
```
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| version | *string* | One of the keys listed in the [getVersions](#getVersions) call. |
| book | *string* | One of the books of the bible. |
| chapter | *number* | A chapter within the book. |
| verse | number or range | 	Number or range of numbers within the chapter. A range is signified by a number followed by minus sign and then another number. |

####Example
```
http://service/getQuote/?version=esv&book=John&chapter=3&verse=16
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

