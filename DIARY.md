# Dear Diary...

Here I'll write random hacks I found out during the compo. Maximum size of the resulting HTML file containing the whole game is 20480 bytes. Let's see what kind of trickey will I be able to achieve.

## PNG bootstrapping

Someone mentioned about this in [comments][1]. Two relevant search results showed up in Google: [a script][2] and [an article][3]. Author of the script points at [this article][4] as the source of original idea. Simple explanation: it's a trick to encode JS in an image which is then saved as PNG with it's zlib compression. A decoder is placed in a custom space inside PNG file. When the file is opened by a browser as HTML file, most of the file, except for embedded HTML code, is skipped as not valid markup. Decoder loads the whole file to the canvas, decodes and then executes JS. Profit!

## Decreasing size of audio files

I found a great [background music][5], but unfortunately it's file size is 5.5 MB (3:12, OGG). After cutting out a 0:15 sample, resampling it down to 2500 Hz and saving with quality level 0 (max is 10), I managed to end up with a 10488-byte file. It's hard to imagine that all other things will fit into remaining ~10 kB, but let's hope for the best for now.

## Looping audio

`<audio loop>` doesn't loop correctly, there is always a small gap before restart. Web Audio API (`window.AudioContext`) doesn't have this defect.


[1]: http://gynvael.coldwind.pl/?id=668#comments
[2]: https://gist.github.com/gasman/2560551
[3]: http://www.p01.org/andes/
[4]: https://web.archive.org/web/20120919185414/http://daeken.com/superpacking-js-demos
[5]: https://opengameart.org/content/adventure-begins
