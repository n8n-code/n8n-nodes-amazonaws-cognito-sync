import type { INodeProperties } from 'n8n-workflow';

export const defaultDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					]
				}
			},
			"options": [
				{
					"name": "Bulk Publish",
					"value": "Bulk Publish",
					"action": "Bulk Publish",
					"description": "<p>Initiates a bulk publish of all existing datasets for an Identity Pool to the configured stream. Customers are limited to one successful bulk publish per 24 hours. Bulk publish is an asynchronous request, customers can see the status of the request via the GetBulkPublishDetails operation.</p><p>This API can only be called with developer credentials. You cannot call this API with the temporary user credentials provided by Cognito Identity.</p>",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/identitypools/{{$parameter[\"IdentityPoolId\"]}}/bulkpublish"
						}
					}
				},
				{
					"name": "Delete Dataset",
					"value": "Delete Dataset",
					"action": "Delete Dataset",
					"description": "<p>Deletes the specific dataset. The dataset will be deleted permanently, and the action can't be undone. Datasets that this dataset was merged with will no longer report the merge. Any subsequent operation on this dataset will result in a ResourceNotFoundException.</p> <p>This API can be called with temporary user credentials provided by Cognito Identity or with developer credentials.</p>",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/identitypools/{{$parameter[\"IdentityPoolId\"]}}/identities/{{$parameter[\"IdentityId\"]}}/datasets/{{$parameter[\"DatasetName\"]}}"
						}
					}
				},
				{
					"name": "Describe Dataset",
					"value": "Describe Dataset",
					"action": "Describe Dataset",
					"description": "<p>Gets meta data about a dataset by identity and dataset name. With Amazon Cognito Sync, each identity has access only to its own data. Thus, the credentials used to make this API call need to have access to the identity data.</p> <p>This API can be called with temporary user credentials provided by Cognito Identity or with developer credentials. You should use Cognito Identity credentials to make this API call.</p>",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identitypools/{{$parameter[\"IdentityPoolId\"]}}/identities/{{$parameter[\"IdentityId\"]}}/datasets/{{$parameter[\"DatasetName\"]}}"
						}
					}
				},
				{
					"name": "Update Records",
					"value": "Update Records",
					"action": "Update Records",
					"description": "<p>Posts updates to records and adds and deletes records for a dataset and user.</p> <p>The sync count in the record patch is your last known sync count for that record. The server will reject an UpdateRecords request with a ResourceConflictException if you try to patch a record with a new value but a stale sync count.</p><p>For example, if the sync count on the server is 5 for a key called highScore and you try and submit a new highScore with sync count of 4, the request will be rejected. To obtain the current sync count for a record, call ListRecords. On a successful update of the record, the response returns the new sync count for that record. You should present that sync count the next time you try to update that same record. When the record does not exist, specify the sync count as 0.</p> <p>This API can be called with temporary user credentials provided by Cognito Identity or with developer credentials.</p>",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/identitypools/{{$parameter[\"IdentityPoolId\"]}}/identities/{{$parameter[\"IdentityId\"]}}/datasets/{{$parameter[\"DatasetName\"]}}"
						}
					}
				},
				{
					"name": "Describe Identity Pool Usage",
					"value": "Describe Identity Pool Usage",
					"action": "Describe Identity Pool Usage",
					"description": "<p>Gets usage details (for example, data storage) about a particular identity pool.</p> <p>This API can only be called with developer credentials. You cannot call this API with the temporary user credentials provided by Cognito Identity.</p>",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identitypools/{{$parameter[\"IdentityPoolId\"]}}"
						}
					}
				},
				{
					"name": "Describe Identity Usage",
					"value": "Describe Identity Usage",
					"action": "Describe Identity Usage",
					"description": "<p>Gets usage information for an identity, including number of datasets and data usage.</p> <p>This API can be called with temporary user credentials provided by Cognito Identity or with developer credentials.</p>",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identitypools/{{$parameter[\"IdentityPoolId\"]}}/identities/{{$parameter[\"IdentityId\"]}}"
						}
					}
				},
				{
					"name": "Get Bulk Publish Details",
					"value": "Get Bulk Publish Details",
					"action": "Get Bulk Publish Details",
					"description": "<p>Get the status of the last BulkPublish operation for an identity pool.</p><p>This API can only be called with developer credentials. You cannot call this API with the temporary user credentials provided by Cognito Identity.</p>",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/identitypools/{{$parameter[\"IdentityPoolId\"]}}/getBulkPublishDetails"
						}
					}
				},
				{
					"name": "Get Cognito Events",
					"value": "Get Cognito Events",
					"action": "Get Cognito Events",
					"description": "<p>Gets the events and the corresponding Lambda functions associated with an identity pool.</p><p>This API can only be called with developer credentials. You cannot call this API with the temporary user credentials provided by Cognito Identity.</p>",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identitypools/{{$parameter[\"IdentityPoolId\"]}}/events"
						}
					}
				},
				{
					"name": "Set Cognito Events",
					"value": "Set Cognito Events",
					"action": "Set Cognito Events",
					"description": "<p>Sets the AWS Lambda function for a given event type for an identity pool. This request only updates the key/value pair specified. Other key/values pairs are not updated. To remove a key value pair, pass a empty value for the particular key.</p><p>This API can only be called with developer credentials. You cannot call this API with the temporary user credentials provided by Cognito Identity.</p>",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/identitypools/{{$parameter[\"IdentityPoolId\"]}}/events"
						}
					}
				},
				{
					"name": "Get Identity Pool Configuration",
					"value": "Get Identity Pool Configuration",
					"action": "Get Identity Pool Configuration",
					"description": "<p>Gets the configuration settings of an identity pool.</p><p>This API can only be called with developer credentials. You cannot call this API with the temporary user credentials provided by Cognito Identity.</p>",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identitypools/{{$parameter[\"IdentityPoolId\"]}}/configuration"
						}
					}
				},
				{
					"name": "Set Identity Pool Configuration",
					"value": "Set Identity Pool Configuration",
					"action": "Set Identity Pool Configuration",
					"description": "<p>Sets the necessary configuration for push sync.</p><p>This API can only be called with developer credentials. You cannot call this API with the temporary user credentials provided by Cognito Identity.</p>",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/identitypools/{{$parameter[\"IdentityPoolId\"]}}/configuration"
						}
					}
				},
				{
					"name": "List Datasets",
					"value": "List Datasets",
					"action": "List Datasets",
					"description": "<p>Lists datasets for an identity. With Amazon Cognito Sync, each identity has access only to its own data. Thus, the credentials used to make this API call need to have access to the identity data.</p> <p>ListDatasets can be called with temporary user credentials provided by Cognito Identity or with developer credentials. You should use the Cognito Identity credentials to make this API call.</p>",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identitypools/{{$parameter[\"IdentityPoolId\"]}}/identities/{{$parameter[\"IdentityId\"]}}/datasets"
						}
					}
				},
				{
					"name": "List Identity Pool Usage",
					"value": "List Identity Pool Usage",
					"action": "List Identity Pool Usage",
					"description": "<p>Gets a list of identity pools registered with Cognito.</p> <p>ListIdentityPoolUsage can only be called with developer credentials. You cannot make this API call with the temporary user credentials provided by Cognito Identity.</p>",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identitypools"
						}
					}
				},
				{
					"name": "List Records",
					"value": "List Records",
					"action": "List Records",
					"description": "<p>Gets paginated records, optionally changed after a particular sync count for a dataset and identity. With Amazon Cognito Sync, each identity has access only to its own data. Thus, the credentials used to make this API call need to have access to the identity data.</p> <p>ListRecords can be called with temporary user credentials provided by Cognito Identity or with developer credentials. You should use Cognito Identity credentials to make this API call.</p>",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identitypools/{{$parameter[\"IdentityPoolId\"]}}/identities/{{$parameter[\"IdentityId\"]}}/datasets/{{$parameter[\"DatasetName\"]}}/records"
						}
					}
				},
				{
					"name": "Register Device",
					"value": "Register Device",
					"action": "Register Device",
					"description": "<p>Registers a device to receive push sync notifications.</p><p>This API can only be called with temporary credentials provided by Cognito Identity. You cannot call this API with developer credentials.</p>",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/identitypools/{{$parameter[\"IdentityPoolId\"]}}/identity/{{$parameter[\"IdentityId\"]}}/device"
						}
					}
				},
				{
					"name": "Subscribe To Dataset",
					"value": "Subscribe To Dataset",
					"action": "Subscribe To Dataset",
					"description": "<p>Subscribes to receive notifications when a dataset is modified by another device.</p><p>This API can only be called with temporary credentials provided by Cognito Identity. You cannot call this API with developer credentials.</p>",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/identitypools/{{$parameter[\"IdentityPoolId\"]}}/identities/{{$parameter[\"IdentityId\"]}}/datasets/{{$parameter[\"DatasetName\"]}}/subscriptions/{{$parameter[\"DeviceId\"]}}"
						}
					}
				},
				{
					"name": "Unsubscribe From Dataset",
					"value": "Unsubscribe From Dataset",
					"action": "Unsubscribe From Dataset",
					"description": "<p>Unsubscribes from receiving notifications when a dataset is modified by another device.</p><p>This API can only be called with temporary credentials provided by Cognito Identity. You cannot call this API with developer credentials.</p>",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/identitypools/{{$parameter[\"IdentityPoolId\"]}}/identities/{{$parameter[\"IdentityId\"]}}/datasets/{{$parameter[\"DatasetName\"]}}/subscriptions/{{$parameter[\"DeviceId\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /identitypools/{IdentityPoolId}/bulkpublish",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Bulk Publish"
					]
				}
			}
		},
		{
			"displayName": "Identity Pool Id",
			"name": "IdentityPoolId",
			"required": true,
			"description": "A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID generation is unique within a region.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Bulk Publish"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Bulk Publish"
					]
				}
			}
		},
		{
			"displayName": "DELETE /identitypools/{IdentityPoolId}/identities/{IdentityId}/datasets/{DatasetName}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Dataset"
					]
				}
			}
		},
		{
			"displayName": "Identity Pool Id",
			"name": "IdentityPoolId",
			"required": true,
			"description": "A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID generation is unique within a region.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Dataset"
					]
				}
			}
		},
		{
			"displayName": "Identity Id",
			"name": "IdentityId",
			"required": true,
			"description": "A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID generation is unique within a region.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Dataset"
					]
				}
			}
		},
		{
			"displayName": "Dataset Name",
			"name": "DatasetName",
			"required": true,
			"description": "A string of up to 128 characters. Allowed characters are a-z, A-Z, 0-9, '_' (underscore), '-' (dash), and '.' (dot).",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Dataset"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Dataset"
					]
				}
			}
		},
		{
			"displayName": "GET /identitypools/{IdentityPoolId}/identities/{IdentityId}/datasets/{DatasetName}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Dataset"
					]
				}
			}
		},
		{
			"displayName": "Identity Pool Id",
			"name": "IdentityPoolId",
			"required": true,
			"description": "A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID generation is unique within a region.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Dataset"
					]
				}
			}
		},
		{
			"displayName": "Identity Id",
			"name": "IdentityId",
			"required": true,
			"description": "A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID generation is unique within a region.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Dataset"
					]
				}
			}
		},
		{
			"displayName": "Dataset Name",
			"name": "DatasetName",
			"required": true,
			"description": "A string of up to 128 characters. Allowed characters are a-z, A-Z, 0-9, '_' (underscore), '-' (dash), and '.' (dot).",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Dataset"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Dataset"
					]
				}
			}
		},
		{
			"displayName": "POST /identitypools/{IdentityPoolId}/identities/{IdentityId}/datasets/{DatasetName}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Records"
					]
				}
			}
		},
		{
			"displayName": "Identity Pool Id",
			"name": "IdentityPoolId",
			"required": true,
			"description": "A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID generation is unique within a region.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Records"
					]
				}
			}
		},
		{
			"displayName": "Identity Id",
			"name": "IdentityId",
			"required": true,
			"description": "A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID generation is unique within a region.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Records"
					]
				}
			}
		},
		{
			"displayName": "Dataset Name",
			"name": "DatasetName",
			"required": true,
			"description": "A string of up to 128 characters. Allowed characters are a-z, A-Z, 0-9, '_' (underscore), '-' (dash), and '.' (dot).",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Records"
					]
				}
			}
		},
		{
			"displayName": "X Amz Client Context",
			"name": "x-amz-Client-Context",
			"description": "Intended to supply a device ID that will populate the lastModifiedBy field referenced in other methods. The ClientContext field is not yet implemented.",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"x-amz-Client-Context": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Records"
					]
				}
			}
		},
		{
			"displayName": "Device Id",
			"name": "DeviceId",
			"type": "string",
			"default": "",
			"description": "The unique ID generated for this device by Cognito.",
			"routing": {
				"send": {
					"property": "DeviceId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Records"
					]
				}
			}
		},
		{
			"displayName": "Record Patches",
			"name": "RecordPatches",
			"type": "json",
			"default": "[\n  {\n    \"Key\": {},\n    \"Value\": {},\n    \"SyncCount\": {},\n    \"DeviceLastModifiedDate\": {}\n  }\n]",
			"description": "A list of patch operations.",
			"routing": {
				"send": {
					"property": "RecordPatches",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Records"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Sync Session Token",
			"name": "SyncSessionToken",
			"type": "string",
			"default": "",
			"description": "The SyncSessionToken returned by a previous call to ListRecords for this dataset and identity.",
			"routing": {
				"send": {
					"property": "SyncSessionToken",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Records"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Records"
					]
				}
			}
		},
		{
			"displayName": "GET /identitypools/{IdentityPoolId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Identity Pool Usage"
					]
				}
			}
		},
		{
			"displayName": "Identity Pool Id",
			"name": "IdentityPoolId",
			"required": true,
			"description": "A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID generation is unique within a region.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Identity Pool Usage"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Identity Pool Usage"
					]
				}
			}
		},
		{
			"displayName": "GET /identitypools/{IdentityPoolId}/identities/{IdentityId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Identity Usage"
					]
				}
			}
		},
		{
			"displayName": "Identity Pool Id",
			"name": "IdentityPoolId",
			"required": true,
			"description": "A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID generation is unique within a region.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Identity Usage"
					]
				}
			}
		},
		{
			"displayName": "Identity Id",
			"name": "IdentityId",
			"required": true,
			"description": "A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID generation is unique within a region.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Identity Usage"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Identity Usage"
					]
				}
			}
		},
		{
			"displayName": "POST /identitypools/{IdentityPoolId}/getBulkPublishDetails",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Bulk Publish Details"
					]
				}
			}
		},
		{
			"displayName": "Identity Pool Id",
			"name": "IdentityPoolId",
			"required": true,
			"description": "A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID generation is unique within a region.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Bulk Publish Details"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Bulk Publish Details"
					]
				}
			}
		},
		{
			"displayName": "GET /identitypools/{IdentityPoolId}/events",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Cognito Events"
					]
				}
			}
		},
		{
			"displayName": "Identity Pool Id",
			"name": "IdentityPoolId",
			"required": true,
			"description": "The Cognito Identity Pool ID for the request",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Cognito Events"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Cognito Events"
					]
				}
			}
		},
		{
			"displayName": "POST /identitypools/{IdentityPoolId}/events",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Set Cognito Events"
					]
				}
			}
		},
		{
			"displayName": "Identity Pool Id",
			"name": "IdentityPoolId",
			"required": true,
			"description": "The Cognito Identity Pool to use when configuring Cognito Events",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Set Cognito Events"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Events",
			"name": "Events",
			"type": "json",
			"default": "{}",
			"description": "The events to configure",
			"routing": {
				"send": {
					"property": "Events",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Set Cognito Events"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Set Cognito Events"
					]
				}
			}
		},
		{
			"displayName": "GET /identitypools/{IdentityPoolId}/configuration",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Identity Pool Configuration"
					]
				}
			}
		},
		{
			"displayName": "Identity Pool Id",
			"name": "IdentityPoolId",
			"required": true,
			"description": "A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. This is the ID of the pool for which to return a configuration.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Identity Pool Configuration"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Identity Pool Configuration"
					]
				}
			}
		},
		{
			"displayName": "POST /identitypools/{IdentityPoolId}/configuration",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Set Identity Pool Configuration"
					]
				}
			}
		},
		{
			"displayName": "Identity Pool Id",
			"name": "IdentityPoolId",
			"required": true,
			"description": "A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. This is the ID of the pool to modify.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Set Identity Pool Configuration"
					]
				}
			}
		},
		{
			"displayName": "Push Sync",
			"name": "PushSync",
			"type": "json",
			"default": "{\n  \"ApplicationArns\": [\n    null\n  ],\n  \"RoleArn\": {}\n}",
			"description": "Configuration options to be applied to the identity pool.",
			"routing": {
				"send": {
					"property": "PushSync",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Set Identity Pool Configuration"
					]
				}
			}
		},
		{
			"displayName": "Cognito Streams",
			"name": "CognitoStreams",
			"type": "json",
			"default": "{\n  \"RoleArn\": {},\n  \"StreamingStatus\": {}\n}",
			"description": "Configuration options for configure Cognito streams.",
			"routing": {
				"send": {
					"property": "CognitoStreams",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Set Identity Pool Configuration"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Set Identity Pool Configuration"
					]
				}
			}
		},
		{
			"displayName": "GET /identitypools/{IdentityPoolId}/identities/{IdentityId}/datasets",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Datasets"
					]
				}
			}
		},
		{
			"displayName": "Identity Pool Id",
			"name": "IdentityPoolId",
			"required": true,
			"description": "A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID generation is unique within a region.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Datasets"
					]
				}
			}
		},
		{
			"displayName": "Identity Id",
			"name": "IdentityId",
			"required": true,
			"description": "A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID generation is unique within a region.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Datasets"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "nextToken",
			"description": "A pagination token for obtaining the next page of results.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "nextToken",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Datasets"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "maxResults",
			"description": "The maximum number of results to be returned.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "maxResults",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Datasets"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Datasets"
					]
				}
			}
		},
		{
			"displayName": "GET /identitypools",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Identity Pool Usage"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "nextToken",
			"description": "A pagination token for obtaining the next page of results.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "nextToken",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Identity Pool Usage"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "maxResults",
			"description": "The maximum number of results to be returned.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "maxResults",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Identity Pool Usage"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Identity Pool Usage"
					]
				}
			}
		},
		{
			"displayName": "GET /identitypools/{IdentityPoolId}/identities/{IdentityId}/datasets/{DatasetName}/records",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Records"
					]
				}
			}
		},
		{
			"displayName": "Identity Pool Id",
			"name": "IdentityPoolId",
			"required": true,
			"description": "A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID generation is unique within a region.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Records"
					]
				}
			}
		},
		{
			"displayName": "Identity Id",
			"name": "IdentityId",
			"required": true,
			"description": "A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID generation is unique within a region.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Records"
					]
				}
			}
		},
		{
			"displayName": "Dataset Name",
			"name": "DatasetName",
			"required": true,
			"description": "A string of up to 128 characters. Allowed characters are a-z, A-Z, 0-9, '_' (underscore), '-' (dash), and '.' (dot).",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Records"
					]
				}
			}
		},
		{
			"displayName": "Last Sync Count",
			"name": "lastSyncCount",
			"description": "The last server sync count for this record.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "lastSyncCount",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Records"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "nextToken",
			"description": "A pagination token for obtaining the next page of results.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "nextToken",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Records"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "maxResults",
			"description": "The maximum number of results to be returned.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "maxResults",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Records"
					]
				}
			}
		},
		{
			"displayName": "Sync Session Token",
			"name": "syncSessionToken",
			"description": "A token containing a session ID, identity ID, and expiration.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "syncSessionToken",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Records"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Records"
					]
				}
			}
		},
		{
			"displayName": "POST /identitypools/{IdentityPoolId}/identity/{IdentityId}/device",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Register Device"
					]
				}
			}
		},
		{
			"displayName": "Identity Pool Id",
			"name": "IdentityPoolId",
			"required": true,
			"description": "A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. Here, the ID of the pool that the identity belongs to.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Register Device"
					]
				}
			}
		},
		{
			"displayName": "Identity Id",
			"name": "IdentityId",
			"required": true,
			"description": "The unique ID for this identity.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Register Device"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Platform",
			"name": "Platform",
			"type": "options",
			"default": "APNS",
			"description": "The SNS platform type (e.g. GCM, SDM, APNS, APNS_SANDBOX).",
			"options": [
				{
					"name": "APNS",
					"value": "APNS"
				},
				{
					"name": "APNS SANDBOX",
					"value": "APNS_SANDBOX"
				},
				{
					"name": "GCM",
					"value": "GCM"
				},
				{
					"name": "ADM",
					"value": "ADM"
				}
			],
			"routing": {
				"send": {
					"property": "Platform",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Register Device"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Token",
			"name": "Token",
			"type": "string",
			"default": "",
			"description": "The push token.",
			"routing": {
				"send": {
					"property": "Token",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Register Device"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Register Device"
					]
				}
			}
		},
		{
			"displayName": "POST /identitypools/{IdentityPoolId}/identities/{IdentityId}/datasets/{DatasetName}/subscriptions/{DeviceId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Subscribe To Dataset"
					]
				}
			}
		},
		{
			"displayName": "Identity Pool Id",
			"name": "IdentityPoolId",
			"required": true,
			"description": "A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. The ID of the pool to which the identity belongs.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Subscribe To Dataset"
					]
				}
			}
		},
		{
			"displayName": "Identity Id",
			"name": "IdentityId",
			"required": true,
			"description": "Unique ID for this identity.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Subscribe To Dataset"
					]
				}
			}
		},
		{
			"displayName": "Dataset Name",
			"name": "DatasetName",
			"required": true,
			"description": "The name of the dataset to subcribe to.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Subscribe To Dataset"
					]
				}
			}
		},
		{
			"displayName": "Device Id",
			"name": "DeviceId",
			"required": true,
			"description": "The unique ID generated for this device by Cognito.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Subscribe To Dataset"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Subscribe To Dataset"
					]
				}
			}
		},
		{
			"displayName": "DELETE /identitypools/{IdentityPoolId}/identities/{IdentityId}/datasets/{DatasetName}/subscriptions/{DeviceId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Unsubscribe From Dataset"
					]
				}
			}
		},
		{
			"displayName": "Identity Pool Id",
			"name": "IdentityPoolId",
			"required": true,
			"description": "A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. The ID of the pool to which this identity belongs.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Unsubscribe From Dataset"
					]
				}
			}
		},
		{
			"displayName": "Identity Id",
			"name": "IdentityId",
			"required": true,
			"description": "Unique ID for this identity.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Unsubscribe From Dataset"
					]
				}
			}
		},
		{
			"displayName": "Dataset Name",
			"name": "DatasetName",
			"required": true,
			"description": "The name of the dataset from which to unsubcribe.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Unsubscribe From Dataset"
					]
				}
			}
		},
		{
			"displayName": "Device Id",
			"name": "DeviceId",
			"required": true,
			"description": "The unique ID generated for this device by Cognito.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Unsubscribe From Dataset"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Unsubscribe From Dataset"
					]
				}
			}
		},
];
