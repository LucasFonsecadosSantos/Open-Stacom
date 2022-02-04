// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  API_MOCK_URL: {
    BASE: "../../mocks"
  },
  API_URL: {
    BASE: 'http://0.0.0.0:3000',
    PROCEEDING: '/proceedings',
    PRICE_PLAN: '/pricePlans',
    COMMITTEE: '/committees',
    PAST_EDITIONS: '/pastEditions',
    TEMPLATES: '/templates',
    PERSON: '/person',
    CALLS: '/calls',
    PHOTO_GALLERY: '/photo-gallery',
    SPONSOR: '/sponsorship',
    VIDEO_GALLERY: '/video-gallery',
    ACTIVITY: '/activities',
    EVENT: '/event',
    SCHEDULE: '/schedule',
    GENERATE_BUILD_URL: `http://0.0.0.0:8888/api/event/generate`,
    CLOSE_EVENT: '/close'
  },
  API_CONNECTIONS_RETRY: 3,
  DEFAULT_AVATAR_PICTURE_PATH: `/assets/img/default-avatar.png`,
  API_BACKEND_SERVICES: {
    HOST: 'http://0.0.0.0',
    PORT: '8888',
    TEMPLATE: '/api/templates',
    CLOSE_EVENT: '/close'
  }
};


/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
