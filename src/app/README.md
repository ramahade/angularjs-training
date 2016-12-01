# The `src/app` Directory

## Overview

```
src/
  |- app/
  |  |- app.js
  |  |- app.spec.js
  |  |- shoppingBag/
```

The `src/app` directory contains all code specific to this application. Apart
from `app.js` and its accompanying tests (discussed below), this directory is
filled with subdirectories corresponding to high-level modules of the
application, often corresponding to top-level routes. Each directory can have as
many subdirectories as it needs.

## `app.js`

This is our main app configuration file. It kickstarts the whole process by
requiring all the modules from `src/app` that we need. We must load these now to
ensure the routes are loaded. We only require the top-level module, and allow the submodules to
require their own submodules.

As a matter of course, we also require the template modules that are generated
during the build.

The modules from `src/common` should be required by the app
submodules that need them to ensure proper dependency handling. These are
app-wide dependencies that are required to assemble your app.

### Testing

Tests should exist alongside the code they test and that the build system should be smart enough to
know the difference and react accordingly. As such, the unit test for `app.js`
is `app.spec.js`.
