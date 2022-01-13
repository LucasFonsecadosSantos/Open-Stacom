export const environment = {
  production: true,
  API_MOCK_URL: {
    BASE: "./../../mocks"
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
    GENERATE_BUILD_URL: `http://0.0.0.0:8888/api/event/generate`
  },
  API_CONNECTIONS_RETRY: 3,
  DEFAULT_AVATAR_PICTURE_PATH: `/assets/img/default-avatar.png`,
  API_BACKEND_SERVICES: {
    HOST: 'http://0.0.0.0',
    PORT: '8888',
    TEMPLATE: '/api/template'
  }
};
