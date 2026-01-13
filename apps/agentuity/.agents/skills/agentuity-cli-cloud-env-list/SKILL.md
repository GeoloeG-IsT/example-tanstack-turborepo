---
name: agentuity-cli-cloud-env-list
description: List all environment variables and secrets. Requires authentication. Use for Agentuity cloud platform operations
version: "0.1.11"
license: Apache-2.0
allowed-tools: "Bash(agentuity:*)"
metadata:
  command: "agentuity cloud env list"
  tags: "read-only fast requires-auth requires-project"
---

# Cloud Env List

List all environment variables and secrets

## Prerequisites

- Authenticated with `agentuity auth login`
- Project context required (run from project directory or use `--project-id`)

## Usage

```bash
agentuity cloud env list [options]
```

## Options

| Option | Type | Required | Default | Description |
|--------|------|----------|---------|-------------|
| `--mask` | boolean | No | `true` | mask secret values in output (use --no-mask to show values) |
| `--secrets` | boolean | No | `false` | list only secrets |
| `--env-only` | boolean | No | `false` | list only environment variables |

## Examples

List all variables:

```bash
bunx @agentuity/cli env list
```

Show unmasked values:

```bash
bunx @agentuity/cli env list --no-mask
```

List only secrets:

```bash
bunx @agentuity/cli env list --secrets
```

List only env vars:

```bash
bunx @agentuity/cli env list --env-only
```

## Output

Returns: `object`
