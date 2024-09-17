# frontend-organiser-cycling-competion-group-7

Frontend for the requests by an organizer for cycling races.

## Tutorial

1. Make sure that the backend server is running. If this is not the case yet, first follow the instructions at: <https://github.com/lblod/app-cycling-form-group-7>

2. [Install docker-ember](https://github.com/madnificent/docker-ember)

3. Run the command

   ```
   ed npm install
   ```

   in your terminal. This will install all current node modules.

4. Run the command

   ```
   eds --proxy http://host:90
   ```

   in your terminal. This will launch the Ember server and proxy to your localhost on port 90.

5. Browse to: <http://localhost:4200>. This is the view that the unauthenticated users will see. For the view of authenticated users, browse to: <http://localhost:4200/mock-login>.

## Feature flags

Feature flags are used to enable/disable features in the application. They are defined in [config/environment.js](config/environment.js).

```javascript
// in config/environment.js
let ENV = {
  // Other configuration settings...
  features: {
    "new-feature": true, // Enable the 'new-feature' by default
    "beta-feature": false, // Disable the 'beta-feature' by default
  },
};
```

The configuration can be manually overridden by adding a query parameter to the URL:

`?feature-new-feature=false` to disable the 'new-feature'
`?feature-beta-feature=true` to enable the 'beta-feature'
The overriding will be saved in a cookie, so it will persist across page reloads. The cookie can be cleared by adding `?clear-feature-overrides=true` to the URL.

The feature flags can be used in the application by injecting the `features` service and calling the `isEnabled` method.

```javascript
import { inject as service } from "@ember/service";

export default class ExampleComponent extends Component {
  @service features;

  doSomething() {
    if (this.features.isEnabled("new-feature")) {
      // Implement the logic for the new feature
      console.log("New feature is enabled!");
    } else {
      // Implement the logic for the default behaviour without the new feature
      console.log("New feature is disabled!");
    }
  }
}
```

Or in template files by using the `is-feature-enabled` helper:

```handlebars
{{#if (is-feature-enabled "new-feature")}}
  <p>New feature is enabled!</p>
{{else}}
  <p>New feature is disabled!</p>
{{/if}}
```

### List of feature flags

| Name                | Description                                                                                        |
| ------------------- | -------------------------------------------------------------------------------------------------- |
| `show-forms-module` | Show the forms module in overview and navigation, the route remains functional, defaults to false. |

## Environment variables

This frontend is hosted by the [static-file-service](https://github.com/mu-semtech/static-file-service) microservice. It supports configuring our Ember application at runtime using environment variables. The following options are available for the lokaal mandatenbeheer image.
