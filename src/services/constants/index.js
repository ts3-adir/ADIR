export const cardType = Object.freeze({
    PRODUCT: 'PRODUCT',
    BRAND: 'BRAND',
    CATEGORY: 'CATEGORY',
  })
  
  export const shelvesType = Object.freeze({
    PRODUCT: 'PRODUCT',
    BRAND: 'BRAND',
    CATEGORY: 'CATEGORY',
    CUSTOM: 'CUSTOM',
    BANNER: 'BANNER',
  })
  
  export const productCardVisualizationsTypes = Object.freeze({
    ONE_PER_LINE: 'ONE_PER_LINE',
    TWO_PER_LINE: 'TWO_PER_LINE',
    CAROUSEL: 'CAROUSEL',
  })
  
  export const timelimeStatustType = Object.freeze({
    DONE: 'DONE',
    FAILED: 'FAILED',
    IN_PROGRESS: 'IN_PROGRESS',
  })
  
  export const paymentsId = Object.freeze({
    MONEY: 48,
  })
  
  export const notificationChannels = Object.freeze({
    GENERAL: {
      id: 'GENERAL',
      name: 'General',
      priority: 'max',
      sound: true,
    },
  })
  
  export const manageCartOperation = Object.freeze({
    PRODUCT_INCREMENT: 'PRODUCT_INCREMENT',
    PRODUCT_DECREMENT: 'PRODUCT_DECREMENT',
    PRODUCT_REMOVE: 'PRODUCT_REMOVE',
  })
  
  export const cartAddType = Object.freeze({
    QUICK_ADD: 'Quick Add',
    PDP_ADD: 'PDP Add',
    CART_ADD: 'Cart Add',
  })
  
  export const cartRemoveType = Object.freeze({
    REMOVE_SKU: 'Remove Sku',
    UNITS_REMOVED: 'Units Removed',
  })
  
  export const scrollPercentage = Object.freeze({
    HALF: '50%',
    COMPLETE: '100%',
  })
  
  export const stepInFlow = Object.freeze({
    BROWSE: 'Browse',
    CHECKOUT: 'Checkout',
    WELCOME: 'Welcome',
    DELIVERY_OPTIONS: 'Delivery options',
  })
  
  export const loginRegistrationType = Object.freeze({
    LOGIN: 'Login',
    REGISTRATION: 'Registration',
  })
  
  export const discountType = Object.freeze({
    FIXED_AMOUNT: 1,
    PERCENTAGE: 2,
  })
  
  export const discountTypeName = Object.freeze({
    FIXED_AMOUNT: 'FIXED_AMOUNT',
    PERCENTAGE: 'PERCENTAGE',
  })
  
  export const allowedUpdateConnections = Object.freeze(['wifi', 'ethernet', 'wimax', 'unknown', 'cellular'])
  
  export const distributorCategory = Object.freeze({
    PIT_STOP_SKOL: 'PIT_STOP_SKOL',
  })
  
  export const contactTypes = Object.freeze({
    CANCEL_ORDER: 'CANCEL_ORDER',
    MODIFY_ORDER: 'MODIFY_ORDER',
    OTHER: 'OTHER',
  })
  
  export const sharedOptions = Object.freeze({
    COPY_PASTE: 'Copy and paste',
  })
  
  export const defaultThrottleMilisecondsAwait = 1000
  
  export const orderStatusMap = {
    POC_ACCEPTED: {
      title: I18n.t('orders.detail.pocAccepted'),
    },
    PENDING: {
      title: I18n.t('orders.detail.pocPending'),
    },
    TRANSFERED: {
      title: I18n.t('orders.detail.pocPending'),
    },
    POC_REJECT: {
      title: I18n.t('orders.detail.pocRejected'),
    },
    POC_EXPIRED: {
      title: I18n.t('orders.detail.pocExpired'),
    },
    SUSPECT: {
      title: I18n.t('orders.detail.pocRejected'),
    },
    USER_CANCELLED: {
      title: I18n.t('orders.detail.pocRejected'),
    },
    CS_CANCELLEDOC: {
      title: I18n.t('orders.detail.pocRejected'),
    },
    POC_SCHEDULED: {
      title: I18n.t('orders.detail.pocScheduled'),
    },
    POC_PICKED_UP: {
      title: I18n.t('orders.detail.pocPickedUp'),
    },
    DM_ACCEPTED: {
      title: I18n.t('orders.detail.pocAccepted'),
    },
    DM_PICKED_UP: {
      title: I18n.t('orders.detail.pocAccepted'),
    },
    DM_WAITING_TO_PICK_UP: {
      title: I18n.t('orders.detail.pocAccepted'),
    },
    DM_EN_ROUTE: {
      title: I18n.t('orders.detail.pocInWay'),
    },
    DM_WAITING_CUSTOMER: {
      title: I18n.t('orders.detail.pocPending'),
    },
    FAILED: {
      title: I18n.t('orders.detail.pocRejected'),
    },
    DELIVERED: {
      title: I18n.t('orders.detail.pocDelivered'),
    },
  }
  
  export const coldDrinksCategories = [I18n.t('categories.beer'), I18n.t('categories.noAlcohol')]
  