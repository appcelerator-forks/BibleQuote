exports.L = function(id) {
    var a = id.split(".");
    var b = __strings;
    var i;
    for (i in a) {
        if (!b) break;
        b = b[a[i]];
    }
    return b ? b : id;
};

var __strings = {
    asv: { 
        name: "American Standard Version",
        copyright: "Public Domain",
        desc: "The ASV has long been regarded by many scholars as the most literal English translation since the King James Version—maybe the most literal translation ever. This has made the translation very popular for careful English Bible study, but not for ease of reading. While the KJV was translated entirely from 'western manuscripts', the ASV 1901 was influenced also by the older 'eastern manuscripts' that form the basis for most of our modern English translations. Because the ASV 1901 is very difficult to find in print, Logos is pleased to be able to preserve and distribute this significant work. This is an excellent choice for comparative English study.",
    },
    amp: { 
        name: "Amplified Bible",
        copyright: "All rights reserved. For Permission To Quote information visit http://www.lockman.org/",
        desc: "The Amplified Bible (AMP) is an English translation of the Bible produced jointly by The Zondervan Corporation and The Lockman Foundation. The first edition was published in 1965. It is largely a revision of the American Standard Version of 1901, with reference made to various texts in the original languages. It is designed to 'amplify' the text by using a system of punctuation and other typographical features to bring out all shades of meaning present in the original texts.",
    },
    cev: { 
        name: "Contemporary English Version",
        copyright: "Copyright 2006, American Bible Society",
        desc: "The Contemporary English Version or CEV (also known as Bible for Today's Family) is a translation of the Bible into English, published by the American Bible Society.",
    },
    darby: { 
        name: "1890 Darby Bible",
        copyright: "Public Domain",
        desc: "As an ex-Anglican minister and the founder of the Plymouth Brethren, Darby's influence started the Niagara Conferences, which were the beginnings of prophetically-oriented Bible conferences in America. First published in 1890, this translation comes after Darby's understanding of the original languages matured during the writing of his French and German translations of the Bible.",
    },
    emphbbl: { 
        name: "The Emphasized Bible",
        copyright: "Public Domain",
        desc: "The Emphasized Bible, by Joseph Bryant Rotherham, is a unique translation which helps English-only Bible readers to understand the linguistic and literary nuances of the Greek and Hebrew texts. This translation aims for a literal rendering of the original languages, and adds markings to the English text to indicate emphases, parallel structures, and the other linguistic features. It also includes accent marks, brackets, indentations, and other markings within the text itself, to help communicate the features in Greek and Hebrew which are lost in translation.",
    },
    esv: { 
        name: "English Standard Version",
        copyright: "Copyright 2001 by Crossway, a publishing ministry of Good News Publishers.",
        desc: "The ESV Bible (English Standard Version) is an “essentially literal” translation of the Bible in contemporary English. The ESV Bible emphasizes “word-for-word” accuracy, literary excellence, and depth of meaning.",
    },
    gnt: { 
        name: "Good News Translation",
        copyright: "Copyright 1992 by American Bible Society. Used by Permission.",
        desc: "The Good News Bible (GNB), also called the Good News Translation (GNT), is an English language translation of the Bible by the American Bible Society, first published as the New Testament under the name Good News for Modern Man in 1966.",
    },
    kjv: { 
        name: "King James Version",
        copyright: "Public Domain",
        desc: "Also known as the 'Authorized Version', The King James Version of the Bible is still the most widely used text in the English language. The Logos KJV includes the Strong's Numbers which allow English readers to identify and search for underlying Greek and Hebrew words in the original text.",
    },
    net: { 
        name: "The NET Bible",
        copyright: "Copyright 1996-2006 by Biblical Studies Press, L.L.C.",
        desc: "The NET Bible is a completely new translation of the Bible with 60,932 translators' notes! It was completed by more than 25 scholars – experts in the original biblical languages – who worked directly from the best currently available Hebrew, Aramaic, and Greek texts.",
    },
    nasb: { 
        name: "New American Standard Bible",
        copyright: "New American Standard Bible (NASB) Copyright 1960, 1962, 1963, 1968, 1971, 1972, 1973, 1975, 1977, 1995 by The Lockman Foundation, La Habra, CA. All rights reserved. Used by Permission.",
        desc: "The New American Standard Bible (NASB), also informally called the New American Standard Version (NASV), is an English translation of the Bible. The New Testament was first published in 1963. The complete Bible was published in 1971.",
    },
    ylt: { 
        name: "Young's Literal Translation",
        copyright: "Public Domain",
        desc: "Robert Young is best known for his monumental work, Young's Analyte. Young's Literal Translation is a very good work to add to your Bible collection for text comparisons. Since this is a very literal translation, it offers a good contrast and comparison to a dynamic equivalent translatical Concordance To The Biblion like the NIV.",
    }
};
