# This is an sync lightbox script.

see it in action! http://codepen.io/ben-walters/pen/Fcgwj <br>
**note** The aSync doesnt work due to codepens magic<br>

## Requires
jQuery 1.7+ http://jquery.com/  <br>
Ajax form   *included in folder*    <br>

## Usage
**js functions**    <br>
lbgo('url to load');    <br>
lbchange('url to load');    <br>
lbclose();    <br>

## Notes
* Will only support same-domain requests
* Uses ajax form to bind loaded forms and reload response to same lightbox window via lbchange();
* packaged.min.js contains *both* ajaxForm **and** lightbox.js minified
