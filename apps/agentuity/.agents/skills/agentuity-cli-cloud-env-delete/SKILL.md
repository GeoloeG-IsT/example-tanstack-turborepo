---
name: agentuity-cli-cloud-env-delete
description: Delete an environment variable or secret. Requires authentication. Use for Agentuity cloud platform operations
version: "0.1.11"
license: Apache-2.0
allowed-tools: "Bash(agentuity:*)"
argument-hint: "<key>"
metadata:
  command: "agentuity cloud env delete"
  tags: "destructive deletes-resource slow requires-auth requires-project"
---

# Cloud Env Delete

Delete an environment variable or secret

## Prerequisites

- Authenticated with `agentuity auth login`
- Project context required (run from project directory or use `--project-id`)

## Usage

```bash
agentuity cloud env delete <key>
```

## Arguments

| Argument | Type | Required | Description |
|----------|------|----------|-------------|
| `<key>` | string | Yes | - |

## Examples

Delete variable:

```bash
bunx @agentuity/cli env delete OLD_FEATURE_FLAG
```

Delete a secret:

```bash
bunx @agentuity/cli env rm API_KEY
```

## Output

Returns JSON object:

```json
{
  "success": "boolean",
  "key": "string",
  "path": "string",
  "secret": "boolean"
}
```

| Field | Type | Description |
|-------|------|-------------|
| `success` | boolean | Whether the operation succeeded |
| `key` | string | Variable key that was deleted |
| `path` | string | Local file path where variable was removed |
| `secret` | boolean | Whether a secret was deleted |
