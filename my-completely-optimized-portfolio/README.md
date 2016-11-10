## Website Performance Optimization Portfolio Project

This projects completely based on the optimization of the website. That is the functionality of the web page. In this projects we found the known bugs that by the chrome DevTools and fixed them to increase the functionality and performance of the website.Mainly there are two parts we had achieved. One is to achive the speed of webpage in both mobile and desktop greater than 90/100, Other is to achieve 60 Frames per second. 


### Getting started

#### Part 1: Optimize PageSpeed Insights score for index.html

1. Check out the repository
1. To inspect the site on your computer or phone, you can use the web address, 
  [https://neerajko.github.io/my-completely-optimized-portfolio/](https://neerajko.github.io/my-completely-optimized-portfolio/)

1. Copy the public URL ngrok gives you and try running it through PageSpeed Insights! [More on integrating ngrok, Grunt and PageSpeed.](http://www.jamescryer.com/2014/06/12/grunt-pagespeed-and-ngrok-locally-testing/)

#### Part 2: Optimize Frames per Second in pizza.html

Optimized the pizza/main.js with the help of Chrome DevTools.

You might find the FPS Counter/HUD Display useful in Chrome developer tools described here: [Chrome Dev Tools tips-and-tricks](https://developer.chrome.com/devtools/docs/tips-and-tricks).

### My Optimizations

Web Page Optimizer:

-Compressed png and jpg images using online compression tool to keep original dimensions of pictures.

 http://jpeg-optimizer.com/

 http://compresspng.com/

-Commented out href to eliminate online fonts that was causing an average of 18ms of loading.

-Inline style.css in index.html.

-Added media=”print” to href of print.css.

-Added async to googleAnalyticObject src.

-Added missing </div> to line 120 of index.html

Pizzeria:

-Compressed png and jpg images using online compression tool to keep original dimensions of pictures.

-http://jpeg-optimizer.com/

-http://compresspng.com/

-Corrected noise to noisy for getadj.

-Created pizzaVar to only have to call querySelectorAll once in changePizzaSizes function. Moved lines out of for loop that   only needed one call to configure variables for calculations for changePizzaSizes function.

-Created scrollVar in updatePositions function to remove document.body.scrollTop from for loop.

-Changed the number off pizzas from 200 to 31 to reduce the number of pizza elements. (256/8columns) -1.

-Tried to create a sin table to stop calling the math.sin function but was unsuccessful because of the scroll variable being used inside of the math.sin function.

### Optimization Tips and Tricks
* [Optimizing Performance](https://developers.google.com/web/fundamentals/performance/ "web performance")
* [Analyzing the Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/analyzing-crp.html "analyzing crp")
* [Optimizing the Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/optimizing-critical-rendering-path.html "optimize the crp!")
* [Avoiding Rendering Blocking CSS](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/render-blocking-css.html "render blocking css")
* [Optimizing JavaScript](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/adding-interactivity-with-javascript.html "javascript")
* [Measuring with Navigation Timing](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/measure-crp.html "nav timing api"). We didn't cover the Navigation Timing API in the first two lessons but it's an incredibly useful tool for automated page profiling. I highly recommend reading.
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/eliminate-downloads.html">The fewer the downloads, the better</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/optimize-encoding-and-transfer.html">Reduce the size of text</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/image-optimization.html">Optimize images</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching.html">HTTP caching</a>

### Customization with Bootstrap
The portfolio was built on Twitter's <a href="http://getbootstrap.com/">Bootstrap</a> framework. All custom styles are in `dist/css/portfolio.css` in the portfolio repo.

* <a href="http://getbootstrap.com/css/">Bootstrap's CSS Classes</a>
* <a href="http://getbootstrap.com/components/">Bootstrap's Components</a>

### Sample Portfolios

Feeling uninspired by the portfolio? Here's a list of cool portfolios I found after a few minutes of Googling.

* <a href="http://www.reddit.com/r/webdev/comments/280qkr/would_anybody_like_to_post_their_portfolio_site/">A great discussion about portfolios on reddit</a>
* <a href="http://ianlunn.co.uk/">http://ianlunn.co.uk/</a>
* <a href="http://www.adhamdannaway.com/portfolio">http://www.adhamdannaway.com/portfolio</a>
* <a href="http://www.timboelaars.nl/">http://www.timboelaars.nl/</a>
* <a href="http://futoryan.prosite.com/">http://futoryan.prosite.com/</a>
* <a href="http://playonpixels.prosite.com/21591/projects">http://playonpixels.prosite.com/21591/projects</a>
* <a href="http://colintrenter.prosite.com/">http://colintrenter.prosite.com/</a>
* <a href="http://calebmorris.prosite.com/">http://calebmorris.prosite.com/</a>
* <a href="http://www.cullywright.com/">http://www.cullywright.com/</a>
* <a href="http://yourjustlucky.com/">http://yourjustlucky.com/</a>
* <a href="http://nicoledominguez.com/portfolio/">http://nicoledominguez.com/portfolio/</a>
* <a href="http://www.roxannecook.com/">http://www.roxannecook.com/</a>
* <a href="http://www.84colors.com/portfolio.html">http://www.84colors.com/portfolio.html</a>
