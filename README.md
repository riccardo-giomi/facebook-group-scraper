# facebook-group-scraper

## Project setup

``` yarn install ```

You will then need to provide a Facebook app ID through the environment
variable `VUE_APP_FACEBOOK_APP_ID`, or editing `src/config/facebook.js`
directly.

Note: this application does not support .env files on its own, that would
require installing and configuring [dotenv](https://github.com/motdotla/dotenv)
on your own.

### Compiles and hot-reloads for development

``` yarn serve ```

To quickly provide an app id, run this instead:

``` VUE_APP_FACEBOOK_APP_ID=1234567890 yarn serve ```

### Compiles and minifies for production

``` yarn build ```

### Tests are a TODO

<!-- ### Run your unit tests

``` yarn test:unit ```

### Run your end-to-end tests

``` yarn test:e2e ``` -->

### Lints and fixes files

``` yarn lint ```
