export const environment = {
  production: false,
  // Fake API (json-server) until the DoofPlus Platform (Web Services) is deployed
  platformProviderApiBaseUrl: 'http://localhost:3000/api/v1',
  platformProviderPlansEndpointPath: '/plans',
  platformProviderSubscriptionsEndpointPath: '/subscriptions',
  platformProviderInvoicesEndpointPath: '/invoices',
  platformProviderUsersEndpointPath: '/users',
  platformProviderRoleProfilesEndpointPath: '/role-profiles',
  platformProviderInvitationsEndpointPath: '/invitations',
  platformProviderProductsEndpointPath: '/products',
  platformProviderMasterFormulasEndpointPath: '/master-formulas',
  platformProviderFormulaItemsEndpointPath: '/formula-items',
  platformProviderProductionOrdersEndpointPath: '/production-orders',
  platformProviderOperationsEndpointPath: '/operations',
  platformProviderBatchesEndpointPath: '/batches',
  platformProviderBatchEventsEndpointPath: '/batch-events',
  platformProviderMaterialLotsEndpointPath: '/material-lots',
  landingPageUrl: 'https://ingescompany-7742.github.io/IngesCompany-LandingPage/'
};
