---
name: agentuity-cli-cloud-sandbox-snapshot-generate
description: Generate a template snapshot build file. Use for Agentuity cloud platform operations
version: "0.1.11"
license: Apache-2.0
allowed-tools: "Bash(agentuity:*)"
metadata:
  command: "agentuity cloud sandbox snapshot generate"
---

# Cloud Sandbox Snapshot Generate

Generate a template snapshot build file

## Usage

```bash
agentuity cloud sandbox snapshot generate [options]
```

## Options

| Option | Type | Required | Default | Description |
|--------|------|----------|---------|-------------|
| `--format` | string | No | `"yaml"` | Output format (yaml or json) |

## Examples

Generate a YAML template (default):

```bash
bunx @agentuity/cli cloud sandbox snapshot generate
```

Generate a JSON template:

```bash
bunx @agentuity/cli cloud sandbox snapshot generate --format json
```

Save template to a file:

```bash
bunx @agentuity/cli cloud sandbox snapshot generate > agentuity-snapshot.yaml
```

## Output

Returns JSON object:

```json
{
  "format": "string",
  "content": "string"
}
```

| Field | Type | Description |
|-------|------|-------------|
| `format` | string | Output format |
| `content` | string | Generated template content |
