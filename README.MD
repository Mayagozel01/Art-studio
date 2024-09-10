# STUIDIOAB WEBSITE
(ne obrashay vnimanie na `index.html` fayle v root directory. Etot fayl initial index, kotory prihodil s Ya ne hotel )


1.
> Some include errors can occurres if the model using either file:// or C:/, which stays true to the error message as they are not `http://`
So you can either install a webserver in your local PC or upload the model somewhere else and use jsonp and change the url to `http://example.com/path/to/model`
Origin is defined in RFC-6454 as
```
   ...they have the same
   scheme, host, and port.  (See Section 4 for full details.)
```
>So even though your file originates from the same host (localhost), but as long as the scheme is different (http / file), they are treated as different origin.

dumayu chto ty ponyala(goni faylyn ozuni achsang html fayly beyleki html ishinde include etseng chekip bilenok cors err diyami, shonun un vs code `live server` extension ulanay, shonda achya ishleya bez problem)
header footer zat sheyle import edishdirip ullanyp gider yaly component component edip yazmak isledim. tak bolmasa copy/paste edip gidiberjek gerekdal diyseng include ayyryp gitsengem bolya.

***

2.
tut vse images ne smogli display image, potomu chto ne naytyotsya. Ty posmotri(sleduy) tut vnutri `src/style/helpers/_helpers.sass` dayla est `image` i mozhno otdat params as image directory. Kak mozhno ispolzhovat eto?

***

3.
tut ty ispolzovala `.scss` format, no tut v moem `.sass`.

***

4.
tut main.html rabotaet normalno. no tut `portfolio.html` eto tvoy portfolio, i ne znau (maybe) tam putaut tvoih i iz style.css classes..
zdes est odno header, i zachem tebe snova pisat tot zhe kod?!)

