---
name: agentuity-cli-cloud-env-push
description: Push environment variables and secrets from local .env file to cloud. Requires authentication. Use for Agentuity cloud platform operations
version: "0.1.11"
license: Apache-2.0
allowed-tools: "Bash(agentuity:*)"
metadata:
  command: "agentuity cloud env push"
  tags: "mutating updates-resource slow api-intensive requires-auth requires-project"
---

# Cloud Env Push

Push environment variables and secrets from local .env file to cloud

## Prerequisites

- Authenticated with `agentuity auth login`
- Project context required (run from project directory or use `--project-id`)
- env set

## Usage

```bash
agentuity cloud env push
```

## Examples

Push all variables to cloud:

```bash
bunx @agentuity/cli env push
```

## Output

Returns JSON object:

```json
{
  "success": "boolean",
  "pushed": "number",
  "envCount": "number",
  "secretCount": "number",
  "source": "string"
}
```

| Field | Type | Description |
|-------|------|-------------|
| `success` | boolean | Whether push succeeded |
| `pushed` | number | Number of items pushed |
| `envCount` | number | Number of env vars pushed |
| `secretCount` | number | Number of secrets pushed |
| `source` | string | Source file path |
