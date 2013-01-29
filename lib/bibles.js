var str= require('../lib/strings');

// The bibles.org API returns a CDATA encapsulated string with superscripts and spans
function biblesOrgStripper(phrase) {
    phrase = JSON.parse(phrase);
    phrase = phrase.search[0].result.passages.passage_1.text_preview;   // Burrow through the object.

    // Strip CDATA stuff
    phrase = phrase.replace(/<!\[CDATA\[/g, "");
    phrase = phrase.replace(/\]\]>/g, "");
    // Strip the superscripts
    phrase = phrase.replace(/<sup .*?>.*?<\/sup>/g, "");
    // Strip the span information
    phrase = phrase.replace(/<\/*span.*?>/g, "");
    // Strip out any lists
    phrase = phrase.replace(/<\/*ul.*?>/g, "");
    phrase = phrase.replace(/<\/*li.*?>/g, "");
    
    return phrase;
}

function bibliaOptions(version, verse) {
    return {
        "key" : '3559a4fd6f30ea12fec006e5a6c061f8',
        "passage" : verse
    };
}

function bibliaStripper(phrase) {
    phrase = JSON.parse(phrase);
    return phrase.text;
}

function esvOptions(version, verse) {
    return {
        "key" : "3b06c58d0d40201b",
        "passage" : verse,
        "output-format" : "plain-text",
        "include-passage-references" : false,
        "include-first-verse-numbers" : false,
        "include-verse-numbers" : false,
        "include-footnotes" : false,
        "include-copyright" : false,
        "include-passage-horizontal-lines" : false,
        "include-heading-horizontal-lines" : false,
        "include-headings" : false,
        "include-subheadings" : false,
        "include-selahs" : false,
        "line-length" : 0
    };
}

function netOptions(version, verse) {
    return {
        "passage" : verse,
        "formatting" : "plain",
        "type" : "text"
    };
}

function netStripper(phrase) {
    // Net bible has some chapter/verse entries bolded throughout the quote.
    return phrase.replace(/<b>.+?<\/b>\s/g, "");
}
function esvStripper(phrase) {
    // ESV bible has a bug at the end.
    return phrase.replace(/\s?\(ESV\)\s?$/, "");
}

module.exports = {
    'asv': {
        id: 'asv',  // api.biblia.com
        title: str.L('asv.name'),
        copyright: str.L('asv.copyright'),
        description: str.L('asv.desc'),
        host: 'http://api.biblia.com',
        path: '/v1/bible/content/%version.txt.js',
        options: bibliaOptions,
        stripper: bibliaStripper
    },
    'amp': {
        id: 'amp', // bibles.org
        title: str.L('amp.name'),
        copyright: str.L('amp.copyright'),
        description: str.L('amp.desc'),
        host: 'https://%auth@bibles.org',
        path: '/%version/passages.js?q[]=%verse',
        stripper: biblesOrgStripper,
        auth: 'uuzkgv7VOFPg03SgRw3JaKfWQh8C2kynUlO1XLMm:X'
    },
    'cev': {
        id: 'cev', // bibles.org
        title: str.L('cev.name'),
        copyright: str.L('cev.copyright'),
        description: str.L('cev.desc'),
        host: 'https://%auth@bibles.org',
        path: '/%version/passages.js?q[]=%verse',
        stripper: biblesOrgStripper,
        auth: 'uuzkgv7VOFPg03SgRw3JaKfWQh8C2kynUlO1XLMm:X'
    },
    'darby': {
        id: 'darby', // api.biblia.com
        title: str.L('darby.name'),
        copyright: str.L('darby.copyright'),
        description: str.L('darby.desc'),
        host: "http://api.biblia.com",
        path: '/v1/bible/content/%version.txt.js',
        options: bibliaOptions,
        stripper: bibliaStripper
    },
    'emphbbl': {
        id: 'emphbbl', // api.biblia.com
        title: str.L('emphbbl.name'),
        copyright: str.L('emphbbl.copyright'),
        description: str.L('emphbbl.desc'),
        host: "http://api.biblia.com",
        path: '/v1/bible/content/%version.txt.js',
        options: bibliaOptions,
        stripper: bibliaStripper
    },
    'esv': {
        id: 'esv', // www.esvapi.org
        title: str.L('esv.name'),
        copyright: str.L('esv.copyright'),
        description: str.L('esv.desc'),
        host: 'http://www.esvapi.org',
        path: '/v2/rest/passageQuery',
        options: esvOptions,
        stripper: esvStripper
    },
    'gnt': {
        id: 'gnt',  // bibles.org
        title: str.L('gnt.name'),
        copyright: str.L('gnt.copyright'),
        description: str.L('gnt.desc'),
        host: 'https://%auth@bibles.org',
        path: '/%version/passages.js?q[]=%verse',
        stripper: biblesOrgStripper,
        auth: 'uuzkgv7VOFPg03SgRw3JaKfWQh8C2kynUlO1XLMm:X'
    },
    'kjv': {
        id: 'kjv',  // api.biblia.com
        title: str.L('kjv.name'),
        copyright: str.L('kjv.copyright'),
        description: str.L('kjv.desc'),
        host: 'http://api.biblia.com',
        path: '/v1/bible/content/%version.txt.js',
        options: bibliaOptions,
        stripper: bibliaStripper
    },
    'net': {
        id: 'net', // labs.bible.org
        title: str.L('net.name'),
        copyright: str.L('net.copyright'),
        description: str.L('net.desc'),
        host: 'http://labs.bible.org',
        path: '/api/',
        options: netOptions,
        stripper: netStripper
    },
    'nasb': {
        id: 'nasb', // bibles.org
        title: str.L('nasb.name'),
        copyright: str.L('nasb.copyright'),
        description: str.L('nasb.desc'),
         host: 'https://%auth@bibles.org',
        path: '/%version/passages.js?q[]=%verse',
        stripper: biblesOrgStripper,
        auth: 'uuzkgv7VOFPg03SgRw3JaKfWQh8C2kynUlO1XLMm:X'
    },
    'ylt': {
        id: 'ylt',  // api.biblia.com
        title: str.L('ylt.name'),
        copyright: str.L('ylt.copyright'),
        description: str.L('ylt.desc'),
        host: 'http://api.biblia.com',
        path: '/v1/bible/content/%version.txt.js',
        options: bibliaOptions,
        stripper: bibliaStripper
    }
};