export enum CACHE_KEYS {
    CURRENT_CONDITIONS = 'current',
    FORECAST = 'forecast'
};

// Cache expiration time in miliseconds
export const CACHE_EXPIRATION_TIME = 2 * 60 * 60 * 1000;
