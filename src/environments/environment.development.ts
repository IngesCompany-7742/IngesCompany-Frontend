export const environment = {
  production: false,
  // Fake API (json-server) until the DoofPlus Platform (Web Services) is deployed
  platformProviderApiBaseUrl: 'http://localhost:3000/api/v1',
  platformProviderQualityDocumentsEndpointPath: '/quality-documents',
  platformProviderDeviationsEndpointPath: '/deviations',
  platformProviderEvidenceEndpointPath: '/evidence',
  platformProviderCapaPlansEndpointPath: '/capa-plans',
  platformProviderCapaActionsEndpointPath: '/capa-actions',
  platformProviderAnalyticalResultsEndpointPath: '/analytical-results',
  platformProviderAuditsEndpointPath: '/audits',
  platformProviderAuditFindingsEndpointPath: '/audit-findings',
  platformProviderAuditEventsEndpointPath: '/audit-events',
  platformProviderRegulatoryReportsEndpointPath: '/regulatory-reports',
  platformProviderCollaborationTasksEndpointPath: '/collaboration-tasks',
  platformProviderTaskCommentsEndpointPath: '/task-comments',
  platformProviderTraceabilityGapsEndpointPath: '/traceability-gaps',
  platformProviderDeviationTrendsEndpointPath: '/deviation-trends',
};
