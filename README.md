[![logo](https://raw.githubusercontent.com/redaktor/style/master/assets/readme/logo.png)](#)

**sebilasse/compressDE**<br>
Semantic Compression Demo<br>
[![-](https://raw.githubusercontent.com/redaktor/style/master/assets/readme/lineBlue.png)](#)<br>

# Compression for language DE (demo) TypeScript


## Features

- semantic compression of German language text (around 75%, e.g. compressed demo is 25.288%)
- demo is just a part of redaktor/compress to compress multilingual ActivityPub Objects
- result is a Uint8Array e.g. suitable for storing in deno.kv

```javascript
import { compressDE, expandDE } from './lexica/DE.ts';
const text = `Bitte werfen Sie eine Münze ein. Hier erfahren Sie Ihre persönliche Glücksmelodie.`;
const compressedUint8Array = compressDE(text);
const expandedString = expandDE(compressedUint8Array);
```

## How do I use this package?
see above, for a demo: 
cd to main directory
```
deno run './demo.ts'
```

Remarks

See also [language detection](https://github.com/redaktor/languages/)<br>
This is just a demo for a module to compress [multilanguage](https://www.w3.org/TR/activitystreams-core/#naturalLanguageValues)* ActivityPub Objects up to 15% of it's original size in a database – <br>
The lexicon comes from the current German News Corpus mixed with an anonymized fediverse corpus.<br>
It is a WIP, and you can generate lexica for any language from a supplied text corpus or an URL plus a normalize-function.
The default normalize-function will be for the [Corpora Collection Leipzig](https://corpora.uni-leipzig.de/en?corpusId=eng_news_2024)

* [Primer](https://www.w3.org/wiki/Activity_Streams/Primer/Language_mapping)
