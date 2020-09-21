// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  api: 'http://localhost:3000',
  redirectUri: 'http://localhost:4200/',
  ga: 'UA-154138019-1',
  signIn: 'https://slack.com/oauth/v2/authorize?client_id=511475946403.1296558517926&scope=&user_scope=channels:read,files:read,files:write,groups:read,users.profile:read,users:read,search:read'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
